<template>

    <article class="window">

        <div class="window__inner-container">

            <div class="window__main">
                <header class="window__bar">
                    <span class="window__bar-title"> {{ title }} </span>

                    <div class="window__bar-buttons">
                        <span v-show="readmeHtml" @click="toggleReadme">?</span>
                    </div>
                </header>

                <div class="window__image">
                    <img :src="generateImageUrl(title)" :alt="title">
                </div>

                <div class="window__tags" v-if="tags">
                    <span v-for="tag in tags" :key="tag" :class="getTagClass(tag)">
                        {{ tag }}
                    </span>
                </div>

                <section>
                    <p class="window__intro"> {{ intro }} </p>
                    <p class="window__description"> {{ description }} </p>
                </section>
            </div>
            
            <nav class="window__buttons" :class="{ 'multiple' : (visibleButtonsCount > 1) }" v-if="urls">
                <ul>
                    <li v-if="urls[0].code">
                        <a :href="urls[0].code" target="_blank" class="os-button">
                            <button class="window__buttons-code os-button__button">
                                <span>Repo</span>
                            </button>
                        </a>
                    </li>
                    <li v-if="urls[0].demo">
                        <a :href="urls[0].demo" target="_blank" class="os-button">
                            <button class="window__buttons-demo os-button__button">
                                <span>Demo</span>
                            </button>
                        </a>
                    </li>
                    <li v-if="urls[0].example">
                        <a :href="urls[0].example" target="_blank" class="os-button">
                            <button class="window__buttons-example os-button__button">
                                <span>Ejemplos</span>
                            </button>
                        </a>
                    </li>
                    <li v-if="urls[0].comingsoon">
                        <a :href="urls[0].comingsoon" target="_blank" class="os-button disabled-button">
                            <button class="window__buttons-comingsoon os-button__button">
                                <span>Próximamente</span>
                            </button>
                        </a>
                    </li>
                </ul>
                
            </nav>

        </div>

    </article>

    <Popup :is-visible="showReadme" :readme-html="readmeHtml" :closePopup="closePopup" />

</template>


<script>
import axios from 'axios';
import MarkdownIt from 'markdown-it';
import emoji from 'markdown-it-emoji';

import { computed, onMounted, ref } from 'vue';
import Popup from './Popup.vue';

export default {
    props: {
        title: String,          // window title
        intro: String,          // window intro
        description: String,    // window description
        tags: Array,            // window tags
        urls: Array,            // window URLs for buttons
        repo: String,           // repository name for Code button
        subrepo: String         // specifies if is subfolder in repository
    },

    components: {
        Popup
    },

    setup ( props ) {
        let readmeHtml = ref('')        // README content from repository's README.md
        let showReadme = ref(false)     // show README information

        // With this, we can get the README content markdown, including emojis
        const markdown = new MarkdownIt({ html: true })
        markdown.use(emoji)


        // Calculate how many buttons a window has
        const visibleButtonsCount = computed(() =>
            Object.keys(props.urls[0]).filter(( key ) => {
                return props.urls[0][key]
            }).length
        )


        // Generate image url using the title of the project
        const generateImageUrl = ( title ) => {
            // Remove spaces and special characters from the title and make it lowercase
            const cleanTitle = title
                                .toLowerCase()
                                .replace(/é/g, 'e')
                                .replace(/\?/g, '')                         
                                .replace(/[^a-zA-Z0-9]+/g, "-")

            // Return the dynamically generated image URL
            return `/assets/images/portfolio/${cleanTitle}.jpg`
        }


        // Get class from a tag, to add styles
        const getTagClass = ( tag ) => {
            const tagClass = tag
                                .toLowerCase()
                                .replace(/é/g, 'e')
                                .replace(/\?/g, '')
                                .replace(/[^a-zA-Z0-9]/g, '-')
            return tagClass
        }


        // Open and fetch the README content (from GitHub project)
        const openReadme = async () => {
            try {
                // We have to check both main and master branches
                const branchesToCheck = ['master', 'main']
                
                // Loop through the branch names and try fetching README content
                let readmeContent = null
                for ( const branch of branchesToCheck ) {
                    
                    // Check if repository is actually a subfolder in a bigger repository
                    if ( props.subrepo ) {
                        readmeContent = await fetchReadmeContent(`https://raw.githubusercontent.com/carla-ng/${props.repo}/${branch}/${props.subrepo}`)
                    } else {
                        readmeContent = await fetchReadmeContent(`https://raw.githubusercontent.com/carla-ng/${props.repo}/${branch}`)
                    }

                    if ( readmeContent ) {
                        break;  // if content is found, exit the loop
                    }
                }

                // Add the README content to the DOM as markdown
                if ( readmeContent ) {
                    const markdownContent = markdown.render(readmeContent)
                    readmeHtml.value = markdownContent
                }

            } catch ( error ) {
                console.error('Error fetching README:', error)
            }
        }


        // Fetch the README content (from GitHub project)
        const fetchReadmeContent = async ( repoUrl ) => {
            try {
                const response = await axios.get(`${repoUrl}/README.md`,
                    {
                        headers: {
                            Accept: 'application/vnd.github.v3.raw',
                        },
                    }
                )

                return response.data

            } catch ( error ) {
                return null
            }
        }


        // Show project README file info
        const toggleReadme = () => {
            showReadme.value = !showReadme.value
        }


        // Close popup with README file info
        const closePopup = () => {
            showReadme.value = false
        }


        onMounted(() => {
            openReadme()
        })

        
        return {
            readmeHtml,
            showReadme,
            visibleButtonsCount,

            closePopup,
            generateImageUrl,
            getTagClass,
            openReadme,
            toggleReadme,   
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.window {
    padding: 0.2rem;

    @media (max-width: $breakpoint-max-mobile) { margin: 2rem 0; }

    .window__inner-container {

        .window__main {
            .window__image {
                height: 200px;
                margin: 0.7rem 0.5rem;
            }

            .window__tags {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                margin: 0.7rem 0.5rem;

                @media (min-width: $breakpoint-min-tablet) { min-height: 3.7rem; }

                span {
                    background-color: $palette-color-04;
                    border-radius: 25px;
                    color: $font-color-02;
                    font-family: $font-family-02;
                    font-size: $font-size-09px;
                    height: fit-content;
                    letter-spacing: 0.05rem;
                    margin: 0.2rem;
                    padding: 0.3rem 0.5rem;
                    text-shadow: 1px 1px 5px #4d4d4d;

                    &.vue { background-color: $accent-color-01; }
                    &.javascript { background-color: $accent-color-02; }
                    &.css { background-color: $accent-color-03; }
                    &.tailwindcss { background-color: $accent-color-04; }
                    &.scss { background-color: $accent-color-05; }
                    &.jquery { background-color: $accent-color-06; }
                    &.bootstrap { background-color: #553c7b; }
                    &.react { background-color: #61dbfb; }
                   
                }
            }

            .window__intro {
                font-weight: 700;
                padding: 0 0.5rem;
            }

            .window__description { padding: 0 0.5rem 0.7rem 0.5rem; }
        }
        

        .window__buttons {
            padding-bottom: 1rem;

            ul {
                list-style: none;
                margin: 0;
                padding: 0;

                display: flex;
                justify-content: center;
            }

            
            &.multiple {
                ul {
                    justify-content: space-between;

                    li {
                        width: 50%;

                        .os-button {
                            .os-button__button { padding: 0; }
                        }
                    }
                }

                
            }
        }
    }    
}
</style>
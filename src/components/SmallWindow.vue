<template>

    <div class="window">

        <div class="window__inner-container">

            <div class="window__main">
                <div class="window__main__bar">
                    <span class="window__main__bar-title"> {{ title }} </span>

                    <div class="window__main__bar-buttons">
                        <span @click="toggleReadme">?</span>
                    </div>
                </div>

                <div class="window__main__image">
                    <img :src="generateImageUrl(title)" :alt="title">
                </div>

                <div class="window__main__tags" v-if="tags">
                    <span v-for="tag in tags" :key="tag" :class="getTagClass(tag)">
                        {{ tag }}
                    </span>
                </div>

                <div>
                    <p class="window__main__intro"> {{ intro }} </p>
                    <p class="window__main__description"> {{ description }} </p>
                </div>
            </div>
            
            <div class="window__buttons" :class="{ 'multiple' : (visibleButtonsCount > 1) }" v-if="urls">
                <a :href="urls[0].code" target="_blank" v-if="urls[0].code">
                    <button class="window__buttons-code">
                        <span>Código</span>
                    </button>
                </a>

                <a :href="urls[0].demo" target="_blank" v-if="urls[0].demo">
                    <button class="window__buttons-demo">
                        <span>Demo</span>
                    </button>
                </a>

                <a :href="urls[0].example" target="_blank" v-if="urls[0].example">
                    <button class="window__buttons-example">
                        <span>Ejemplos</span>
                    </button>
                </a>

                <a :href="urls[0].comingsoon" target="_blank" v-if="urls[0].comingsoon" class="disabled-button">
                    <button class="window__buttons-comingsoon">
                        <span>Próximamente</span>
                    </button>
                </a>
            </div>

        </div>

    </div>

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
        title: String,
        intro: String,
        description: String,
        tags: Array,
        urls: Array,
        repo: String
    },

    components: {
        Popup
    },

    setup ( props ) {
        const readmeContainer = ref(null)
        const readmeHtml = ref('')
        const showReadme = ref(false)

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


        // Get class from a tag
        const getTagClass = ( tag ) => {
            const tagClass = tag
                                .toLowerCase()
                                .replace(/é/g, 'e')
                                .replace(/\?/g, '')
                                .replace(/[^a-zA-Z0-9]/g, '-')
            return tagClass
        }


        // Open and fetch the README content (from github project)
        const openReadme = async () => {
            try {
                // We have to check both main and master branches
                const branchesToCheck = ['master', 'main']
                
                // Loop through the branch names and try fetching README content
                let readmeContent = null
                for ( const branch of branchesToCheck ) {
                    readmeContent = await fetchReadmeContent(`https://raw.githubusercontent.com/carla-ng/${props.repo}/${branch}`)

                    if ( readmeContent ) {
                        break;  // if content is found, exit the loop
                    }
                }

                // Add the README content to the DOM as Markdown
                if ( readmeContent ) {
                    const markdownContent = markdown.render(readmeContent)
                    readmeHtml.value = markdownContent
                }

            } catch ( error ) {
                console.error('Error fetching README:', error)
            }
        }


        // Fetch the README content (from github project)
        const fetchReadmeContent = async ( repoUrl ) => {
            try {
                const response = await axios.get(`${repoUrl}/README.md`,
                    {
                        headers: {
                            Accept: 'application/vnd.github.v3.raw', // Request raw content
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
            readmeContainer,
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
    background-color: $palette-color-01;
    border: 1px solid $palette-color-04;
    border-radius: 5px;
    box-shadow: 8px 9px 5px #DBD9D9;
    min-width: 0;
    padding: 0.2rem;

    @media (max-width: $breakpoint-max-mobile) {
        margin: 2rem 0;
    }

    .window__inner-container {
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .window__main {

            .window__main__bar {
                background-color: $palette-color-03;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                padding: 0.2rem 0.3rem;
                
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .window__main__bar-title {
                    color: $font-color-02;
                    font-family: $font-family-02;
                    font-size: $font-size-14px;
                    letter-spacing: 0.05rem;
                    line-height: 1.8;
                    overflow: hidden;
                    padding: 0 0.2rem;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .window__main__bar-buttons {
                    cursor: pointer;
                    position: relative;
                    
                    span {
                        background-color: $palette-color-01;
                        border: 1px solid $palette-color-04;
                        border-radius: 2px;
                        box-shadow: 2px 2px 0px #919191;
                        color: $font-color-01;
                        padding: 0 0.3rem;
                        user-select: none;
                    }

                    &:active {
                        transform: translateY(2px);

                        span { box-shadow: none; }
                    }
                }
            }

            .window__main__image {
                border-style: inset;
                height: 200px;
                margin: 0.7rem 0.5rem;
                overflow: hidden;

                display: flex;
                align-items: flex-start;

                img {
                   min-width: 100%;
                   min-height: 100%;
                   object-fit: cover;
                }
            }

            .window__main__tags {
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

                    &.vue { background-color: $accent-color-01; }
                    &.javascript { background-color: $accent-color-02; }
                    &.css { background-color: $accent-color-03; }
                    &.tailwindcss { background-color: $accent-color-04; }
                    &.scss { background-color: $accent-color-05; }
                    &.jquery { background-color: $accent-color-06; }
                    &.bootstrap { background-color: #553c7b; }
                    //&.mysql { background-color: #f29111; }
                    //&.wordpress { background-color: #00749c; }
                    //&.gsap { background-color: #88ce02; }
                   
                }
            }

            .window__main__intro {
                font-weight: bold;
                padding: 0 0.5rem;
            }

            .window__main__description {
                padding: 0 0.5rem 0.7rem 0.5rem;
            }
        }
        

        .window__buttons {
            padding-bottom: 1rem;
            
            display: flex;
            justify-content: center;

            a {
                border: 1px solid $palette-color-04;
                border-radius: 2px;
                box-shadow: 2px 2px 0px #919191;
                color: $palette-color-04;
                display: block;
                margin: 0 1rem;
                padding: 0.2rem;

                button {
                    background-color: #ffd6dd;
                    border: 1px dashed $palette-color-04;
                    cursor: pointer;
                    height: 100%;
                    padding: 0 2rem;
                    width: 100%;

                    span {
                        display: block;

                        &:first-letter { text-decoration:underline; }
                    }
                }

                &.disabled-button {
                    box-shadow: none;
                    opacity: 0.5;
                    pointer-events: none;
                }

                &:active {
                    box-shadow: none;
                    transform: translateY(2px);
                }
            }

            &.multiple {
                justify-content: space-between;

                a {
                    width: 50%;

                    button { padding: 0; }
                }
            }
        }
    }    
}
</style>
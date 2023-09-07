<template>

    <div class="window">

        <div class="window__inner-container">

            <div class="window__main">
                <div class="window__main__bar">
                    <span class="window__main__bar-title"> {{ title }} </span>

                    <div class="window__main__bar-buttons">
                        <span>?</span>
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
            
            <div class="window__buttons" v-if="urls">
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
            </div>

        </div>

    </div>

</template>


<script>
export default {
    props: {
        title: String,
        intro: String,
        description: String,
        tags: Array,
        urls: Array
    },

    setup ( ) {

        // Generate image url using the title of the project
        function generateImageUrl( title ) {
            // Remove spaces and special characters from the title and make it lowercase
            const cleanTitle = title
                                .toLowerCase()
                                .replace(/é/g, 'e')
                                .replace(/[^a-zA-Z0-9]+/g, "-")

            // Return the dynamically generated image URL
            return `/assets/images/portfolio/${cleanTitle}.jpg`
        }


        // Get class from a tag
        function getTagClass( tag ) {
            const tagClass = tag
                                .toLowerCase()
                                .replace(/é/g, 'e')
                                .replace(/[^a-zA-Z0-9]/g, '-')
            return tagClass
        }


        return {
            generateImageUrl,
            getTagClass
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
    padding: 0.2rem;

    margin: 2rem 0;  // TEMP

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
                    letter-spacing: 0.1rem;
                    line-height: 1.8;
                    padding: 0 0.2rem;
                }

                .window__main__bar-buttons {
                    cursor: pointer;
                    
                    span {
                        background-color: $palette-color-01;
                        border: 1px solid $palette-color-04;
                        border-radius: 2px;
                        box-shadow: 2px 2px 0px #919191;
                        color: $font-color-01;
                        padding: 0 0.3rem;
                    }
                }
            }

            .window__main__image {
                border-style: inset;
                height: 200px;
                margin: 0.7rem 0.5rem;
                overflow: hidden;

                img {
                    background-position: center center;
                    background-size: cover;
                    min-height: 200px;
                }
            }

            .window__main__tags {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                margin: 0.7rem 0.5rem;
                min-height: 3.7rem;

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

                    &:first-child { margin-inline-start: 0; }
                    &:last-child { margin-inline-end: 0; }
                    
                    &.vue { background-color: $accent-color-01; }
                    &.javascript { background-color: $accent-color-02; }
                    &.scss { background-color: $accent-color-03; }
                    &.tailwindcss { background-color: $accent-color-04; }
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
            justify-content: space-between;

            a {
                border: 1px solid $palette-color-04;
                border-radius: 2px;
                box-shadow: 2px 2px 0px #919191;
                color: $palette-color-04;
                display: block;
                margin: 0 1rem;
                padding: 0.2rem;
                width: 50%;

                button {
                    background-color: #ffd6dd;
                    border: 1px dashed $palette-color-04;
                    cursor: pointer;
                    height: 100%;
                    width: 100%;

                    // &.window__buttons-code {}
                    // &.window__buttons-demo {}

                    span {
                        display: block;

                        &:first-letter { text-decoration:underline; }
                    }
                }
            }
        }
    }    
}
</style>
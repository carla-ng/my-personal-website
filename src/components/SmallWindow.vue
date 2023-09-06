<template>

    <div class="window">
        <div class="window__bar">
            <span class="window__bar-title">My Pokémon Project</span>

            <div class="window__bar-buttons">
                <span>?</span>
            </div>
        </div>

        <div class="window__image">
            <img src="../assets/images/portfolio/my-pokemon-project.jpg" alt="My Pokémon Project">
        </div>

        <div class="window__tags">
            <span class="vue">Vue</span>
            <span class="javascript">JavaScript</span>
            <span>PokéAPI</span>
            <span class="scss">SCSS</span>
            <span class="tailwindcss">TailwindCSS</span>
        </div>

        <p class="window__description">
            Proyecto basado en el mundo Pokémon. Se listan los distintos Pokémon obtenidos de la PokéAPI, mostrando sus descripciones y sus características.
            Además incluye un apartado extra con un listado de ítems que pueden ser utilizados por los entrenadores del mundo Pokémon.
        </p>

        <div class="window__buttons">
            <a href="https://github.com/carla-ng/my-pokemon-project/" target="_blank">
                <button class="window__buttons-code">
                    <span>Código</span>
                </button>
            </a>

            <a href="https://carla-ng-my-pokemon-project.netlify.app/" target="_blank">
                <button class="window__buttons-demo">
                    <span>Demo</span>
                </button>
            </a>
        </div>
    </div>

</template>


<script>
export default {
    setup () {
        

        return {}
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

    margin: 4rem 0;  // TEMP
    width: 33%;  // TEMP

    .window__bar {
        background-color: $palette-color-03;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        padding: 0.2rem 0.3rem;
        
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .window__bar-title {
            color: $font-color-02;
            font-family: $font-family-02;
            font-size: $font-size-14px;
            letter-spacing: 0.1rem;
            line-height: 1.8;
            padding: 0 0.2rem;
        }

        .window__bar-buttons {
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

    .window__image {
        border-style: inset;
        margin: 0.7rem 0.5rem;
    }

    .window__tags {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0.7rem 0.5rem;

        span {
            background-color: $palette-color-04;
            border-radius: 25px;
            color: $font-color-02;
            font-family: $font-family-02;
            font-size: $font-size-09px;
            letter-spacing: 0.05rem;
            line-height: 1.7;
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

    .window__description {
        margin: 0.7rem 0.5rem;
    }

    .window__buttons {
        display: flex;
        justify-content: space-between;

        a {
            border: 1px solid $palette-color-04;
            border-radius: 2px;
            box-shadow: 2px 2px 0px #919191;
            color: $palette-color-04;
            display: block;
            margin: 1rem;
            padding: 0.2rem;
            width: 50%;

            button {
                background-color: #ffd6dd;
                border: 1px dashed $palette-color-04;
                cursor: pointer;
                height: 100%;
                width: 100%;

                &.window__buttons-code {}
                &.window__buttons-demo {}

                span {
                    display: block;

                    &:first-letter { text-decoration:underline; }
                }
            }
        }
    }
}
</style>
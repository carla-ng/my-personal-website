<template>
  <main class="about page-container">

    <h1 class="typewriter-effect">Acerca de mí</h1>

    <p class="primary-text">
        Pariatur labore cillum commodo ad fugiat quis pariatur labore sunt ad in anim est enim. Commodo laborum irure et ipsum. Labore adipisicing officia excepteur magna laboris voluptate ut ex veniam ea cupidatat sunt. Mollit pariatur quis irure et exercitation dolore. Ipsum id anim est aliqua est excepteur.
    </p>

    <div class="about__window">

        <div class="about__window__inner-container">
            <div class="about__window__bar">
                <span class="about__window__bar-title"> Aqui va titulo ventana </span>

                <div class="about__window__bar-buttons disabled-button">
                    <span>?</span>
                </div>
            </div>

            <div class="about__window__main">
                <div class="about__window__image">
                    <img :src="getCurrentContent.imageSrc" alt="Mi setup">
                </div>
                
                <div class="about__window__text">

                    <div class="about__window__text-info" v-html="getCurrentContent.text"></div>

                    <div class="about__window__text-buttons">
                        <div :class="{ 'disabled-button': isPrevButtonDisabled }">
                            <button class="prev" @click="previousStep">
                                <span>Anterior</span>
                            </button>
                        </div>
                        
                        <div :class="{ 'disabled-button': isNextButtonDisabled }">
                            <button class="next" @click="nextStep">
                                <span>Siguiente</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


  </main>
</template>


<script>
import { ref, computed } from 'vue';

export default {
    setup() {
        const currentIndex = ref(0)

        const content = [
            {
                text: `<p>Aute consectetur officia mollit anim sit et proident irure. Cillum magna nisi cupidatat est nulla. Aliquip irure nisi culpa elit nostrud in dolor consequat. Consectetur excepteur est commodo excepteur aliqua elit amet tempor veniam voluptate ea mollit. Nulla fugiat sit et nostrud sit laborum dolore aute quis. Ea laboris dolore aliqua aliqua et elit qui sit excepteur.</p>
                       <br>
                       <p>Eiusmod qui dolor occaecat laboris duis voluptate adipisicing quis. Cillum esse ipsum aliqua do esse. Nulla in pariatur laboris magna pariatur exercitation culpa labore labore cillum nisi veniam.</p>
                       <br>
                       <p>Velit ea laborum laboris deserunt mollit do. Reprehenderit ad ea anim ipsum reprehenderit consequat laboris. Ex aliqua ad excepteur adipisicing laborum laborum ullamco qui cillum in velit. Sunt mollit anim irure reprehenderit irure tempor occaecat id et labore amet amet.</p>`,
                imageSrc: 'assets/images/about/setup.jpg',
            },
            {
                text: `More about me here!`,
                imageSrc: 'assets/images/about/art_contest.jpg',
            },
        ]


        const getCurrentContent = computed(() => content[currentIndex.value])

        const isPrevButtonDisabled = computed(() => currentIndex.value === 0)
        const isNextButtonDisabled = computed(() => currentIndex.value === content.length - 1)


        const nextStep = () => {
            if ( currentIndex.value < content.length - 1 ) {
                currentIndex.value++
            }
        }

        const previousStep = () => {
            if ( currentIndex.value > 0 ) {
                currentIndex.value--
            }
        }


        return {
            getCurrentContent,
            isPrevButtonDisabled,
            isNextButtonDisabled,
            nextStep,
            previousStep
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

// TODO: unificar estilos para ventanas, ya que se repiten en mas de una pagina

.about {
    .about__window {
        background-color: $palette-color-01;
        border: 1px solid $palette-color-04;
        border-radius: 5px;
        box-shadow: 8px 9px 4px #bdbbbb;
        min-width: 0;
        padding: 0.2rem;

        .about__window__inner-container {
            height: 100%;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .about__window__bar {
                background-color: $palette-color-03;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                padding: 0.2rem 0.3rem;
                
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .about__window__bar-title {
                    color: $font-color-02;
                    font-family: $font-family-02;
                    font-size: $font-size-14px;
                    letter-spacing: 0.05rem;
                    line-height: 1.8;
                    overflow: hidden;
                    padding: 0 0.2rem;
                    text-overflow: ellipsis;
                    text-shadow: 1px 1px 3px #4d4d4d;
                    white-space: nowrap;
                }
                .about__window__bar-buttons {
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

                    &:active:not(.disabled-button) {
                        transform: translateY(2px);

                        span { box-shadow: none; }
                    }

                    &.disabled-button {
                        span {
                            box-shadow: none;
                            opacity: 0.5;
                            pointer-events: none;
                        }  
                    }
                }
            }

            .about__window__main {
                display: flex;
                flex-direction: column;

                @media (min-width: $breakpoint-min-tablet) {
                    flex-direction: row;

                    margin-top: 2rem;
                    margin-bottom: 2rem;
                }

                .about__window__image {
                    border-style: inset;
                    height: 400px;
                    margin: 1rem;
                    overflow: hidden;
                    user-select: none;

                    display: flex;
                    align-items: center;

                    @media (min-width: $breakpoint-min-tablet) {
                        height: 500px;
                        margin: 0 2rem;
                        width: 45%;
                    }

                    img {
                        min-width: 100%;
                        min-height: 100%;
                        object-fit: cover;
                    }
                }

                .about__window__text {
                    margin: 1rem;

                    display: flex;
                    flex-direction: column;
                    //align-items: flex-end;
                    justify-content: space-between;

                    @media (min-width: $breakpoint-min-tablet) { width: 55%; }

                    // .about__window__text-info {
                    //     p {}
                    // }

                    .about__window__text-buttons {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;

                        & > div {
                            border: 1px solid $palette-color-04;
                            border-radius: 2px;
                            box-shadow: 2px 2px 0px #919191;
                            color: $palette-color-04;
                            margin: 0 1rem;
                            padding: 0.2rem;
                            width: fit-content;

                            button {
                                background-color: #ffd6dd;
                                border: 1px dashed $palette-color-04;
                                cursor: pointer;
                                height: 100%;
                                padding: 0 2rem;
                                
                                span {
                                    display: block;
                                    user-select: none;

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
                    }
                }      
            }
      
        }

    }
}

</style>

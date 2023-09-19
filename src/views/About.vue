<template>
  <main class="about page-container">

    <h1 class="typewriter-effect">Acerca de mí</h1>

    <p class="primary-text">
        Conoce un poco más sobre las tecnologías con las que trabajo, mis gustos y mis pasatiempos. 
    </p>

    <div class="about__window">

        <div class="about__window__inner-container">
            <div class="about__window__bar">
                <span class="about__window__bar-title"> Carla Nardone ({{ currentIndex + 1 }}/2) </span>

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

    <div style="margin: 3rem 0; text-align: center;">AQUI VOY A PONER ALGUNOS DIBUJOS MIOS</div>


  </main>
</template>


<script>
import { ref, computed } from 'vue';

export default {
    setup() {
        const currentIndex = ref(0)

        const content = [
            {
                text: `
                        <p class="font-family-02 fs-24">¡Hola!</p>
                        <br>
                        <p>Mi nombre es <strong>Carla</strong>, y soy <strong>Ingeniera de Software especializada en desarrollo Front-end</strong>. Las tecnologías que suelo utilizar son <strong>JavaScript, Vue, jQuery, CSS/SCSS</strong> y <strong>TailwindCSS</strong>. También tengo un poco de experiencia trabajando con Back-end y BBDD, especialmente con <strong>PHP</strong> y <strong>MySQL</strong>.</p>
                        <br>
                        <p>Además de la programación, me interesa mucho la <strong>gestión de proyectos</strong>, soy una persona muy <strong>organizada</strong> y <strong>atenta</strong>. Estoy acostumbrada a trabajar con la metodología agile de <strong>Scrum</strong>.</p>
                      `,
                imageSrc: 'assets/images/about/setup.jpg',
            },
            {
                text: `
                        <p>En mi tiempo libre, si no me encuentro programando o siguiendo algún live stream de programación en <i>Twitch</i>, lo más probable es que me encuentre <b>leyendo, dibujando</b> o <b>jugando videojuegos</b>.</p>
                        <br>
                        <p>Gracias al <strong>dibujo</strong> y la <strong>pintura</strong>, he tenido la oportunidad de hacer un montón de nuevos amigos, y he podido participar en <strong>concursos de pintura rápida</strong> y hacer <strong>exposiciones colectivas</strong> en centros culturales.</p>
                        <br>
                        <p>En cuanto a los <strong>videojuegos</strong> que me gusta jugar, soy fan de los <strong>RPG</strong> estilo <i>Final Fantasy</i> y <i>Persona</i>, aunque últimamente he estado disfrutando más de los conocidos <strong>cozy games</strong>. Podrás encontrarme jugando principalmente en <strong>Nintendo Switch</strong> y <strong>Steam</strong>.</p>
                        <br>
                        <p>También me interesaría aprender en un futuro sobre <strong>desarrollo de videojuegos</strong>.</p>
                        `,
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
            currentIndex,
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
        margin: 0 auto;
        max-width: 1024px;
        min-width: 0;
        //padding: 0.2rem;

        @media (min-width: $breakpoint-min-tablet) {
            min-height: 750px;
            position: relative;
        }

        @media (min-width: $breakpoint-min-desktop) { min-height: 620px; }

        .about__window__inner-container {
            height: 100%;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            @media (min-width: $breakpoint-min-tablet) {
                position: absolute;
                top: 0;
            }

            .about__window__bar {
                background-color: $palette-color-03;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                padding: 0.2rem 0.3rem;
                margin: 0.2rem;
                
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .about__window__bar-title {
                    color: $font-color-02;
                    font-family: $font-family-02;
                    font-size: $font-size-12px;
                    letter-spacing: 0.05rem;
                    line-height: 1.8;
                    overflow: hidden;
                    padding: 0 0.2rem;
                    text-overflow: ellipsis;
                    text-shadow: 1px 1px 3px #4d4d4d;
                    white-space: nowrap;

                    @media (min-width: $breakpoint-min-tablet) { font-size: $font-size-14px; }
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

                    height: -webkit-fill-available;
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                }

                .about__window__image {
                    border-style: inset;
                    height: 350px;
                    margin: 1rem;
                    overflow: hidden;
                    user-select: none;

                    display: flex;
                    align-items: center;

                    @media (min-width: $breakpoint-min-tablet) {
                        height: 450px;
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

                    @media (min-width: $breakpoint-min-tablet) {
                        margin: 1rem 2rem 1rem 1rem;
                        width: 55%;
                    }

                    // .about__window__text-info {
                    //     p {}
                    // }

                    .about__window__text-buttons {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;

                        margin-top: 2rem;

                        @media (min-width: $breakpoint-min-desktop) { margin-top: 1rem; }

                        & > div {
                            border: 1px solid $palette-color-04;
                            border-radius: 2px;
                            box-shadow: 2px 2px 0px #919191;
                            color: $palette-color-04;
                            margin: 0 0.5rem;
                            padding: 0.2rem;
                            width: 50%;

                            @media (min-width: $breakpoint-min-tablet) {
                                margin: 0 1rem;
                                width: fit-content;
                            }

                            button {
                                background-color: #ffd6dd;
                                border: 1px dashed $palette-color-04;
                                cursor: pointer;
                                height: 100%;
                                padding: 0 1rem;
                                width: 100%;

                                @media (min-width: $breakpoint-min-tablet) { padding: 0 2rem; }
                                
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

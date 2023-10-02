<template>
  <main class="about page-container">

    <h1 class="typewriter-effect">Acerca de mí</h1>

    <p class="primary-text">
        Conoce un poco más sobre las tecnologías con las que trabajo, mis gustos y mis pasatiempos. 
    </p>

    <div class="about__window" ref="mySection">

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

    <p class="secondary-text">Aquí puedes ver algunos de mis dibujos:</p>

    <div class="about__drawings">

        <div v-for="(drawing, index) in drawings" :key="index">
            <img :src="drawing.url" :alt="drawing.alt" @click="openModal(drawing.url)">
        </div>

    </div>

    <div id="myModal" class="about__modal" @click="closeModal()">
        <span class="about__modal--close" @click="closeModal()">&times;</span>
        <img src="" alt="Enlarged Image" id="enlargedImg" class="about__modal--content">
    </div>


  </main>
</template>


<script>
import { ref, computed } from 'vue';

export default {
    setup() {
        const currentIndex = ref(0)                 // current window page
        const mySection = ref(null)                 // window to scroll up to
        //const isMobile = window.innerWidth < 481   // detect if user is on a mobile device

        
        // Information to be shown
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

        // Drawings
        const drawings = [
            {
                url: '/assets/images/about/drawing_witch2.jpg',
                alt: 'Drawing of a witch'
            },
            {
                url: '/assets/images/about/drawing_peach.jpg',
                alt: 'Drawing of Peach'
            },
            {
                url: '/assets/images/about/drawing_billie.jpg',
                alt: 'Drawing of Billie Eilish'
            },
            {
                url: '/assets/images/about/drawing_elf1.jpg',
                alt: 'Drawing of an Elf'
            },
            {
                url: '/assets/images/about/drawing_wednesday.jpg',
                alt: 'Drawing of Wednesday Addams'
            },
            {
                url: '/assets/images/about/drawing_elf3.jpg',
                alt: 'Drawing of an Elf'
            },
            {
                url: '/assets/images/about/drawing_fairy1.jpg',
                alt: 'Drawing of a Fairy'
            },
            {
                url: '/assets/images/about/drawing_jonghyun.jpg',
                alt: 'Drawing of Jonghyun'
            },
            {
                url: '/assets/images/about/drawing_fairy2.jpg',
                alt: 'Drawing of a Fairy'
            },
            {
                url: '/assets/images/about/drawing_elf2.jpg',
                alt: 'Drawing of an Elf'
            },
            {
                url: '/assets/images/about/drawing_seungyeon.jpg',
                alt: 'Drawing of Seungyeon'
            },
            {
                url: '/assets/images/about/drawing_witch1.jpg',
                alt: 'Drawing of a Witch'
            }
        ]

        // Current information shown on the window
        const getCurrentContent = computed(() => content[currentIndex.value])

        // Disable previous/next button according to current content
        const isPrevButtonDisabled = computed(() => currentIndex.value === 0)
        const isNextButtonDisabled = computed(() => currentIndex.value === content.length - 1)


        // Select next content
        const nextStep = () => {
            if ( currentIndex.value < content.length - 1 ) {
                currentIndex.value++
                scrollToSection()
            }
        }

        // Select previous content
        const previousStep = () => {
            if ( currentIndex.value > 0 ) {
                currentIndex.value--
                scrollToSection()
            }
        }
        

        // Scroll up to the top of the window (ref="mySection")
        const scrollToSection = () => {
            mySection.value.scrollIntoView({ behavior: 'smooth' })
        }

        // Open and close modal to show the enlarged drawing selected by user
        const openModal = ( imagePath ) => {
            const modal = document.getElementById('myModal')
            const img = document.getElementById('enlargedImg')
            img.src = imagePath
            modal.style.display = 'block'

            document.getElementsByTagName( 'html' )[0].classList.add('scroll-blocked')
        }
        const closeModal = () => {
            const modal = document.getElementById('myModal')
            modal.style.display = 'none'

            document.getElementsByTagName( 'html' )[0].classList.remove('scroll-blocked')
        }



        return {
            currentIndex,
            getCurrentContent,

            isPrevButtonDisabled,
            isNextButtonDisabled,
            mySection,
            nextStep,
            previousStep,

            drawings,
            openModal,
            closeModal,
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
                    //cursor: pointer;
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

    .secondary-text {
        margin-top: 4rem;
        text-align: center;
        max-width: 100%;
    }

    .about__drawings {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;

        @media (min-width: $breakpoint-min-tablet) { grid-template-columns: repeat(4, 1fr); }
        @media (min-width: $breakpoint-min-tablet) { grid-template-columns: repeat(6, 1fr); }

        div {
            height: 160px;
            overflow: hidden;

            display: flex;
            align-items: flex-start;

            img {
                cursor: pointer;
                min-width: 100%;
                min-height: 100%;
                object-fit: cover;
                scale: 1.1;
            }
        }
    }

    .about__modal {
        display: none;
        position: fixed;
        left: 0;
        top: 0;

        height: 100%;
        overflow: auto;
        width: 100%;
        z-index: 1;

        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.5);

        .about__modal--content {
            box-shadow: 0 0 5px $black;
            display: block;
            margin: auto;
            max-height: 90%;
            max-width: 90%;

            position: absolute;
            left: 50%;
            top: 50%;
            translate: -50% -50%;

            @media (min-width: $breakpoint-min-desktop) {
                max-height: 80%;
                max-width: 80%;
            }
        }

        .about__modal--close {
            position: absolute;
            top: 1rem;
            right: 2rem;

            color: $white;
            font-size: $font-size-56px;
            font-weight: bold;
            line-height: 1;
            transition: 0.3s;

            &:hover, &:focus {
                cursor: pointer;
                opacity: 0.6;
                text-decoration: none;
            }
        }
    }

    
}

</style>

<template>

    <main class="about page-container">

        <header class="about__header">
            <div class="about__header-info">
                <h1 class="typewriter-effect">Acerca de mí</h1>

                <p class="primary-text">
                    Conoce un poco más sobre las tecnologías con las que trabajo, mis gustos y mis pasatiempos. 
                </p>
            </div>

            <div class="about__header-img">
                <div class="pixelart__nintendo-switch"></div>
            </div>
        </header>


        <section class="window" ref="mySection">

            <div class="window__inner-container">
                <div class="window__bar">
                    <span class="window__bar-title"> Quién soy ({{ currentIndex + 1 }}/2) </span>

                    <div class="window__bar-buttons disabled-button">
                        <span>X</span>
                    </div>
                </div>

                <div class="window-about">
                    <div class="window__image">
                        <img :src="getCurrentContent.imageSrc" alt="Imagen sobre mi">
                    </div>
                    
                    <div class="window__text">

                        <div class="window__text-info" v-html="getCurrentContent.text"></div>

                        <div class="window__text-buttons">
                            <div :class="{ 'disabled-button': isPrevButtonDisabled }" class="os-button">
                                <button class="os-button__button prev" @click="previousStep">
                                    <span>Anterior</span>
                                </button>
                            </div>
                            
                            <div :class="{ 'disabled-button': isNextButtonDisabled }" class="os-button">
                                <button class="os-button__button next" @click="nextStep">
                                    <span>Siguiente</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>


        <article>
            <p class="secondary-text">Aquí puedes ver algunos de mis dibujos:</p>

            <div class="about__drawings">

                <div v-for="(drawing, index) in drawings" :key="index">
                    <img :src="drawing.url" :alt="drawing.alt" @click="openModal(drawing.url)">
                </div>

            </div>
        </article>


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
        const currentIndex = ref(0)     // current window page
        const mySection = ref(null)     // window/section to scroll up to

        
        // Information to be shown
        const content = [
            {
                text: `
                        <p class="font-family-02 fs-24">¡Hola!</p>
                        <br>
                        <p>Mi nombre es <strong>Carla</strong>, y soy <strong>Ingeniera de Software especializada en desarrollo Front-end</strong>. Las tecnologías que suelo utilizar son <strong>JavaScript, Vue, jQuery, CSS/SCSS</strong> y <strong>TailwindCSS</strong>. También tengo un poco de experiencia trabajando con Back-end y BBDD, especialmente con <strong>PHP</strong> y <strong>MySQL</strong>. Tengo mucho interés en aprender nuevas tecnologías.</p>
                        <br>
                        <p>Además de la programación, me interesa mucho la <strong>gestión de proyectos</strong>, soy una persona muy <strong>organizada</strong> y <strong>atenta</strong>. Estoy acostumbrada a trabajar con la metodología agile de <strong>Scrum</strong>.</p>
                        <br>
                        <p>También me gusta el <strong>desarrollo de videojuegos</strong> y me encuentro actualmente aprendiendo sobre ello (diseño con <strong>Photoshop</strong> y <strong>Maya</strong>, conceptualización y desarrollo en <strong>Unity</strong>).</p>
                      `,
                imageSrc: 'assets/images/about/setup.webp',
            },
            {
                text: `
                        <p>En mi tiempo libre, si no me encuentro programando o siguiendo algún live stream de programación en <i>Twitch</i>, lo más probable es que me encuentre <b>leyendo, dibujando</b> o <b>jugando videojuegos</b>.</p>
                        <br>
                        <p>Gracias al <strong>dibujo</strong> y la <strong>pintura</strong>, he tenido la oportunidad de hacer un montón de nuevos amigos, y he podido participar en <strong>concursos de pintura rápida</strong> y hacer <strong>exposiciones colectivas</strong> en centros culturales.</p>
                        <br>
                        <p>En cuanto a los <strong>videojuegos</strong> que me gusta jugar, soy fan de los <strong>RPG</strong> estilo <i>Final Fantasy</i> y <i>Persona</i>, aunque últimamente he estado disfrutando más de los conocidos <strong>cozy games</strong>. Podrás encontrarme jugando principalmente en <strong>Nintendo Switch</strong> y <strong>Steam</strong>.</p>
                        `,
                imageSrc: 'assets/images/about/art_contest.webp',
            },
        ]


        // Drawings
        const drawings = [
            {
                url: '/assets/images/about/drawing_witch2.webp',
                alt: 'Dibujo de una bruja'
            },
            {
                url: '/assets/images/about/drawing_peach.webp',
                alt: 'Dibujo de Peach'
            },
            {
                url: '/assets/images/about/drawing_billie.webp',
                alt: 'Dibujo de Billie Eilish'
            },
            {
                url: '/assets/images/about/drawing_elf1.webp',
                alt: 'Dibujo de un elfo'
            },
            {
                url: '/assets/images/about/drawing_wednesday.webp',
                alt: 'Dibujo de Wednesday Addams'
            },
            {
                url: '/assets/images/about/drawing_elf3.webp',
                alt: 'Dibujo de un elfo'
            },
            {
                url: '/assets/images/about/drawing_fairy1.webp',
                alt: 'Dibujo de un hada'
            },
            {
                url: '/assets/images/about/drawing_jonghyun.webp',
                alt: 'Dibujo de Jonghyun'
            },
            {
                url: '/assets/images/about/drawing_fairy2.webp',
                alt: 'Dibujo de un hada'
            },
            {
                url: '/assets/images/about/drawing_elf2.webp',
                alt: 'Dibujo de un elfo'
            },
            {
                url: '/assets/images/about/drawing_alolanraichu.webp',
                alt: 'Dibujo de un Alolan Raichu'
            },
            {
                url: '/assets/images/about/drawing_witch1.webp',
                alt: 'Dibujo de una bruja'
            }
        ]


        // Current information shown
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

            document.getElementsByTagName('html')[0].classList.add('scroll-blocked')
        }
        const closeModal = () => {
            const modal = document.getElementById('myModal')
            modal.style.display = 'none'

            document.getElementsByTagName('html')[0].classList.remove('scroll-blocked')
        }


        return {
            currentIndex,
            getCurrentContent,
            isNextButtonDisabled,
            isPrevButtonDisabled,
            mySection,

            closeModal,
            drawings,
            nextStep,
            openModal,
            previousStep,
        }
    }
}
</script>


<style lang="scss" scoped>
.about {
    
    .secondary-text {
        margin-top: 4rem;
        text-align: center;
        max-width: 100%;
    }

    .about__header {
        @media (max-width: $breakpoint-max-tablet) {
            display: flex;
            flex-direction: column;
        }

        @media (min-width: $breakpoint-min-desktop) { position: relative; }

        .about__header-info {
            @media (min-width: $breakpoint-min-desktop) {
                margin: 0 auto;
                max-width: 90%;
            }

            @media (max-width: $breakpoint-max-tablet) { order: 2; }
        }

        .about__header-img {

            @media (min-width: $breakpoint-min-desktop) {
                position: absolute;
                right: 22%;
                top: -60px;
                rotate: 15deg;
            }

            @media (max-width: $breakpoint-max-tablet) {
                display: flex;
                justify-content: center;

                height: 120px;
                order: 1;
                rotate: -10deg;
                translate: -92px 0;
            }

            .pixelart__nintendo-switch {
                @include nintendo_switch;
            }
        }        
    }

    .window {
        margin: 0 auto;
        max-width: 1024px;

        @media (min-width: $breakpoint-min-tablet) {
            min-height: 980px;
            position: relative;
        }

        @media (min-width: $breakpoint-min-desktop) { min-height: 710px; }
        @media (min-width: $breakpoint-min-desktop-xl) { min-height: 620px; }

        .window__inner-container {

            @media (min-width: $breakpoint-min-tablet) {
                position: absolute;
                top: 0;
            }

            .window__bar {
                margin: 0.2rem;

                .window__bar-title {
                    @media (max-width: $breakpoint-max-mobile) { font-size: $font-size-12px; }
                }
                .window__bar-buttons { cursor: auto; }
            }

            .window-about {
                display: flex;
                flex-direction: column;
                
                @media (max-width: $breakpoint-max-tablet) {
                    justify-content: space-around;
                    height: 100%;
                }

                @media (min-width: $breakpoint-min-desktop) {
                    flex-direction: row;

                    height: -moz-available;
                    height: -webkit-fill-available;
                    height: fill-available;

                    margin-top: 2rem;
                    margin-bottom: 2rem;
                }

                .window__image {
                    height: 350px;
                    margin: 1rem;

                    align-items: center;

                    @media (min-width: $breakpoint-min-desktop) {
                        height: 450px;
                        margin: 0 2rem;
                        width: 45%;
                    }
                }

                .window__text {
                    margin: 1rem;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    @media (min-width: $breakpoint-min-desktop) {
                        margin: 1rem 2rem 1rem 1rem;
                        width: 55%;
                    }

                    .window__text-buttons {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;

                        margin-top: 2rem;

                        @media (min-width: $breakpoint-min-desktop) { margin-top: 1rem; }

                        & > .os-button {
                            width: 50%;

                            @media (min-width: $breakpoint-min-desktop) {
                                margin: 0 1rem;
                                width: fit-content;
                            }

                            @media (max-width: $breakpoint-max-tablet) { margin: 0 0.5rem; }

                            .os-button__button {
                                @media (max-width: $breakpoint-max-tablet) { padding: 0 1rem; }
                            }
                        }
                    }
                }      
            }
      
        }

    }

    .about__drawings {
        display: grid;
        gap: 0.5rem;

        grid-template-columns: repeat(2, 1fr);
        @media (min-width: $breakpoint-min-tablet) { grid-template-columns: repeat(4, 1fr); }
        @media (min-width: $breakpoint-min-tablet) { grid-template-columns: repeat(6, 1fr); }

        div {
            height: 160px;
            overflow: hidden;
            user-select: none;

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
        z-index: 2;

        background-color: $veil-color;

        .about__modal--content {
            box-shadow: 0 0 5px $dark-color;
            display: block;
            margin: auto;
            max-height: 90%;
            max-width: 85%;

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

            color: $light-color;
            font-size: $font-size-56px;
            font-weight: 700;
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

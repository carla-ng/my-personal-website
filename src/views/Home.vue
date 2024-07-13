<template>

    <main class="home page-container">

        <section class="home__container">

            <div class="home__image">
                <div class="home__image-pixelart"></div>

                <div class="home__heart-container">
                    <div class="heart-1__container">
                        <div class="heart-1"></div>
                    </div>
                    <div class="heart-2__container">
                        <div class="heart-2"></div>
                    </div>
                    <div class="heart-3__container">
                        <div class="heart-3"></div>
                    </div>
                </div>
            </div>

            <div class="home__pixelart mobile">
                <SpeechBubble speechbubble_text='Todo el Pixel Art en esta web ha sido hecho por mí con CSS'
                              speechbubble_position='top-left'>
                </SpeechBubble>
            </div>

            <div class="home__intro">
                <h1 class="home__intro-welcome typewriter-effect">¡Bienvenid@!</h1>
                <p>
                    <span>Soy Carla</span>, una apasionada <strong class="accent-01">Desarrolladora Web especializada en Frontend</strong>.  Me encanta dar vida a proyectos creativos, diseñar experiencias únicas y explorar el <strong class="accent-01">diseño UX/UI</strong>. 
                    El arte de la programación es mi pasión, y aquí compartiré contigo mis creaciones y aventuras en el universo del diseño y el desarrollo web.
                </p>
            </div>
            
        </section>


        <div class="home__pixelart desktop">
            <SpeechBubble speechbubble_text='Todo el Pixel Art en esta web ha sido hecho por mí con CSS'
                          speechbubble_position='top-left'>
            </SpeechBubble>
        </div>

    </main>

</template>


<script>
import SpeechBubble from '@/components/SpeechBubble.vue';

export default {
    name: "Home",

    components: {
        SpeechBubble
    },
}
</script>


<style lang="scss" scoped>
.home {
    max-width: 875px;

    .home__temp-alert {
        margin-bottom: 2rem;
        @media (min-width: $breakpoint-min-desktop) { margin-bottom: 5rem; }
    }

    .home__container {
        display: flex;
        flex-direction: column;

        @media (min-width: $breakpoint-min-desktop) { flex-direction: row; }
        @media (max-width: $breakpoint-max-mobile) { align-items: center; }

        .home__image {
            height: 300px;
            margin: 0 auto;
            max-width: 300px;
            width: 100%;

            @media (min-width: $breakpoint-min-desktop) { flex: 0 0 30%; }

            @media (max-width: $breakpoint-max-tablet) {
                margin: 2rem auto 0 auto;
                order: 2;
            }

            & > .home__image-pixelart {
                scale: 3;

                @include home_drawing;
            }

            .home__heart-container {
                display: flex;
                justify-content: flex-start;
                align-items: flex-end;

                height: 187px;
                max-width: 72%;

                flex: 0 0 4%;
                flex-direction: column;

                @media (min-width: $breakpoint-min-desktop) { max-width: 82%; }

                .heart-1__container {
                    animation: showHeart1 3s linear infinite;

                    flex: 1;
                    height: 40%;

                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    order: 3;

                    .heart-1 {
                        @include heart1;
                    }
                }

                .heart-2__container {
                    animation: showHeart2 3s linear infinite;

                    flex: 1;
                    height: 30%;

                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    order: 2;

                    .heart-2 {
                        @include heart2;
                    }
                }

                .heart-3__container {
                    animation: showHeart3 3s linear infinite;

                    flex: 1;
                    height: 20%;

                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    order: 1;

                    .heart-3 {
                        @include heart3;
                    }
                }

            }
        }

        .home__intro {
            padding: 1rem;
            text-align: center;

            @media (min-width: $breakpoint-min-desktop) {
                flex: 0 0 70%;
                padding: 1rem 2rem 1rem 4rem;
            }

            @media (max-width: $breakpoint-max-tablet) { order: 1; }

            p {
                span { font-family: $font-family-02; }
            }
        }
    }

    .home__pixelart {
        margin: 0 auto;
        @media (min-width: $breakpoint-min-desktop) { margin: 0 2rem; }
        @media (max-width: $breakpoint-max-tablet) { order: 3; }
    }
}

@keyframes showHeart1 {
    0%, 33% { opacity: 1; }
    34%, 100% { opacity: 0; }
}

@keyframes showHeart2 {
    0%, 33% { opacity: 0; }
    34%, 66% { opacity: 1; }
    67%, 100% { opacity: 0; }
}

@keyframes showHeart3 {
    0%, 66% { opacity: 0; }
    67%, 99% { opacity: 1; }
}

</style>

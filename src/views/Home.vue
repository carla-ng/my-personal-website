<template>

    <main class="home page-container">

        <div class="home__temp-alert">
            <AlertBox alert_text='¡Pssst! ¡Esta web se encuentra en construcción!' />
        </div>


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
                    <span>Soy Carla</span>, una apasionada <strong class="accent-01">Desarrolladora Web especializada en Front-end</strong>. Me encanta dar vida a proyectos creativos y diseñar experiencias únicas.
                    Explorar el arte de la programación es mi pasión, y aquí compartiré contigo mis creaciones y aventuras en el universo del desarrollo web.
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
import AlertBox from '@/components/AlertBox.vue';
import SpeechBubble from '@/components/SpeechBubble.vue';

export default {
    name: "Home",

    components: {
        AlertBox,
        SpeechBubble
    },
}
</script>


<style lang="scss" scoped>
$heart-border-color: #000;
$heart-main-color: rgba(247, 156, 186, 1);
$heart-shadow-color: rgba(245, 105, 153, 1);
$heart-light-color: #fff;


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
                        height: 1px;
                        width: 1px;
                        box-shadow: 5px 3px 0 0 $heart-border-color, 6px 3px 0 0 $heart-border-color, 7px 3px 0 0 $heart-border-color, 8px 3px 0 0 $heart-border-color, 9px 3px 0 0 $heart-border-color, 13px 3px 0 0 $heart-border-color, 14px 3px 0 0 $heart-border-color, 15px 3px 0 0 $heart-border-color, 16px 3px 0 0 $heart-border-color, 17px 3px 0 0 $heart-border-color, 4px 4px 0 0 $heart-border-color, 5px 4px 0 0 $heart-main-color, 6px 4px 0 0 $heart-main-color, 7px 4px 0 0 $heart-main-color, 8px 4px 0 0 $heart-main-color, 9px 4px 0 0 $heart-main-color, 10px 4px 0 0 $heart-border-color, 12px 4px 0 0 $heart-border-color, 13px 4px 0 0 $heart-main-color, 14px 4px 0 0 $heart-main-color, 15px 4px 0 0 $heart-main-color, 16px 4px 0 0 $heart-main-color, 17px 4px 0 0 $heart-shadow-color, 18px 4px 0 0 $heart-border-color, 3px 5px 0 0 $heart-border-color, 4px 5px 0 0 $heart-main-color, 5px 5px 0 0 $heart-main-color, 6px 5px 0 0 $heart-light-color, 7px 5px 0 0 $heart-light-color, 8px 5px 0 0 $heart-light-color, 9px 5px 0 0 rgba(243,141,175,1), 10px 5px 0 0 $heart-main-color, 11px 5px 0 0 $heart-border-color, 12px 5px 0 0 $heart-main-color, 13px 5px 0 0 $heart-main-color, 14px 5px 0 0 $heart-main-color, 15px 5px 0 0 $heart-main-color, 16px 5px 0 0 $heart-main-color, 17px 5px 0 0 $heart-shadow-color, 18px 5px 0 0 $heart-shadow-color, 19px 5px 0 0 $heart-border-color, 3px 6px 0 0 $heart-border-color, 4px 6px 0 0 $heart-main-color, 5px 6px 0 0 $heart-light-color, 6px 6px 0 0 $heart-main-color, 7px 6px 0 0 $heart-main-color, 8px 6px 0 0 $heart-main-color, 9px 6px 0 0 $heart-light-color, 10px 6px 0 0 $heart-main-color, 11px 6px 0 0 $heart-main-color, 12px 6px 0 0 $heart-main-color, 13px 6px 0 0 $heart-main-color, 14px 6px 0 0 $heart-main-color, 15px 6px 0 0 $heart-main-color, 16px 6px 0 0 $heart-main-color, 17px 6px 0 0 $heart-main-color, 18px 6px 0 0 $heart-shadow-color, 19px 6px 0 0 $heart-border-color, 2px 7px 0 0 $heart-border-color, 3px 7px 0 0 $heart-main-color, 4px 7px 0 0 $heart-main-color, 5px 7px 0 0 $heart-main-color, 6px 7px 0 0 $heart-main-color, 7px 7px 0 0 $heart-main-color, 8px 7px 0 0 $heart-main-color, 9px 7px 0 0 $heart-main-color, 10px 7px 0 0 $heart-main-color, 11px 7px 0 0 $heart-main-color, 12px 7px 0 0 $heart-main-color, 13px 7px 0 0 $heart-main-color, 14px 7px 0 0 $heart-main-color, 15px 7px 0 0 $heart-main-color, 16px 7px 0 0 $heart-main-color, 17px 7px 0 0 $heart-main-color, 18px 7px 0 0 $heart-shadow-color, 19px 7px 0 0 $heart-shadow-color, 20px 7px 0 0 $heart-border-color, 2px 8px 0 0 $heart-border-color, 3px 8px 0 0 $heart-main-color, 4px 8px 0 0 $heart-main-color, 5px 8px 0 0 $heart-main-color, 6px 8px 0 0 $heart-main-color, 7px 8px 0 0 $heart-main-color, 8px 8px 0 0 $heart-main-color, 9px 8px 0 0 $heart-main-color, 10px 8px 0 0 $heart-main-color, 11px 8px 0 0 $heart-main-color, 12px 8px 0 0 $heart-main-color, 13px 8px 0 0 $heart-main-color, 14px 8px 0 0 $heart-main-color, 15px 8px 0 0 $heart-main-color, 16px 8px 0 0 $heart-main-color, 17px 8px 0 0 $heart-main-color, 18px 8px 0 0 $heart-main-color, 19px 8px 0 0 $heart-shadow-color, 20px 8px 0 0 $heart-border-color, 2px 9px 0 0 $heart-border-color, 3px 9px 0 0 $heart-main-color, 4px 9px 0 0 $heart-main-color, 5px 9px 0 0 $heart-main-color, 6px 9px 0 0 $heart-main-color, 7px 9px 0 0 $heart-main-color, 8px 9px 0 0 $heart-main-color, 9px 9px 0 0 $heart-main-color, 10px 9px 0 0 $heart-main-color, 11px 9px 0 0 $heart-main-color, 12px 9px 0 0 $heart-main-color, 13px 9px 0 0 $heart-main-color, 14px 9px 0 0 $heart-main-color, 15px 9px 0 0 $heart-main-color, 16px 9px 0 0 $heart-main-color, 17px 9px 0 0 $heart-main-color, 18px 9px 0 0 $heart-main-color, 19px 9px 0 0 $heart-shadow-color, 20px 9px 0 0 $heart-border-color, 2px 10px 0 0 $heart-border-color, 3px 10px 0 0 $heart-main-color, 4px 10px 0 0 $heart-main-color, 5px 10px 0 0 $heart-main-color, 6px 10px 0 0 $heart-main-color, 7px 10px 0 0 $heart-main-color, 8px 10px 0 0 $heart-main-color, 9px 10px 0 0 $heart-main-color, 10px 10px 0 0 $heart-main-color, 11px 10px 0 0 $heart-main-color, 12px 10px 0 0 $heart-main-color, 13px 10px 0 0 $heart-main-color, 14px 10px 0 0 $heart-main-color, 15px 10px 0 0 $heart-main-color, 16px 10px 0 0 $heart-main-color, 17px 10px 0 0 $heart-main-color, 18px 10px 0 0 $heart-shadow-color, 19px 10px 0 0 $heart-shadow-color, 20px 10px 0 0 $heart-border-color, 3px 11px 0 0 $heart-border-color, 4px 11px 0 0 $heart-main-color, 5px 11px 0 0 $heart-main-color, 6px 11px 0 0 $heart-main-color, 7px 11px 0 0 $heart-main-color, 8px 11px 0 0 $heart-main-color, 9px 11px 0 0 $heart-main-color, 10px 11px 0 0 $heart-main-color, 11px 11px 0 0 $heart-main-color, 12px 11px 0 0 $heart-main-color, 13px 11px 0 0 $heart-main-color, 14px 11px 0 0 $heart-main-color, 15px 11px 0 0 $heart-main-color, 16px 11px 0 0 $heart-main-color, 17px 11px 0 0 $heart-main-color, 18px 11px 0 0 $heart-shadow-color, 19px 11px 0 0 $heart-border-color, 3px 12px 0 0 $heart-border-color, 4px 12px 0 0 $heart-main-color, 5px 12px 0 0 $heart-main-color, 6px 12px 0 0 $heart-main-color, 7px 12px 0 0 $heart-main-color, 8px 12px 0 0 $heart-main-color, 9px 12px 0 0 $heart-main-color, 10px 12px 0 0 $heart-main-color, 11px 12px 0 0 $heart-main-color, 12px 12px 0 0 $heart-main-color, 13px 12px 0 0 $heart-main-color, 14px 12px 0 0 $heart-main-color, 15px 12px 0 0 $heart-main-color, 16px 12px 0 0 $heart-main-color, 17px 12px 0 0 $heart-shadow-color, 18px 12px 0 0 $heart-shadow-color, 19px 12px 0 0 $heart-border-color, 4px 13px 0 0 $heart-border-color, 5px 13px 0 0 $heart-main-color, 6px 13px 0 0 $heart-main-color, 7px 13px 0 0 $heart-main-color, 8px 13px 0 0 $heart-main-color, 9px 13px 0 0 $heart-main-color, 10px 13px 0 0 $heart-main-color, 11px 13px 0 0 $heart-main-color, 12px 13px 0 0 $heart-main-color, 13px 13px 0 0 $heart-main-color, 14px 13px 0 0 $heart-main-color, 15px 13px 0 0 $heart-main-color, 16px 13px 0 0 $heart-shadow-color, 17px 13px 0 0 $heart-shadow-color, 18px 13px 0 0 $heart-border-color, 5px 14px 0 0 $heart-border-color, 6px 14px 0 0 $heart-main-color, 7px 14px 0 0 $heart-main-color, 8px 14px 0 0 $heart-main-color, 9px 14px 0 0 $heart-main-color, 10px 14px 0 0 $heart-main-color, 11px 14px 0 0 $heart-main-color, 12px 14px 0 0 $heart-main-color, 13px 14px 0 0 $heart-main-color, 14px 14px 0 0 $heart-main-color, 15px 14px 0 0 $heart-shadow-color, 16px 14px 0 0 $heart-shadow-color, 17px 14px 0 0 $heart-border-color, 6px 15px 0 0 $heart-border-color, 7px 15px 0 0 $heart-main-color, 8px 15px 0 0 $heart-main-color, 9px 15px 0 0 $heart-main-color, 10px 15px 0 0 $heart-main-color, 11px 15px 0 0 $heart-main-color, 12px 15px 0 0 $heart-main-color, 13px 15px 0 0 $heart-main-color, 14px 15px 0 0 $heart-shadow-color, 15px 15px 0 0 $heart-shadow-color, 16px 15px 0 0 $heart-border-color, 7px 16px 0 0 $heart-border-color, 8px 16px 0 0 $heart-main-color, 9px 16px 0 0 $heart-main-color, 10px 16px 0 0 $heart-main-color, 11px 16px 0 0 $heart-main-color, 12px 16px 0 0 $heart-main-color, 13px 16px 0 0 $heart-shadow-color, 14px 16px 0 0 $heart-shadow-color, 15px 16px 0 0 $heart-border-color, 8px 17px 0 0 $heart-border-color, 9px 17px 0 0 $heart-main-color, 10px 17px 0 0 $heart-main-color, 11px 17px 0 0 $heart-main-color, 12px 17px 0 0 $heart-shadow-color, 13px 17px 0 0 $heart-shadow-color, 14px 17px 0 0 $heart-border-color, 9px 18px 0 0 $heart-border-color, 10px 18px 0 0 $heart-main-color, 11px 18px 0 0 $heart-shadow-color, 12px 18px 0 0 $heart-shadow-color, 13px 18px 0 0 $heart-border-color, 10px 19px 0 0 $heart-border-color, 11px 19px 0 0 $heart-shadow-color, 12px 19px 0 0 $heart-border-color, 11px 20px 0 0 $heart-border-color;
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
                        height: 2px;
                        width: 2px;
                        box-shadow: 10px 6px 0 0 $heart-border-color, 12px 6px 0 0 $heart-border-color, 14px 6px 0 0 $heart-border-color, 16px 6px 0 0 $heart-border-color, 18px 6px 0 0 $heart-border-color, 26px 6px 0 0 $heart-border-color, 28px 6px 0 0 $heart-border-color, 30px 6px 0 0 $heart-border-color, 32px 6px 0 0 $heart-border-color, 34px 6px 0 0 $heart-border-color, 8px 8px 0 0 $heart-border-color, 10px 8px 0 0 $heart-main-color, 12px 8px 0 0 $heart-main-color, 14px 8px 0 0 $heart-main-color, 16px 8px 0 0 $heart-main-color, 18px 8px 0 0 $heart-main-color, 20px 8px 0 0 $heart-border-color, 24px 8px 0 0 $heart-border-color, 26px 8px 0 0 $heart-main-color, 28px 8px 0 0 $heart-main-color, 30px 8px 0 0 $heart-main-color, 32px 8px 0 0 $heart-main-color, 34px 8px 0 0 $heart-shadow-color, 36px 8px 0 0 $heart-border-color, 6px 10px 0 0 $heart-border-color, 8px 10px 0 0 $heart-main-color, 10px 10px 0 0 $heart-main-color, 12px 10px 0 0 $heart-light-color, 14px 10px 0 0 $heart-light-color, 16px 10px 0 0 $heart-light-color, 18px 10px 0 0 rgba(243,141,175,1), 20px 10px 0 0 $heart-main-color, 22px 10px 0 0 $heart-border-color, 24px 10px 0 0 $heart-main-color, 26px 10px 0 0 $heart-main-color, 28px 10px 0 0 $heart-main-color, 30px 10px 0 0 $heart-main-color, 32px 10px 0 0 $heart-main-color, 34px 10px 0 0 $heart-shadow-color, 36px 10px 0 0 $heart-shadow-color, 38px 10px 0 0 $heart-border-color, 6px 12px 0 0 $heart-border-color, 8px 12px 0 0 $heart-main-color, 10px 12px 0 0 $heart-light-color, 12px 12px 0 0 $heart-main-color, 14px 12px 0 0 $heart-main-color, 16px 12px 0 0 $heart-main-color, 18px 12px 0 0 $heart-light-color, 20px 12px 0 0 $heart-main-color, 22px 12px 0 0 $heart-main-color, 24px 12px 0 0 $heart-main-color, 26px 12px 0 0 $heart-main-color, 28px 12px 0 0 $heart-main-color, 30px 12px 0 0 $heart-main-color, 32px 12px 0 0 $heart-main-color, 34px 12px 0 0 $heart-main-color, 36px 12px 0 0 $heart-shadow-color, 38px 12px 0 0 $heart-border-color, 4px 14px 0 0 $heart-border-color, 6px 14px 0 0 $heart-main-color, 8px 14px 0 0 $heart-main-color, 10px 14px 0 0 $heart-main-color, 12px 14px 0 0 $heart-main-color, 14px 14px 0 0 $heart-main-color, 16px 14px 0 0 $heart-main-color, 18px 14px 0 0 $heart-main-color, 20px 14px 0 0 $heart-main-color, 22px 14px 0 0 $heart-main-color, 24px 14px 0 0 $heart-main-color, 26px 14px 0 0 $heart-main-color, 28px 14px 0 0 $heart-main-color, 30px 14px 0 0 $heart-main-color, 32px 14px 0 0 $heart-main-color, 34px 14px 0 0 $heart-main-color, 36px 14px 0 0 $heart-shadow-color, 38px 14px 0 0 $heart-shadow-color, 40px 14px 0 0 $heart-border-color, 4px 16px 0 0 $heart-border-color, 6px 16px 0 0 $heart-main-color, 8px 16px 0 0 $heart-main-color, 10px 16px 0 0 $heart-main-color, 12px 16px 0 0 $heart-main-color, 14px 16px 0 0 $heart-main-color, 16px 16px 0 0 $heart-main-color, 18px 16px 0 0 $heart-main-color, 20px 16px 0 0 $heart-main-color, 22px 16px 0 0 $heart-main-color, 24px 16px 0 0 $heart-main-color, 26px 16px 0 0 $heart-main-color, 28px 16px 0 0 $heart-main-color, 30px 16px 0 0 $heart-main-color, 32px 16px 0 0 $heart-main-color, 34px 16px 0 0 $heart-main-color, 36px 16px 0 0 $heart-main-color, 38px 16px 0 0 $heart-shadow-color, 40px 16px 0 0 $heart-border-color, 4px 18px 0 0 $heart-border-color, 6px 18px 0 0 $heart-main-color, 8px 18px 0 0 $heart-main-color, 10px 18px 0 0 $heart-main-color, 12px 18px 0 0 $heart-main-color, 14px 18px 0 0 $heart-main-color, 16px 18px 0 0 $heart-main-color, 18px 18px 0 0 $heart-main-color, 20px 18px 0 0 $heart-main-color, 22px 18px 0 0 $heart-main-color, 24px 18px 0 0 $heart-main-color, 26px 18px 0 0 $heart-main-color, 28px 18px 0 0 $heart-main-color, 30px 18px 0 0 $heart-main-color, 32px 18px 0 0 $heart-main-color, 34px 18px 0 0 $heart-main-color, 36px 18px 0 0 $heart-main-color, 38px 18px 0 0 $heart-shadow-color, 40px 18px 0 0 $heart-border-color, 4px 20px 0 0 $heart-border-color, 6px 20px 0 0 $heart-main-color, 8px 20px 0 0 $heart-main-color, 10px 20px 0 0 $heart-main-color, 12px 20px 0 0 $heart-main-color, 14px 20px 0 0 $heart-main-color, 16px 20px 0 0 $heart-main-color, 18px 20px 0 0 $heart-main-color, 20px 20px 0 0 $heart-main-color, 22px 20px 0 0 $heart-main-color, 24px 20px 0 0 $heart-main-color, 26px 20px 0 0 $heart-main-color, 28px 20px 0 0 $heart-main-color, 30px 20px 0 0 $heart-main-color, 32px 20px 0 0 $heart-main-color, 34px 20px 0 0 $heart-main-color, 36px 20px 0 0 $heart-shadow-color, 38px 20px 0 0 $heart-shadow-color, 40px 20px 0 0 $heart-border-color, 6px 22px 0 0 $heart-border-color, 8px 22px 0 0 $heart-main-color, 10px 22px 0 0 $heart-main-color, 12px 22px 0 0 $heart-main-color, 14px 22px 0 0 $heart-main-color, 16px 22px 0 0 $heart-main-color, 18px 22px 0 0 $heart-main-color, 20px 22px 0 0 $heart-main-color, 22px 22px 0 0 $heart-main-color, 24px 22px 0 0 $heart-main-color, 26px 22px 0 0 $heart-main-color, 28px 22px 0 0 $heart-main-color, 30px 22px 0 0 $heart-main-color, 32px 22px 0 0 $heart-main-color, 34px 22px 0 0 $heart-main-color, 36px 22px 0 0 $heart-shadow-color, 38px 22px 0 0 $heart-border-color, 6px 24px 0 0 $heart-border-color, 8px 24px 0 0 $heart-main-color, 10px 24px 0 0 $heart-main-color, 12px 24px 0 0 $heart-main-color, 14px 24px 0 0 $heart-main-color, 16px 24px 0 0 $heart-main-color, 18px 24px 0 0 $heart-main-color, 20px 24px 0 0 $heart-main-color, 22px 24px 0 0 $heart-main-color, 24px 24px 0 0 $heart-main-color, 26px 24px 0 0 $heart-main-color, 28px 24px 0 0 $heart-main-color, 30px 24px 0 0 $heart-main-color, 32px 24px 0 0 $heart-main-color, 34px 24px 0 0 $heart-shadow-color, 36px 24px 0 0 $heart-shadow-color, 38px 24px 0 0 $heart-border-color, 8px 26px 0 0 $heart-border-color, 10px 26px 0 0 $heart-main-color, 12px 26px 0 0 $heart-main-color, 14px 26px 0 0 $heart-main-color, 16px 26px 0 0 $heart-main-color, 18px 26px 0 0 $heart-main-color, 20px 26px 0 0 $heart-main-color, 22px 26px 0 0 $heart-main-color, 24px 26px 0 0 $heart-main-color, 26px 26px 0 0 $heart-main-color, 28px 26px 0 0 $heart-main-color, 30px 26px 0 0 $heart-main-color, 32px 26px 0 0 $heart-shadow-color, 34px 26px 0 0 $heart-shadow-color, 36px 26px 0 0 $heart-border-color, 10px 28px 0 0 $heart-border-color, 12px 28px 0 0 $heart-main-color, 14px 28px 0 0 $heart-main-color, 16px 28px 0 0 $heart-main-color, 18px 28px 0 0 $heart-main-color, 20px 28px 0 0 $heart-main-color, 22px 28px 0 0 $heart-main-color, 24px 28px 0 0 $heart-main-color, 26px 28px 0 0 $heart-main-color, 28px 28px 0 0 $heart-main-color, 30px 28px 0 0 $heart-shadow-color, 32px 28px 0 0 $heart-shadow-color, 34px 28px 0 0 $heart-border-color, 12px 30px 0 0 $heart-border-color, 14px 30px 0 0 $heart-main-color, 16px 30px 0 0 $heart-main-color, 18px 30px 0 0 $heart-main-color, 20px 30px 0 0 $heart-main-color, 22px 30px 0 0 $heart-main-color, 24px 30px 0 0 $heart-main-color, 26px 30px 0 0 $heart-main-color, 28px 30px 0 0 $heart-shadow-color, 30px 30px 0 0 $heart-shadow-color, 32px 30px 0 0 $heart-border-color, 14px 32px 0 0 $heart-border-color, 16px 32px 0 0 $heart-main-color, 18px 32px 0 0 $heart-main-color, 20px 32px 0 0 $heart-main-color, 22px 32px 0 0 $heart-main-color, 24px 32px 0 0 $heart-main-color, 26px 32px 0 0 $heart-shadow-color, 28px 32px 0 0 $heart-shadow-color, 30px 32px 0 0 $heart-border-color, 16px 34px 0 0 $heart-border-color, 18px 34px 0 0 $heart-main-color, 20px 34px 0 0 $heart-main-color, 22px 34px 0 0 $heart-main-color, 24px 34px 0 0 $heart-shadow-color, 26px 34px 0 0 $heart-shadow-color, 28px 34px 0 0 $heart-border-color, 18px 36px 0 0 $heart-border-color, 20px 36px 0 0 $heart-main-color, 22px 36px 0 0 $heart-shadow-color, 24px 36px 0 0 $heart-shadow-color, 26px 36px 0 0 $heart-border-color, 20px 38px 0 0 $heart-border-color, 22px 38px 0 0 $heart-shadow-color, 24px 38px 0 0 $heart-border-color, 22px 40px 0 0 $heart-border-color;
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
                        height: 3px;
                        width: 3px;
                        box-shadow: 15px 9px 0 0 $heart-border-color, 18px 9px 0 0 $heart-border-color, 21px 9px 0 0 $heart-border-color, 24px 9px 0 0 $heart-border-color, 27px 9px 0 0 $heart-border-color, 39px 9px 0 0 $heart-border-color, 42px 9px 0 0 $heart-border-color, 45px 9px 0 0 $heart-border-color, 48px 9px 0 0 $heart-border-color, 51px 9px 0 0 $heart-border-color, 12px 12px 0 0 $heart-border-color, 15px 12px 0 0 $heart-main-color, 18px 12px 0 0 $heart-main-color, 21px 12px 0 0 $heart-main-color, 24px 12px 0 0 $heart-main-color, 27px 12px 0 0 $heart-main-color, 30px 12px 0 0 $heart-border-color, 36px 12px 0 0 $heart-border-color, 39px 12px 0 0 $heart-main-color, 42px 12px 0 0 $heart-main-color, 45px 12px 0 0 $heart-main-color, 48px 12px 0 0 $heart-main-color, 51px 12px 0 0 $heart-shadow-color, 54px 12px 0 0 $heart-border-color, 9px 15px 0 0 $heart-border-color, 12px 15px 0 0 $heart-main-color, 15px 15px 0 0 $heart-main-color, 18px 15px 0 0 $heart-light-color, 21px 15px 0 0 $heart-light-color, 24px 15px 0 0 $heart-light-color, 27px 15px 0 0 rgba(243,141,175,1), 30px 15px 0 0 $heart-main-color, 33px 15px 0 0 $heart-border-color, 36px 15px 0 0 $heart-main-color, 39px 15px 0 0 $heart-main-color, 42px 15px 0 0 $heart-main-color, 45px 15px 0 0 $heart-main-color, 48px 15px 0 0 $heart-main-color, 51px 15px 0 0 $heart-shadow-color, 54px 15px 0 0 $heart-shadow-color, 57px 15px 0 0 $heart-border-color, 9px 18px 0 0 $heart-border-color, 12px 18px 0 0 $heart-main-color, 15px 18px 0 0 $heart-light-color, 18px 18px 0 0 $heart-main-color, 21px 18px 0 0 $heart-main-color, 24px 18px 0 0 $heart-main-color, 27px 18px 0 0 $heart-light-color, 30px 18px 0 0 $heart-main-color, 33px 18px 0 0 $heart-main-color, 36px 18px 0 0 $heart-main-color, 39px 18px 0 0 $heart-main-color, 42px 18px 0 0 $heart-main-color, 45px 18px 0 0 $heart-main-color, 48px 18px 0 0 $heart-main-color, 51px 18px 0 0 $heart-main-color, 54px 18px 0 0 $heart-shadow-color, 57px 18px 0 0 $heart-border-color, 6px 21px 0 0 $heart-border-color, 9px 21px 0 0 $heart-main-color, 12px 21px 0 0 $heart-main-color, 15px 21px 0 0 $heart-main-color, 18px 21px 0 0 $heart-main-color, 21px 21px 0 0 $heart-main-color, 24px 21px 0 0 $heart-main-color, 27px 21px 0 0 $heart-main-color, 30px 21px 0 0 $heart-main-color, 33px 21px 0 0 $heart-main-color, 36px 21px 0 0 $heart-main-color, 39px 21px 0 0 $heart-main-color, 42px 21px 0 0 $heart-main-color, 45px 21px 0 0 $heart-main-color, 48px 21px 0 0 $heart-main-color, 51px 21px 0 0 $heart-main-color, 54px 21px 0 0 $heart-shadow-color, 57px 21px 0 0 $heart-shadow-color, 60px 21px 0 0 $heart-border-color, 6px 24px 0 0 $heart-border-color, 9px 24px 0 0 $heart-main-color, 12px 24px 0 0 $heart-main-color, 15px 24px 0 0 $heart-main-color, 18px 24px 0 0 $heart-main-color, 21px 24px 0 0 $heart-main-color, 24px 24px 0 0 $heart-main-color, 27px 24px 0 0 $heart-main-color, 30px 24px 0 0 $heart-main-color, 33px 24px 0 0 $heart-main-color, 36px 24px 0 0 $heart-main-color, 39px 24px 0 0 $heart-main-color, 42px 24px 0 0 $heart-main-color, 45px 24px 0 0 $heart-main-color, 48px 24px 0 0 $heart-main-color, 51px 24px 0 0 $heart-main-color, 54px 24px 0 0 $heart-main-color, 57px 24px 0 0 $heart-shadow-color, 60px 24px 0 0 $heart-border-color, 6px 27px 0 0 $heart-border-color, 9px 27px 0 0 $heart-main-color, 12px 27px 0 0 $heart-main-color, 15px 27px 0 0 $heart-main-color, 18px 27px 0 0 $heart-main-color, 21px 27px 0 0 $heart-main-color, 24px 27px 0 0 $heart-main-color, 27px 27px 0 0 $heart-main-color, 30px 27px 0 0 $heart-main-color, 33px 27px 0 0 $heart-main-color, 36px 27px 0 0 $heart-main-color, 39px 27px 0 0 $heart-main-color, 42px 27px 0 0 $heart-main-color, 45px 27px 0 0 $heart-main-color, 48px 27px 0 0 $heart-main-color, 51px 27px 0 0 $heart-main-color, 54px 27px 0 0 $heart-main-color, 57px 27px 0 0 $heart-shadow-color, 60px 27px 0 0 $heart-border-color, 6px 30px 0 0 $heart-border-color, 9px 30px 0 0 $heart-main-color, 12px 30px 0 0 $heart-main-color, 15px 30px 0 0 $heart-main-color, 18px 30px 0 0 $heart-main-color, 21px 30px 0 0 $heart-main-color, 24px 30px 0 0 $heart-main-color, 27px 30px 0 0 $heart-main-color, 30px 30px 0 0 $heart-main-color, 33px 30px 0 0 $heart-main-color, 36px 30px 0 0 $heart-main-color, 39px 30px 0 0 $heart-main-color, 42px 30px 0 0 $heart-main-color, 45px 30px 0 0 $heart-main-color, 48px 30px 0 0 $heart-main-color, 51px 30px 0 0 $heart-main-color, 54px 30px 0 0 $heart-shadow-color, 57px 30px 0 0 $heart-shadow-color, 60px 30px 0 0 $heart-border-color, 9px 33px 0 0 $heart-border-color, 12px 33px 0 0 $heart-main-color, 15px 33px 0 0 $heart-main-color, 18px 33px 0 0 $heart-main-color, 21px 33px 0 0 $heart-main-color, 24px 33px 0 0 $heart-main-color, 27px 33px 0 0 $heart-main-color, 30px 33px 0 0 $heart-main-color, 33px 33px 0 0 $heart-main-color, 36px 33px 0 0 $heart-main-color, 39px 33px 0 0 $heart-main-color, 42px 33px 0 0 $heart-main-color, 45px 33px 0 0 $heart-main-color, 48px 33px 0 0 $heart-main-color, 51px 33px 0 0 $heart-main-color, 54px 33px 0 0 $heart-shadow-color, 57px 33px 0 0 $heart-border-color, 9px 36px 0 0 $heart-border-color, 12px 36px 0 0 $heart-main-color, 15px 36px 0 0 $heart-main-color, 18px 36px 0 0 $heart-main-color, 21px 36px 0 0 $heart-main-color, 24px 36px 0 0 $heart-main-color, 27px 36px 0 0 $heart-main-color, 30px 36px 0 0 $heart-main-color, 33px 36px 0 0 $heart-main-color, 36px 36px 0 0 $heart-main-color, 39px 36px 0 0 $heart-main-color, 42px 36px 0 0 $heart-main-color, 45px 36px 0 0 $heart-main-color, 48px 36px 0 0 $heart-main-color, 51px 36px 0 0 $heart-shadow-color, 54px 36px 0 0 $heart-shadow-color, 57px 36px 0 0 $heart-border-color, 12px 39px 0 0 $heart-border-color, 15px 39px 0 0 $heart-main-color, 18px 39px 0 0 $heart-main-color, 21px 39px 0 0 $heart-main-color, 24px 39px 0 0 $heart-main-color, 27px 39px 0 0 $heart-main-color, 30px 39px 0 0 $heart-main-color, 33px 39px 0 0 $heart-main-color, 36px 39px 0 0 $heart-main-color, 39px 39px 0 0 $heart-main-color, 42px 39px 0 0 $heart-main-color, 45px 39px 0 0 $heart-main-color, 48px 39px 0 0 $heart-shadow-color, 51px 39px 0 0 $heart-shadow-color, 54px 39px 0 0 $heart-border-color, 15px 42px 0 0 $heart-border-color, 18px 42px 0 0 $heart-main-color, 21px 42px 0 0 $heart-main-color, 24px 42px 0 0 $heart-main-color, 27px 42px 0 0 $heart-main-color, 30px 42px 0 0 $heart-main-color, 33px 42px 0 0 $heart-main-color, 36px 42px 0 0 $heart-main-color, 39px 42px 0 0 $heart-main-color, 42px 42px 0 0 $heart-main-color, 45px 42px 0 0 $heart-shadow-color, 48px 42px 0 0 $heart-shadow-color, 51px 42px 0 0 $heart-border-color, 18px 45px 0 0 $heart-border-color, 21px 45px 0 0 $heart-main-color, 24px 45px 0 0 $heart-main-color, 27px 45px 0 0 $heart-main-color, 30px 45px 0 0 $heart-main-color, 33px 45px 0 0 $heart-main-color, 36px 45px 0 0 $heart-main-color, 39px 45px 0 0 $heart-main-color, 42px 45px 0 0 $heart-shadow-color, 45px 45px 0 0 $heart-shadow-color, 48px 45px 0 0 $heart-border-color, 21px 48px 0 0 $heart-border-color, 24px 48px 0 0 $heart-main-color, 27px 48px 0 0 $heart-main-color, 30px 48px 0 0 $heart-main-color, 33px 48px 0 0 $heart-main-color, 36px 48px 0 0 $heart-main-color, 39px 48px 0 0 $heart-shadow-color, 42px 48px 0 0 $heart-shadow-color, 45px 48px 0 0 $heart-border-color, 24px 51px 0 0 $heart-border-color, 27px 51px 0 0 $heart-main-color, 30px 51px 0 0 $heart-main-color, 33px 51px 0 0 $heart-main-color, 36px 51px 0 0 $heart-shadow-color, 39px 51px 0 0 $heart-shadow-color, 42px 51px 0 0 $heart-border-color, 27px 54px 0 0 $heart-border-color, 30px 54px 0 0 $heart-main-color, 33px 54px 0 0 $heart-shadow-color, 36px 54px 0 0 $heart-shadow-color, 39px 54px 0 0 $heart-border-color, 30px 57px 0 0 $heart-border-color, 33px 57px 0 0 $heart-shadow-color, 36px 57px 0 0 $heart-border-color, 33px 60px 0 0 $heart-border-color;
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

<template>

    <main class="home page-container">

        <div class="home--container">
            <div class="home__image">

            </div>

            <div class="home__intro">
                <h1 class="home__intro--welcome typewriter-effect">¡Bienvenid@!</h1>
                <p>
                    <span>Soy Carla</span>, una apasionada <strong class="accent-03">Desarrolladora Web especializada en Front-end</strong>. Me encanta dar vida a proyectos creativos y diseñar experiencias únicas.
                    Explorar el arte de la programación es mi pasión, y aquí compartiré contigo mis creaciones y aventuras en el universo del desarrollo web.
                </p>
            </div>
        </div>

    </main>

</template>


<script>
export default {
    name: "Home",
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.home {
    max-width: 992px;

    .home--container {
        display: flex;
        align-items: center;
        flex-direction: column;

        @media (min-width: $breakpoint-min-tablet) { flex-direction: row; }

        .home__image {
            background-color: #c7c7c7;
            height: 320px;
            width: 100%;

            @media (min-width: $breakpoint-min-tablet) { flex: 0 0 30% }
        }

        .home__intro {
            padding: 3rem 2rem 1rem 2rem;

            @media (min-width: $breakpoint-min-tablet) {
                flex: 0 0 70%;
                padding: 1rem 2rem;
            }

            p {
                span { font-family: $font-family-02; }
                .accent-03 { color: $accent-color-01; }
            }
        }
    }
}
</style>

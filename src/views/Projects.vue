<!-- eslint-disable prettier/prettier -->
<template>
  <main class="projects-page page-container">
    <h1>Projects</h1>

    <p>
        Et irure id nisi consectetur incididunt. Et cupidatat quis cillum reprehenderit nisi anim id magna officia proident tempor velit non.
        Commodo incididunt velit est ullamco exercitation deserunt magna eiusmod occaecat Lorem. Tempor fugiat ea adipisicing mollit aliquip ad aute ea.
    </p>

    <div class="projects">

        <h2>Proyectos personales y de aprendizaje</h2>

        <div class="projects__list">
            <SmallWindow
                title="My Pokémon Project"
                intro="Proyecto basado en el mundo Pokémon."
                description="Se listan los distintos Pokémon obtenidos de la PokéAPI, mostrando sus descripciones y sus características.
                Además incluye un apartado extra con un listado de ítems que pueden ser utilizados por los entrenadores del mundo Pokémon."
                :tags="['Vue','JavaScript','API','PokéAPI','SCSS','TailwindCSS']"
                :urls="[
                    { code: 'https://github.com/carla-ng/my-pokemon-project/', demo: 'https://carla-ng-my-pokemon-project.netlify.app/' }
                ]"
            ></SmallWindow>

            <SmallWindow
                title="Space Tourism"
                intro="Sitio web sobre turismo espacial."
                description="Forma parte de un proyecto personal para practicar desarrollo web, en el cual se pueden encontrar otros pequeños
                proyectos (para más información hacer click en opción de 'Código')."
                :tags="['Vue','JavaScript','SCSS']"
                :urls="[
                    { code: 'https://github.com/carla-ng/web-development-practice/', demo: 'https://carla-ng-space-tourism.netlify.app/' }
                ]"
            ></SmallWindow>

            <SmallWindow
                title="50 JS Projects"
                intro="Listado de 50 mini-proyectos de JavaScript."
                description="Reto de proyectos de distintos niveles de dificultad para practicar JavaScript. Algunos de ellos realizados con APIs."
                :tags="['JavaScript','SCSS', 'API']"
                :urls="[
                    { code: 'https://github.com/carla-ng/50-javascript-projects/', demo: 'https://carla-ng.github.io/50-javascript-projects/' }
                ]"
            ></SmallWindow>
        </div>

        <h2>Proyectos a nivel profesional</h2>

    </div>
  </main>
</template>


<script>
import SmallWindow from '@/components/SmallWindow.vue';

export default {
    name: 'Projects',
    components: {
        SmallWindow
    },
    setup() {
        return {};
    },
};
</script>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.projects {
    .projects__list {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(1, 1fr);
        @media (min-width: $breakpoint-min-tablet) { grid-template-columns: repeat(2, 1fr); }
        @media (min-width: $breakpoint-min-desktop) { grid-template-columns: repeat(3, 1fr); }
    }
}
</style>

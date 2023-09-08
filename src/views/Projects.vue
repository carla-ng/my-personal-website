<template>
  <main class="projects-page page-container">
    <h1>Proyectos</h1>

    <p>
        Et irure id nisi consectetur incididunt. Et cupidatat quis cillum reprehenderit nisi anim id magna officia proident tempor velit non.
        Commodo incididunt velit est ullamco exercitation deserunt magna eiusmod occaecat Lorem. Tempor fugiat ea adipisicing mollit aliquip ad aute ea.
    </p>

    <div class="projects">

        <h2>Proyectos personales y de aprendizaje</h2>

        <div class="projects__list">
            <SmallWindow v-for="(project, index) in personal_projects" :key="index"
                        :title="project.title"
                        :intro="project.intro"
                        :description="project.description"
                        :tags="project.tags"
                        :urls="project.urls"
            ></SmallWindow>
        </div>

        <h2>Proyectos a nivel profesional</h2>

        <div class="projects__list">
            <SmallWindow v-for="(project, index) in professional_projects" :key="index"
                        :title="project.title"
                        :intro="project.intro"
                        :description="project.description"
                        :tags="project.tags"
                        :urls="project.urls"
            ></SmallWindow>
        </div>

    </div>
  </main>
</template>


<script>
import SmallWindow from '@/components/SmallWindow.vue';

import { ref } from 'vue';

export default {
    name: 'Projects',
    components: {
        SmallWindow
    },
    setup() {

        // Personal projects list
        const personal_projects = ref([
            {
                title: 'My Pokémon Project',
                intro: 'Proyecto basado en el mundo Pokémon.',
                description: 'Se listan los distintos Pokémon obtenidos de la PokéAPI, mostrando sus descripciones y sus características. Además incluye un apartado extra con un listado de ítems que pueden ser utilizados por los entrenadores del mundo Pokémon.',
                tags: ['Vue','JavaScript','API','PokéAPI','SCSS','TailwindCSS'],
                urls: [
                    { code: 'https://github.com/carla-ng/my-pokemon-project/', demo: 'https://carla-ng-my-pokemon-project.netlify.app/' }
                ]
            },
            {
                title: 'Space Tourism',
                intro: 'Sitio web sobre turismo espacial.',
                description: 'Forma parte de un proyecto personal para practicar desarrollo web, en el cual se pueden encontrar otros pequeños proyectos (para más información hacer click en opción de "Código").',
                tags: ['Vue','JavaScript','SCSS'],
                urls: [
                    { code: 'https://github.com/carla-ng/web-development-practice/', demo: 'https://carla-ng-space-tourism.netlify.app/' }
                ]
            },
            {
                title: '50 JS Projects',
                intro: 'Listado de 50 mini proyectos de JavaScript.',
                description: 'Reto de proyectos de distintos niveles de dificultad para practicar JavaScript. Algunos de ellos realizados con APIs. Desarrollados principalmente para DESKTOP.',
                tags: ['JavaScript','SCSS','API'],
                urls: [
                    { code: 'https://github.com/carla-ng/50-javascript-projects/', demo: 'https://carla-ng.github.io/50-javascript-projects/' }
                ]
            },
            {
                title: 'CSS Animations',
                intro: 'Repertorio de animaciones CSS.',
                description: 'Se incluyen animaciones tipo hover para DESKTOP de elementos como botones, imágenes y menús.',
                tags: ['SCSS'],
                urls: [
                    { code: 'https://github.com/carla-ng/css-animations/', demo: 'https://carla-ng.github.io/css-animations/' }
                ]
            },
            {
                title: 'Rock Paper Scissors',
                intro: 'Mini juego de piedra, papel o tijeras.',
                description: 'Juego sencillo de una persona para jugar contra el ordenador. Lleva recuento de partidas ganadas, perdidas y empatadas.',
                tags: ['Vue','JavaScript','SCSS','TailwindCSS'],
                urls: [
                    { code: 'https://github.com/carla-ng/vue-rock-paper-scissors/', demo: 'https://carla-ng.github.io/vue-rock-paper-scissors/' }
                ]
            },
            {
                title: 'Dungeon Mini Game',
                intro: 'Mini juego de un nivel de una mazmorra.',
                description: 'Juego donde se deberá obtener la llave y llegar a la puerta para escapar de los enemigos. Sólo para DESKTOP.',
                tags: ['JavaScript','SCSS'],
                urls: [
                    { code: 'https://github.com/carla-ng/dungeon-mini-game-js/', demo: 'https://carla-ng.github.io/dungeon-mini-game-js/' }
                ]
            },
            {
                title: 'Who is that Pokémon?',
                intro: 'Mini juego de adivinar qué Pokémon se muestra en base a su silueta.',
                description: 'Juego sencillo para adivinar el Pokémon que se muestra en pantalla, se podrá seleccionar su nombre de entre un listado de opciones.',
                tags: ['Vue','JavaScript','CSS','API', 'PokéAPI','Jest'],
                urls: [
                    { code: 'https://github.com/carla-ng/who-is-that-pokemon/', demo: 'https://carla-ng.github.io/who-is-that-pokemon/' }
                ]
            },
            {
                title: 'Tic Tac Toe',
                intro: 'Mini juego de tres en raya.',
                description: 'Juego sencillo de dos personas basado en el clásico "tres en raya".',
                tags: ['Vue','JavaScript','TailwindCSS'],
                urls: [
                    { code: 'https://github.com/carla-ng/vue-tic-tac-toe/', demo: 'https://carla-ng-vue-tic-tac-toe.netlify.app/' }
                ]
            }
        ])


        // Professional projects list
        const professional_projects = ref([
            {
                title: 'Components',
                intro: 'Repertorio de componentes reutilizables.',
                description: 'Componentes desarrollados a nivel profesional para la creación de múltiples sitios web.',
                tags: ['jQuery','JavaScript','SCSS','PHP','MySQL'],
                urls: [
                    { example: 'https://carla-ng.github.io/my-portfolio/' }
                ]
            },
            {
                title: 'Sitio Web Apensar',
                intro: 'Web oficial del juego de Apensar.',
                description: 'Desarrollada para el departamento de Marketing de la empresa para promocionar y publicar noticias sobre el exitoso juego.',
                tags: ['JavaScript','CSS','Bootstrap','Wordpress','PHP','MySQL'],
                urls: [
                    { comingsoon: '#' }
                ]
            },
            {
                title: 'Demo Juego Apensar',
                intro: 'Demo web del juego de Apensar.',
                description: 'Versión web del exitoso juego para promocionar como demo y atraer nuevos usuarios.',
                tags: ['jQuery','CSS','Bootstrap','GSAP','PHP','MySQL'],
                urls: [
                    { comingsoon: '#' }
                ]
            },
        ])


        return {
            personal_projects,
            professional_projects
        }
    },
};
</script>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.projects {
    .projects__list {
        @media (min-width: $breakpoint-min-tablet) {
            display: grid;
            gap: 1.5rem;
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: $breakpoint-min-desktop) { grid-template-columns: repeat(3, 1fr); }

        margin-bottom: 3rem; //TEMP
    }
}
</style>

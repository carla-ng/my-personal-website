<template>
  <main class="projects-page page-container">
    
    <h1 class="typewriter-effect">Proyectos</h1>

    <p class="primary-text">
        En esta página se encuentran algunos de los proyectos en los que me encuentro trabajando actualmente o en los que he trabajado en el pasado.
    </p>

    <div class="projects">

        <h2 class="projects__heading-personal">Proyectos personales y de aprendizaje</h2>

        <p class="secondary-text">
            Desarrollados en mi tiempo libre para crecer como programadora. La mayoría de estos proyectos se encuentran <span class="text-bold text-underlined">en progreso</span>,
            ya que los utilizo para aprender y practicar en mi tiempo libre.
        </p>

        <div class="projects__list">
            <SmallWindow v-for="(project, index) in personal_projects" :key="index"
                        :title="project.title"
                        :intro="project.intro"
                        :description="project.description"
                        :tags="project.tags"
                        :urls="project.urls"
                        :repo="project.repo"
            ></SmallWindow>
        </div>

        <h2 class="projects__heading-professional">Proyectos a nivel profesional</h2>

        <p class="secondary-text">
            Algunos desarrollos destacados de las empresas donde he trabajado.
        </p>

        <div class="projects__list">
            <SmallWindow v-for="(project, index) in professional_projects" :key="index"
                        :title="project.title"
                        :intro="project.intro"
                        :description="project.description"
                        :tags="project.tags"
                        :urls="project.urls"
                        :repo="project.repo"
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
                ],
                repo: 'my-pokemon-project'
            },
            {
                title: 'Space Tourism',
                intro: 'Sitio web sobre turismo espacial.',
                description: 'Forma parte de un proyecto personal para practicar desarrollo web, en el cual se pueden encontrar otros pequeños proyectos (para más información hacer click en opción de "Código").',
                tags: ['Vue','JavaScript','SCSS'],
                urls: [
                    { code: 'https://github.com/carla-ng/web-development-practice/', demo: 'https://carla-ng-space-tourism.netlify.app/' }
                ],
                repo: 'web-development-practice'
            },
            {
                title: '50 JS Projects',
                intro: 'Listado de 50 mini proyectos de JavaScript.',
                description: 'Reto de proyectos de distintos niveles de dificultad para practicar JavaScript. Algunos de ellos realizados con APIs. Desarrollados principalmente para DESKTOP.',
                tags: ['JavaScript','SCSS','API'],
                urls: [
                    { code: 'https://github.com/carla-ng/50-javascript-projects/', demo: 'https://carla-ng.github.io/50-javascript-projects/' }
                ],
                repo: '50-javascript-projects'
            },
            {
                title: 'CSS Animations',
                intro: 'Repertorio de animaciones CSS.',
                description: 'Se incluyen animaciones tipo hover para DESKTOP de elementos como botones, imágenes y menús.',
                tags: ['SCSS'],
                urls: [
                    { code: 'https://github.com/carla-ng/css-animations/', demo: 'https://carla-ng.github.io/css-animations/' }
                ],
                repo: 'css-animations'
            },
            {
                title: 'Rock Paper Scissors',
                intro: 'Mini juego de piedra, papel o tijeras.',
                description: 'Juego sencillo de una persona para jugar contra el ordenador. Lleva recuento de partidas ganadas, perdidas y empatadas.',
                tags: ['Vue','JavaScript','SCSS','TailwindCSS'],
                urls: [
                    { code: 'https://github.com/carla-ng/vue-rock-paper-scissors/', demo: 'https://carla-ng.github.io/vue-rock-paper-scissors/' }
                ],
                repo: 'vue-rock-paper-scissors'
            },
            {
                title: 'Dungeon Mini Game',
                intro: 'Mini juego de un nivel de una mazmorra.',
                description: 'Juego donde se deberá obtener la llave y llegar a la puerta para escapar de los enemigos. Sólo para DESKTOP.',
                tags: ['JavaScript','SCSS'],
                urls: [
                    { code: 'https://github.com/carla-ng/dungeon-mini-game-js/', demo: 'https://carla-ng.github.io/dungeon-mini-game-js/' }
                ],
                repo: 'dungeon-mini-game-js'
            },
            {
                title: 'Who is that Pokémon?',
                intro: 'Mini juego de adivinar qué Pokémon se muestra en base a su silueta.',
                description: 'Juego sencillo para adivinar el Pokémon que se muestra en pantalla, se podrá seleccionar su nombre de entre un listado de opciones.',
                tags: ['Vue','JavaScript','CSS','API', 'PokéAPI','Jest'],
                urls: [
                    { code: 'https://github.com/carla-ng/who-is-that-pokemon/', demo: 'https://carla-ng.github.io/who-is-that-pokemon/' }
                ],
                repo: 'who-is-that-pokemon'
            },
            {
                title: 'Tic Tac Toe',
                intro: 'Mini juego de tres en raya.',
                description: 'Juego sencillo de dos personas basado en el clásico "tres en raya".',
                tags: ['Vue','JavaScript','TailwindCSS'],
                urls: [
                    { code: 'https://github.com/carla-ng/vue-tic-tac-toe/', demo: 'https://carla-ng-vue-tic-tac-toe.netlify.app/' }
                ],
                repo: 'vue-tic-tac-toe'
            }
        ])


        // Professional projects list
        const professional_projects = ref([
            {
                title: 'Componentes',
                intro: 'Repertorio de componentes reutilizables.',
                description: 'Componentes desarrollados a nivel profesional para la creación de múltiples sitios web.',
                tags: ['jQuery','JavaScript','SCSS','PHP','MySQL'],
                urls: [
                    { example: 'https://carla-ng.github.io/my-portfolio/' }
                ],
                repo: 'my-portfolio'
            },
            {
                title: 'Sitio Web Apensar',
                intro: 'Web oficial del juego de Apensar.',
                description: 'Desarrollada para el departamento de Marketing de la empresa para promocionar y publicar noticias sobre el exitoso juego.',
                tags: ['JavaScript','CSS','Bootstrap','Wordpress','PHP','MySQL'],
                urls: [
                    { comingsoon: '#' }
                ],
                repo: 'my-portfolio'
            },
            {
                title: 'Demo Juego Apensar',
                intro: 'Demo web del juego de Apensar.',
                description: 'Versión web del exitoso juego para promocionar como demo y atraer nuevos usuarios.',
                tags: ['jQuery','CSS','Bootstrap','GSAP','PHP','MySQL'],
                urls: [
                    { comingsoon: '#' }
                ],
                repo: 'my-portfolio'
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

    h2.projects__heading-professional {
        margin-top: 5rem;
    }

    .projects__list {
        @media (min-width: $breakpoint-min-tablet) {
            display: grid;
            gap: 1.5rem;
            grid-template-columns: repeat(2, 1fr);
            margin-top: 3rem;
            max-width: 100%;
        }

        @media (min-width: $breakpoint-min-desktop) { grid-template-columns: repeat(3, 1fr); }
    }
}
</style>

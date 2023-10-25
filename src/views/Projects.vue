<template>

  <main class="projects-page page-container">

    <header>
        <h1 class="typewriter-effect">Proyectos</h1>

        <p class="primary-text">
            En esta página se encuentran algunos de los proyectos en los que me encuentro trabajando actualmente o en los que he trabajado en el pasado.
        </p>
    </header>
    

    <section class="projects">

        <article>
            <div class="project-explanation">
                <div class="pixelart__project-explanation"></div>
                <SpeechBubble speechbubble_text='Si quieres saber más sobre algún proyecto, haz click en su botón de <div class="window__bar-buttons"> <span>?</span></div> para ver el archivo README de su repositorio'
                              speechbubble_position='top-left'>
                </SpeechBubble>
            </div>
        </article>


        <article class="project-group">

            <header class="project-group__header">

                <div class="project-group__info">
                    <h2 class="project-group__heading">Proyectos personales y de aprendizaje</h2>

                    <p class="secondary-text">
                        Desarrollados en mi tiempo libre para crecer como programadora. La mayoría de estos proyectos se encuentran <span class="text-bold text-underlined">en progreso</span>,
                        ya que los utilizo para aprender y practicar cuando puedo.
                    </p>
                </div>

                <div class="project-group__img">
                    <div class="pixelart__blastoise"></div>
                </div>

            </header>

            <div class="projects__list">
                <SmallWindow v-for="(project, index) in personal_projects" :key="index"
                            :title="project.title"
                            :intro="project.intro"
                            :description="project.description"
                            :tags="project.tags"
                            :urls="project.urls"
                            :repo="project.repo"
                            :subrepo="project.subrepo"
                ></SmallWindow>
            </div>

            <div class="projects__github-profile">
                <AlertBox alert_text='También podrás encontrar más proyectos en <a href="https://github.com/carla-ng" target="_blank">mi perfil de Github</a>.' />
            </div>
        </article>


        <article class="project-group">

            <header class="project-group__header-professional secondary-title">

                <div class="project-group__info">
                    <h2 class="project-group__heading">Proyectos a nivel profesional</h2>

                    <p class="secondary-text">
                        Algunos desarrollos destacados de las empresas donde he trabajado.
                    </p>
                </div>

                <div class="project-group__img">
                    <div class="pixelart__super-nintendo-controller"></div>
                </div>

            </header>

            <div class="projects__list">
                <SmallWindow v-for="(project, index) in professional_projects" :key="index"
                            :title="project.title"
                            :intro="project.intro"
                            :description="project.description"
                            :tags="project.tags"
                            :urls="project.urls"
                            :repo="project.repo"
                            :subrepo="project.subrepo"
                ></SmallWindow>
            </div>
        </article>

        

        <article class="project-group secondary-title" v-if="recent_projects">
            <h2 class="project-group__heading">Actualizaciones recientes</h2>

            <p class="secondary-text">
                Mis últimos repositorios actualizados.
            </p>

            <div class="projects__github-list">
                <ul>
                    <li v-for="(project, index) in recent_projects" :key="index">
                        <a :href="project.html_url" target="_blank">
                            <div class="projects__github-list__title">
                                {{ project.full_name }}
                                <span v-if="project.fork" class="projects__github-list__fork">  ( Fork ): </span>
                            </div>
                            <span class="projects__github-list__description">{{ project.description }}</span>
                            
                        </a>
                    </li>
                </ul>
            </div>
        </article>

    </section>

  </main>

</template>


<script>
import { ref } from 'vue';

import AlertBox from '@/components/AlertBox.vue';
import SmallWindow from '@/components/SmallWindow.vue';
import SpeechBubble from '@/components/SpeechBubble.vue';

export default {
    name: 'Projects',

    components: {
        AlertBox,
        SmallWindow,
        SpeechBubble
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
                description: 'Forma parte de un repositorio personal para practicar desarrollo web, en el cual se pueden encontrar otros pequeños proyectos (para más información ver el proyecto de "Web Development" incluido en esta sección).',
                tags: ['Vue','JavaScript','SCSS'],
                urls: [
                    { code: 'https://github.com/carla-ng/web-development-practice/tree/main/space-tourism-website', demo: 'https://carla-ng-space-tourism.netlify.app/' }
                ],
                repo: 'web-development-practice',
                subrepo: 'space-tourism-website'
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
                title: 'Web Development',
                intro: 'De todo un poco.',
                description: 'En este repositorio incluyo mini-proyectos, no relacionados entre sí, para practicar distintas tecnologías de forma rápida y sencilla. Un ejemplo de este repositorio es el proyecto ya mencionado de "Space Tourism Website", el cual he destacado por ser el más grande de este respositorio.',
                tags: ['SCSS','Vue','React','JavaScript'],
                urls: [
                    { code: 'https://github.com/carla-ng/web-development-practice/' }
                ],
                repo: 'web-development-practice'
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
                repo: 'my-portfolio',
                subrepo: 'subrepositories/components'
            },
            {
                title: 'Sitio Web Apensar',
                intro: 'Web oficial del juego de Apensar.',
                description: 'Desarrollada para el departamento de Marketing de la empresa para promocionar y publicar noticias sobre el exitoso juego.',
                tags: ['JavaScript','CSS','Bootstrap','Wordpress','PHP','MySQL'],
                urls: [
                    { comingsoon: '#' }
                ],
                repo: 'my-portfolio',
                subrepo: 'subrepositories/apensar-website'
            },
            {
                title: 'Demo Juego Apensar',
                intro: 'Demo web del juego de Apensar.',
                description: 'Versión web del exitoso juego para promocionar como demo y atraer nuevos usuarios.',
                tags: ['jQuery','CSS','Bootstrap','GSAP','PHP','MySQL'],
                urls: [
                    { comingsoon: '#' }
                ],
                repo: 'my-portfolio',
                subrepo: 'subrepositories/apensar-demo'
            },
        ])


        // Recent projects list
        const recent_projects = ref([])

        const fetch_recent_projects = async() => {
            try {
                const response = await fetch('https://api.github.com/users/carla-ng/repos?sort=updated&per_page=5')
                if ( !response.ok ) {
                    throw new Error('Recent projects response was not ok')
                }

                const data = await response.json()
                recent_projects.value = data

            } catch (error) {
                console.error(error.message)
                throw new Error('Error fetching recent projects')
            }
        }

        fetch_recent_projects()


        return {
            personal_projects,
            professional_projects,
            recent_projects
        }
    },
};
</script>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.projects {
    .project-explanation {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-end;

        height: 225px;
        margin: 0 auto 3rem auto;
        max-width: 320px;
        padding: 0 1rem;
        position: relative;
        
        @media (min-width: $breakpoint-min-tablet) {
            height: 165px;
            max-width: 675px;
        }

        @media (min-width: $breakpoint-min-desktop) {
            height: 155px;
            margin: 0 auto 1rem auto;
        }

        .pixelart__project-explanation {
            position: absolute;
            top: 0;
            left: 2rem;

            @include trainer;
        }

        :deep(.speechbubble) {
            margin: 0 auto;
            max-width: none;
            width: 100%;

            .window__bar-buttons {
                display: inline-block;
                top: -0.2rem;
                @media (min-width: $breakpoint-min-desktop) { top: -0.3rem; }
            }
        }
    }

    .project-group {
        @media (max-width: $breakpoint-max-tablet) { margin-top: 3rem; }
    }

    .project-group__header {
        @media (max-width: $breakpoint-max-tablet) {
            display: flex;
            flex-direction: column;
        }

        @media (min-width: $breakpoint-min-desktop) { position: relative; }

        .project-group__info {
            @media (min-width: $breakpoint-min-desktop) {
                margin: 0 auto;
                max-width: 90%;
            }

            @media (max-width: $breakpoint-max-tablet) {
                order: 2;
            }

            p.secondary-text {
                @media (min-width: $breakpoint-min-desktop) { max-width: 620px; }
                @media (min-width: $breakpoint-min-desktop-lg) { max-width: 700px; }
            }
        }

        .project-group__img {

            @media (min-width: $breakpoint-min-desktop) {
                position: absolute;
                right: 10%;
                top: 85px;
            }

            @media (max-width: $breakpoint-max-tablet) {
                display: flex;
                justify-content: center;

                height: 120px;
                order: 1;
                translate: -35px 0;
            }

            .pixelart__blastoise {
                @include blastoise;
            }
        }        
    }

    .project-group__header-professional {
        @media (max-width: $breakpoint-max-tablet) {
            display: flex;
            flex-direction: column;
        }

        @media (min-width: $breakpoint-min-desktop) { position: relative; }

        .project-group__info {
            @media (min-width: $breakpoint-min-desktop) {
                max-width: 75%;
            }

            @media (max-width: $breakpoint-max-tablet) {
                order: 2;
            }
        }

        .project-group__img {

            @media (min-width: $breakpoint-min-desktop) {
                position: absolute;
                right: 24%;
                top: 5px;
                rotate: -11deg;
            }

            @media (max-width: $breakpoint-max-tablet) {
                display: flex;
                justify-content: center;

                height: 140px;
                order: 1;
                rotate: -8deg;
                translate: -85px 35px;
            }

            .pixelart__super-nintendo-controller {
                @include super_nintendo_controller;
            }
        }        
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

    .projects__github-profile { margin-top: 4rem; }

    .projects__github-list {
       ul {
            list-style: none;
            margin: 0 auto;
            max-width: 800px;
            padding: 0 1rem;
        
            li {
                display: flex;
                flex-direction: row;

                margin-bottom: 1.5rem;
                line-height: 1rem;

                &:before {
                    content: '';
                    background-image: url('/assets/images/heart.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    color: $accent-color-03;
                    display: inline-block;
                    font-size: $font-size-21px;
                    height: 18px;
                    width: 18px;

                    flex: 1;
                }

                a {
                    text-decoration: none;

                    flex: 9;
                    @media (min-width: $breakpoint-min-desktop) { flex: 19; }

                    div {
                        &.projects__github-list__title {
                            color: $accent-color-05;
                            font-family: $font-family-02;
                            font-size: $font-size-14px;
                            letter-spacing: 0.1rem;

                            @media (max-width: $breakpoint-max-mobile) {  margin-bottom: 0.7rem; }

                            .projects__github-list__fork {
                                color: $accent-color-05;
                                font-size: $font-size-13px;
                                font-style: italic;
                            }
                        }
                    }

                    span {
                        &.projects__github-list__description {
                            color: $font-color-01;
                            font-family: $font-family-02;
                            font-size: $font-size-13px;
                            letter-spacing: 0.1rem;
                        }
                    }
                }
            }
       }
    }
}
</style>

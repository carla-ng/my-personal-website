<template>

    <main class="resume-page page-container">
    
        <h1 class="typewriter-effect">Currículum</h1>

        <p class="primary-text">
            Página en construcción
        </p>

        <div class="resume">

            <div>
                <p>- Sección trayectoria profesional -</p>
                <p>Aqui irían dos ventanitas tipo Windows con la info de las empresas en las que he estado</p>
                <p>Ver si puedo poner referencia de Linkedin para cada una (y si quedan bien)</p>
            </div>

            <div class="resume__job-history">

                <div class="window" v-for="(job,index) in job_history" :key="index">
                    <div class="window__inner-container">

                        <div class="window__bar">
                            <div class="window__bar-title">{{ job.company }}</div>
                            <div class="window__bar-buttons disabled-button">
                                <span>X</span>
                            </div>
                        </div>

                        <div class="window__main">
                            <div class="window__image">
                                <img :src="job.logo" :alt="job.company">
                            </div>

                            <div class="window__text">
                                <p>{{ job.place }}</p>

                                <div>
                                    <p class="window__text-title">{{ job.positions[0].title }}</p>
                                    <p class="window__text-time">{{ job.positions[0].time }}</p>
                                    <div class="window__text-description" v-html="job.positions[0].description"></div>
                                    <p class="window__text-languages">{{ job.positions[0].languages }}</p>
                                </div>

                                <div>
                                    <p class="window__text-title">{{ job.positions[1].title }}</p>
                                    <p class="window__text-time">{{ job.positions[1].time }}</p>
                                    <div class="window__text-description" v-html="job.positions[1].description"></div>
                                    <p class="window__text-languages">{{ job.positions[1].languages }}</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>


            <br>

            <div>- Sección estudios -</div>

            <br>

            <div>
                <p>- Sección tecnologías -</p>
                <p>HTML, CSS, SAAS, JAVASCRIPT, JQUERY, VUE, TAILWINDCSS</p>
                <P>GITHUB, VISUAL STUDIO CODE, JIRA</P>
                <p>También conocimiento en BOOTSTRAP, PHP, MYSQL</p>
                <p>ADOBE PHOTOSHOP, FIGMA, INVISION</p>
            </div>

        </div>

    </main>

</template>


<script>
// import { ref } from 'vue';

export default {
    setup() {


        // Jobs list
        const job_history = [
            {
                company: 'Telecoming',
                place: 'Madrid, España',
                logo: '/assets/images/resume/telecoming.png',
                positions: [
                    {
                        title: 'Software Developer',
                        time: 'Junio 2017 - Actualidad',
                        description: `
                                        <ul>
                                            <li>Desarrollo de componentes para la creación de numerosos portales (ej. de componentes: Cards, Video Player, Header).</li>
                                            <li>Hacer configurables los componentes creados para tener múltiples opciones de diseño, y para que puedan adaptarse a cualquier tipo de contenido aportado por distintos proveedores.</li>
                                            <li>Mantenimiento de editor de componentes y portales.</li>
                                            <li>Creación de funcionalidades dentro de los portales haciendo uso de los componentes para que interactúen entre ellos.</li>
                                            <li>Planificación y estimación de tareas (metodología Scrum, organización con herramienta JIRA).</li>
                                            <li>Validación de diseños y flujos proporcionados por equipo de UX.</li>
                                        </ul>
                                    `,
                        languages: 'HTML, CSS, SCSS, JavaScript, jQuery, Vue, Smarty, PHP, MySQL',
                    },
                    {
                        title: 'Front-end Development Intern',
                        time: 'Noviembre 2016 - Mayo 2017',
                        description: `
                                        <ul>
                                            <li>Desarrollo de landings de producto.</li>
                                            <li>Mantenimiento de portales.</li>
                                            <li>Creación de nuevos componentes y plantillas para los portales.</li>
                                        </ul>
                                    `,
                        languages: 'HTML, CSS, SCSS, Less, JavaScript, jQuery, Smarty',
                    }
                ],
            },

            {
                company: 'ICOGroup',
                place: 'Caracas, Venezuela',
                logo: '/assets/images/resume/icogroup.png',
                positions: [
                    {
                        title: 'Junior Web Developer',
                        time: 'Marzo 2016 - Junio 2016',
                        description: `
                                        <p>
                                            Desarrollo web responsive para el Departamento de Marketing de la empresa. Creación del sitio web del famoso juego <i>Apensar</i>
                                        </p>
                                    `,
                        languages: 'HTML, CSS, JavaScript, jQuery, GSAP, Wordpress, PHP, MySQL',
                    },
                    {
                        title: 'Pasante de Development',
                        time: 'Noviembre 2016 - Mayo 2017',
                        description: `
                                        <p>
                                            Pasantía de 20 semanas de duración en el Departamento de Marketing de la empresa, donde se adquirieron conocimientos en distintas
                                            tecnologías de desarrollo web
                                        </p>
                                    `,
                        languages: 'HTML, CSS, JavaScript, jQuery, GSAP, Wordpress, PHP, MySQL',
                    }
                ]
            }
        ]


        // Studies list
        const studies_history = [
            {
                title: 'Universidad Simon Bolivar',
                place: 'Caracas, Venezuela',
                major: 'Ingeniería de la Computacion (Software Development Engineering)',
            },
        ]


        return {
            job_history,
            studies_history
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.resume {
    .resume__job-history {
        .window {
            .window__inner-container {
                // .window__bar {
                //     .window__bar-title {}
                //     .window__bar-buttons {}
                // }

                .window__main {
                    display: flex;
                    flex-direction: column;

                    @media (min-width: $breakpoint-min-desktop) { flex-direction: row; }

                    .window__image {
                        img {}
                    }

                    .window__text {
                        & > div {
                            .window__text-title {}

                            .window__text-time {}

                            .window__text-description {}

                            .window__text-languages {}
                        }
                    }
                }
            }
        }
    }
}
</style>
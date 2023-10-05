<template>

    <main class="resume-page page-container">
    
        <h1 class="typewriter-effect">Currículum</h1>

        <p class="primary-text">
            Información sobre mi trayectoria laboral y mis estudios.
        </p>

        <div class="resume">

            <h2>Experiencia</h2>

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
                            <div class="window__image-container">
                                <div class="window__image">
                                    <img :src="job.logo" :alt="job.company">
                                </div>
                                <p class="window__place">{{ job.place }}</p>
                            </div>

                            <div class="window__text">
                                <div>
                                    <p class="window__text-title">{{ job.positions[0].title }}</p>
                                    <p class="window__text-time">{{ job.positions[0].time }}</p>
                                    <div class="window__text-description" v-html="job.positions[0].description"></div>
                                    <p class="window__text-languages">{{ job.positions[0].languages }}</p>
                                </div>

                                <div class="window__text-divider"></div>

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


            <br><br>


            <h2>Estudios</h2>

            <div class="resume__studies-history">

                <div class="window">
                    <div class="window__inner-container">

                        <div class="window__bar">
                            <div class="window__bar-title">{{ studies_history[0].university }}</div>
                            <div class="window__bar-buttons disabled-button">
                                <span>X</span>
                            </div>
                        </div>

                        <div class="window__main">
                            <div class="window__image-container">
                                <div class="window__image">
                                    <img :src="studies_history[0].logo" :alt="studies_history[0].title">
                                </div>
                                <p class="window__place">{{ studies_history[0].place }}</p>
                            </div>

                            <div class="window__text">
                                <div>
                                    <p class="window__text-title">{{ studies_history[0].title }}</p>
                                    <p class="window__text-time" v-html="studies_history[0].time"></p>
                                    <div class="window__text-description" v-html="studies_history[0].major"></div>
                                    <!-- <p class="window__text-languages">{{ job.positions[0].languages }}</p> -->
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

            
            <br><br>


            <div>
                <h2>Tecnologías y herramientas</h2>

                <p>HTML, CSS, SAAS, JAVASCRIPT, JQUERY, VUE, TAILWINDCSS</p>
                <P>GITHUB, VISUAL STUDIO CODE, JIRA</P>
                <p>También conocimientos de BOOTSTRAP, PHP, MYSQL</p>
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
                        languages: 'HTML . CSS . SCSS . JavaScript . jQuery . Vue . Smarty . PHP . MySQL',
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
                        languages: 'HTML . CSS . SCSS . Less . JavaScript . jQuery . Smarty',
                    }
                ],
            },

            {
                company: 'icogroup',
                place: 'Caracas, Venezuela',
                logo: '/assets/images/resume/icogroup.png',
                positions: [
                    {
                        title: 'Junior Web Developer',
                        time: 'Abril 2016 - Junio 2016',
                        description: `
                                        <p>
                                            Desarrollo web responsive para el Departamento de Marketing de la empresa. Creación del sitio web del famoso juego <i>Apensar</i>
                                        </p>
                                    `,
                        languages: 'HTML . CSS . JavaScript . jQuery . GSAP . Wordpress . PHP . MySQL',
                    },
                    {
                        title: 'Pasante de Development',
                        time: 'Noviembre 2015 - Marzo 2016',
                        description: `
                                        <p>
                                            Pasantía de 20 semanas de duración en el Departamento de Marketing de la empresa, donde se adquirieron conocimientos en distintas
                                            tecnologías de desarrollo web
                                        </p>
                                    `,
                        languages: 'HTML . CSS . JavaScript . jQuery . GSAP . Wordpress . PHP . MySQL',
                    }
                ]
            }
        ]


        // Studies list
        const studies_history = [
            {
                university: 'Universidad Simón Bolívar',
                title: 'Ingeniería de la Computación',
                place: 'Caracas, Venezuela',
                logo: '/assets/images/resume/usb.png',
                time: '<span>Año de egresado:</span> 2016',
                major: `
                            <p>
                                
                            </p>
                            <p>
                                <b>Especializaciones:</b> Desarrollo de Software, Sistemas de Información, Computación Gráfica
                                <br>
                                <b>Agrupación:</b> Asociación de Jóvenes Empresarios (AJE-USB)
                                <br>
                                <b>Voluntariado:</b> Centro de Estudios de Movilidad en Bicicleta (CEMBI)
                            </p>
                        `,
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
    .resume__job-history, .resume__studies-history {
        margin-top: 3rem;

        .window {
            margin-bottom: 2rem;

            .window__inner-container {
                .window__bar {
                    .window__bar-title {
                        font-size: $font-size-16px;
                        white-space: normal;
                    }

                    // .window__bar-buttons {}
                }

                .window__main {
                    padding: 1.5rem 1rem;

                    display: flex;
                    flex-direction: column;

                    @media (min-width: $breakpoint-min-desktop) { flex-direction: row; }

                    .window__image-container {
                        // display: flex;
                        // flex-direction: column;

                        @media (min-width: $breakpoint-min-desktop) {
                            flex: 1;
                        }

                        .window__image {
                            align-items: center;
                            height: 150px;

                            // img {}
                        }

                        .window__place {
                            font-style: italic;
                            margin-top: 0.4rem;
                        }
                    }
                    
                    .window__text {
                        padding: 2rem 0 1rem 0;

                        @media (min-width: $breakpoint-min-desktop) {
                            flex: 3;
                            padding: 0 1rem;
                        }

                        & > div {
                            .window__text-title {
                                font-size: $font-size-18px;
                                font-weight: bold;
                                margin-bottom: 0.2rem;
                            }

                            .window__text-time ::v-deep {
                                font-style: italic;

                                & > span { font-style: normal; }
                            }

                            .window__text-description ::v-deep {

                                ul {
                                    li {
                                        margin-top: 0.5rem;
                                    }
                                }

                                p {
                                    margin: 1rem 1.5rem;
                                }
                            }

                            .window__text-languages {
                                text-align: center;
                            }
                        }

                        .window__text-divider {
                            // border-style: inset;
                            border: 1px solid #b1b1b1;
                            margin: 1.2rem auto;
                            width: 50%;
                        }
                    }
                }
            }
        }
    }
}
</style>
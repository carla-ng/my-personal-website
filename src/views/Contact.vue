<template>

    <main class="contact-page page-container">
    
        <h1 class="typewriter-effect">Contacto</h1>

        <p class="primary-text">
            Si deseas contactar conmigo o seguirme en redes, me podrás encontrar en:
        </p>

        <div class="contact">
            <ul class="contact__list">
                <li class="contact__list--linkedin">
                    <a href="https://www.linkedin.com/in/carla-nardone-gonzalez/" target="_blank">
                        <span>Linked<span>in</span></span>
                    </a>
                </li>
                <li class="contact__list--github">
                    <a href="https://github.com/carla-ng/" target="_blank">
                        <!-- <svg width="20" height="21" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/></svg> -->
                        <!-- <img src="/assets/images/contact/github-mark-white.svg" alt="GitHub logo"> -->
                        <span>GitHub</span>
                    </a>
                </li>
                <li class="contact__list--instagram">
                    <a href="https://www.instagram.com/carla11ng/" target="_blank">
                        <span>Instagram</span>
                    </a>
                </li>
                <li class="contact__list--tiktok">
                    <a href="https://www.tiktok.com/@carla11ng/" target="_blank">
                        <span>TikTok</span>
                    </a>
                </li>
            </ul>
        </div>

        </main>

</template>


<script>
export default {
    name: 'Contact',

    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.contact-page {
    // h1 {}

    .primary-text {
        @media (max-width: $breakpoint-max-mobile) { margin-bottom: 1rem; }
    }

    .contact {
        // @media (max-width: $breakpoint-max-mobile) { margin-bottom: 3rem; }

        ul.contact__list {
            list-style: none;
            margin: 0 auto;
            max-width: 400px;
            padding: 0;

            display: flex;
            flex-direction: column;
            align-items: center;

            li {
                cursor: pointer;
                font-family: $font-family-02;
                font-size: $font-size-18px;
                margin: 0.5rem 1rem;
                letter-spacing: 0.2rem;
                position: relative;
                text-align: center;
                width: 100%;

                &:hover, &:active {
                    opacity: 0.8;
                }

                &::before, &::after {
                    content: '';
                    position: absolute;
                    background-color: $white;
                    width: 10px;
                    height: 10px;
                }

                &::before {
                    top: -5px;
                    left: -5px;
                }

                &::after {
                    top: -5px;
                    right: -5px;
                }

                a {
                    display: block;
                    padding: 1.1rem 1rem;
                    text-decoration: none;
                    width: 100%;

                    &::before, &::after {
                        content: '';
                        position: absolute;
                        background-color: $white;
                        width: 10px;
                        height: 10px;
                    }

                    &::before {
                        bottom: -5px;
                        left: -5px;
                    }

                    &::after {
                        bottom: -5px;
                        right: -5px;
                    }

                    & > span {
                        color: $font-color-02;
                        user-select: none;
                    }
                }

                &.contact__list--linkedin {
                    background: #0077b5;

                    a {
                        & > span {
                            span {
                                background: #fff;
                                color: #0077b5;
                                margin: 0 0.3rem;
                                padding: 0.4rem 0.2rem;
                            }
                        }
                    }
                }
                &.contact__list--github {
                    background: #000;
                }
                &.contact__list--instagram {
                    background: #d6249f;
                    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
                    a {
                        span {
                            text-shadow: 2px 2px 1px $palette-color-05;
                        }
                    }
                }
                &.contact__list--tiktok {
                    background: #000;
                    a {
                        span {
                            text-shadow: 2px 2px 1px #00eae4, 4px 4px 1px #f7004c;
                        }
                    }
                }
            }

        }
    }
}

</style>
  
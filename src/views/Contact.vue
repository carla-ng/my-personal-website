<template>

    <main class="contact-page page-container">
    
        <header>
            <h1 class="typewriter-effect">Contacto</h1>

            <p class="primary-text">
                Si deseas contactar conmigo o seguirme en redes, me podrás encontrar en:
            </p>
        </header>

        <nav class="contact">
            <ul class="contact__list">
                <li class="contact__list--linkedin">
                    <a href="https://www.linkedin.com/in/carla-nardone-gonzalez/" target="_blank">
                        <span>Linked<span>in</span></span>
                    </a>
                </li>
                <li class="contact__list--github">
                    <a href="https://github.com/carla-ng/" target="_blank">
                        <span>GitHub</span>
                    </a>
                </li>
                <li class="contact__list--instagram">
                    <a href="https://www.instagram.com/carla11ng_art/" target="_blank">
                        <span>Instagram</span>
                    </a>
                </li>
                <li class="contact__list--tiktok">
                    <a href="https://www.tiktok.com/@carla11ng/" target="_blank">
                        <span>TikTok</span>
                    </a>
                </li>
            </ul>
        </nav>

    </main>

</template>


<script>
export default {
    name: 'Contact',
}
</script>


<style lang="scss" scoped>
.contact-page {
    .primary-text {
        @media (max-width: $breakpoint-max-mobile) { margin-bottom: 1rem; }
    }

    .contact {
        ul.contact__list {
            list-style: none;
            margin: 0 auto;
            max-width: 400px;
            padding: 0;

            display: flex;
            align-items: center;
            flex-direction: column;

            li {
                cursor: pointer;
                font-family: $font-family-02;
                font-size: $font-size-18px;
                margin: 0.5rem 1rem;
                letter-spacing: 0.2rem;
                position: relative;
                text-align: center;
                width: 100%;

                &:hover, &:active { opacity: 0.8; }

                &::before, &::after {
                    content: '';
                    position: absolute;
                    background-color: $light-color;
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
                        background-color: $light-color;
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
                    background: $contact-linkedin-color;

                    a {
                        & > span {
                            span {
                                background: $white;
                                color: $contact-linkedin-color;
                                margin: 0 0.3rem;
                                padding: 0.4rem 0.2rem;
                            }
                        }
                    }
                }

                &.contact__list--github { background: $black; }

                &.contact__list--instagram {
                    background: $contact-instagram-color-01;
                    background: radial-gradient(circle at 30% 107%, $contact-instagram-color-02 0%, $contact-instagram-color-02 5%, $contact-instagram-color-03 45%, $contact-instagram-color-01 60%, $contact-instagram-color-04 90%);
                    
                    a {
                        span { text-shadow: 2px 2px 1px $gray; }
                    }
                }

                &.contact__list--tiktok {
                    background: $black;

                    a {
                        span { text-shadow: 2px 2px 1px $contact-tiktok-color-01, 4px 4px 1px $contact-tiktok-color-02; }
                    }
                }
            }

        }
    }
}

</style>
  
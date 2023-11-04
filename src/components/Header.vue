<template>

    <header id="nav" :class="showingNav ? 'show-nav' : ''">

        <div class="nav__top">
            <div class="nav__top--logo">
                <router-link to="/">
                    <span>Carla</span>
                    <span>Nardone</span>
                </router-link>
            </div>

            <div class="nav__top--hamburger" @click="toggleNavVisibility">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        
        <nav class="nav__container">
            <ul>
                <li>
                    <span class="nav__container--divider"></span>
                    <router-link  @click="toggleNavVisibility" to="/acerca">Acerca de mi</router-link>
                </li>
                <li>
                    <span class="nav__container--divider"></span>
                    <router-link  @click="toggleNavVisibility" to="/curriculum">Curriculum</router-link>
                </li>
                <li>
                    <span class="nav__container--divider"></span>
                    <router-link  @click="toggleNavVisibility" to="/proyectos">Proyectos</router-link>
                </li>
                <li>
                    <span class="nav__container--divider"></span>
                    <router-link  @click="toggleNavVisibility" to="/contacto">Contacto</router-link>
                </li>
            </ul>
        </nav>

        <div class="nav__veil" v-if="showingNav" @click="toggleNavVisibility"></div>

    </header>

</template>


<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
    setup() {
        let showingNav = ref(false)                           // boolean to know if nav is showing on mobile/tablet
        let isMobileOrTablet = ref(window.innerWidth < 769)   // detect if user is on a mobile or tablet


        // Toggle visibility of Nav for mobile devices
        const toggleNavVisibility = () => {
            if ( isMobileOrTablet.value ) {
                showingNav.value = !showingNav.value

                let root = document.getElementsByTagName('html')[0]
                if (  root.classList.contains('no-scroll') ) {
                    root.classList.remove('no-scroll')
                } else {
                    root.classList.add('no-scroll')
                }
            }
            
        }


        // Handle resize of screen
        const handleResize = () => {
            isMobileOrTablet.value = window.innerWidth < 769
        }


        onMounted(() => {
            window.addEventListener('resize', handleResize)
        })

        onBeforeUnmount(() => {
            window.removeEventListener('resize', handleResize)
        })


        return {
            showingNav,

            toggleNavVisibility
        }
    }
}
</script>


<style lang="scss">
#nav {
    margin: 0 auto 2rem auto;
    max-width: 1250px;
    padding: 1.5rem 0;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: $breakpoint-max-tablet) {
        background-color: $white;
        border-bottom: 1px solid $font-color-01;
    }

    @media (orientation: landscape) and (max-width: $breakpoint-max-tablet) {
        margin: 0 auto;
        padding: 1rem 0;
    }

    @media (min-width: $breakpoint-min-desktop) {
        align-items: center;
        margin: 2rem auto 4rem auto;
    }

    .nav__top {

        @media (max-width: $breakpoint-max-tablet) {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;

            padding: 0 1rem;
            position: relative;
        }

        @media (orientation: landscape) { align-items: flex-start; }

        .nav__top--logo {
            @media (min-width: $breakpoint-min-desktop) { margin: 0 0 1rem 0; }
            
            a {
                -webkit-text-stroke: 1px $dark-grey;   
                font-family: $font-family-02;
                font-weight: 700;
                text-decoration: none;
                text-shadow: 3px 3px 2px $grey;
                text-transform: uppercase;

                @media (min-width: $breakpoint-min-desktop) {
                    display: block;
                    font-size: $font-size-32px;
                    line-height: 1.1;
                    text-align: center;
                }

                @media (max-width: $breakpoint-max-tablet) {
                    display: flex;
                    flex-direction: column;
                    font-size: $font-size-28px;
                    letter-spacing: 2px;
                    line-height: 1.2;
                }

                & > span {
                    &:first-child {
                        color: $header-logo-color;
                    }

                    &:nth-child(2) {
                        color: $header-logo-color;
                        @media (min-width: $breakpoint-min-desktop) { margin-left: 1.2rem; }
                    }
                }
            }
        }

        .nav__top--hamburger {
            @media (max-width: $breakpoint-max-tablet) {
                cursor: pointer;
                display: block;

                position: absolute;
                top: 1.3rem;
                right: 2rem;
                z-index: 2;

                @media (orientation: landscape) { top: 1rem; }

                & > span {
                    background-color: $dark-color;
                    display: block;
                    height: 2px;
                    margin: 5px auto;
                    transition: all 0.3s ease-in-out;
                    width: 30px;
                }
            }
        }
    }

    .nav__container {
        background-color: $white;
        border-radius: 17px;
        border: 2px solid $dark-grey;
        box-shadow: 3px 3px 7px $grey;
        margin: 2rem 1rem 0 1rem;
        padding: 1rem 2rem;
        width: fit-content;

        @media (max-width: $breakpoint-max-tablet) {
            &:not(.show-nav) { display: none; }
        }      

        ul {
            list-style: none;
            margin: 0;
            padding: 0;

            @media (max-width: $breakpoint-max-tablet) { flex-direction: column; }

            @media (min-width: $breakpoint-min-desktop) {
                display: flex;
                flex-direction: row;
                justify-content: center;
            }

            li {                
                display: flex;
                align-items: center;

                @media (min-width: $breakpoint-min-desktop) {
                    justify-content: center;

                    &:first-child {
                        .nav__container--divider { display: none; }
                    }
                }

                .nav__container--divider {
                    &::before {
                        content: '';
                        background-image: url('/assets/images/heart.svg');
                        background-size: contain;
                        display: inline-block;
                        height: 18px;
                        width: 18px;
                    }
                }

                a {
                    color: $font-color-01;
                    font-family: $font-family-02;
                    font-size: $font-size-14px;
                    letter-spacing: 0.1rem;
                    padding: 0 1rem;
                    text-decoration: none;
                    text-shadow: 1px 1px 1px $header-nav-text-shadow-color;
                    text-transform: uppercase;

                    &:not(.router-link-exact-active):hover {
                        color: $accent-color-01;
                        opacity: 0.8;
                    }

                    &.router-link-exact-active { color: $accent-color-01; }

                    @media (max-width: $breakpoint-max-tablet) { padding: 0.8rem 1rem; }
                }
            }
        }
    }

    .nav__veil {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $header-veil-color;
        z-index: 1;
    }


    // Open nav on mobile and tablet
    &.show-nav {
        @media (max-width: $breakpoint-max-tablet) {

            .nav__top {

                .nav__top--hamburger {
                    span {
                        &:nth-child(1) {
                            translate: 0 7px;
                            rotate: 45deg;
                        }

                        &:nth-child(2) { opacity: 0; }
                        
                        &:nth-child(3) {
                            translate: 0 -7px;
                            rotate: -45deg;
                        }
                    }
                }
            }

            .nav__container {
                display: flex;
                margin: 0;
                width: 90%;

                position: fixed;
                top: 9rem;
                left: 50%;
                right: 0;
                translate: -50% 0;
                z-index: 1001;

                & > div {
                    margin: 1rem 0;

                    a { padding: 0 1.5rem; }
                }
            }

            .nav__veil { display: block; }
        }

        @media (min-width: $breakpoint-min-tablet) and (max-width: $breakpoint-max-tablet) {
            .nav__container { width: 70%; }
        }

        @media (orientation: landscape) and (max-width: $breakpoint-max-tablet) {
            .nav__container { top: 3rem; }
        }
    }
}
</style>
  
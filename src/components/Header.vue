<template>
    <div id="nav" :class="showingNav ? 'show-nav' : ''">

        <div class="nav__top">
            <div class="nav__top--logo">
                <router-link to="/">LOGO</router-link>
            </div>

            <div class="nav__top--hamburger" @click="toggleNavVisibility">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        
        <div class="nav__container">
            <div>
                <span class="nav__container--divider"></span>
                <router-link to="/about">Acerca de mi</router-link>
            </div>
            <div>
                <span class="nav__container--divider"></span>
                <router-link to="/resume">Curriculum</router-link>
            </div>
            <div>
                <span class="nav__container--divider"></span>
                <router-link to="/projects">Proyectos</router-link>
            </div>
            <div>
                <span class="nav__container--divider"></span>
                <router-link to="/contact">Contacto</router-link>
            </div>
        </div>

        <div class="nav__veil" v-if="showingNav"></div>

    </div>
</template>


<script>
import { ref } from 'vue';

export default {
    setup() {
        let showingNav = ref(false);

        const toggleNavVisibility = () => {
            showingNav.value = !showingNav.value
        }

        return {
            showingNav,

            toggleNavVisibility
        }
    }
}

</script>


<style lang="scss">
@import '@/assets/styles/global.scss';


#nav {
    margin: 2rem auto 4rem auto;
    max-width: 1250px;

    display: flex;
    //align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (orientation: landscape) and (max-width: $breakpoint-max-tablet) {
        margin: 1rem auto 4rem auto;
    }

    @media (min-width: $breakpoint-min-desktop) {
        align-items: center;
        margin: 3rem auto 6rem auto;
    }

    .nav__top {

        @media (max-width: $breakpoint-max-tablet) {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            padding: 0 1rem;
            position: relative;
        }

        .nav__top--logo {
            //margin: 3rem 0 0 0;
            
            a {
                font-size: $font-size-28px;
                font-weight: bold;
                text-align: center;
                text-decoration: none;
            }
        }

        .nav__top--hamburger {
            @media (max-width: $breakpoint-max-tablet) {
                cursor: pointer;
                display: block;
                //margin: auto 0;

                //position: absolute;
                // left: 20px;
                // top: 17px;

                & > span {
                    background-color: $black;
                    display: block;
                    height: 2px;
                    margin: 5px auto;
                    // -webkit-transition: all 0.3s ease-in-out;
                    transition: all 0.3s ease-in-out;
                    width: 30px;
                }
            }
        }
    }

    .nav__container {
        background-color: $white;
        border-radius: 17px;
        border: 2px solid #353535;
        box-shadow: 3px 3px 7px #5b5b5b;
        margin: 2rem 1rem 0 1rem;
        padding: 1rem 2rem;
        width: fit-content;

        @media (max-width: $breakpoint-max-tablet) {
            flex-direction: column;
            &:not(.show-nav) { display: none; }
        }
        
        @media (min-width: $breakpoint-min-desktop) {
            display: flex;
            flex-direction: row;
        }

        & > div {
            @media (min-width: $breakpoint-min-desktop) {
                &:first-child {
                    .nav__container--divider { display: none; }
                }
            }

            .nav__container--divider {
                &::before {
                    content: '\2764';
                    color: $palette-color-06;
                    font-size: $font-size-18px;
                    line-height: 1;
                }
            }

            a {
                color: $font-color-01;
                font-family: $font-family-02;
                font-size: $font-size-14px;
                letter-spacing: 0.1rem;
                padding: 0 1rem;
                text-decoration: none;
                text-shadow: 1px 1px 1px #777;
                text-transform: uppercase;

                &:not(.router-link-exact-active):hover {
                    color: $accent-color-01;
                    opacity: 0.8;
                }

                &.router-link-exact-active { color: $accent-color-01; }
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
        background-color: rgba(255, 255, 255, 0.8);
        z-index: 1000;
    }


    // Open nav on mobile y tablet
    &.show-nav {
        @media (max-width: $breakpoint-max-tablet) {

            .nav__top {
                // .nav__top--logo {
                //     a {}
                // }

                .nav__top--hamburger {
                    position: fixed;
                    top: 2rem;
                    right: 1rem;
                    z-index: 1001;

                    span {
                        &:nth-child(1) {
                            transform: translateY(7px) rotate(45deg);
                        }

                        &:nth-child(2) { opacity: 0; }

                        &:nth-child(3) {
                            transform: translateY(-7px) rotate(-45deg);
                        }
                    }
                }
            }

            .nav__container {
                display: flex;
                margin: 0;
                width: 90%;

                position: fixed;
                top: 7rem;
                left: 50%;
                right: 0;
                translate: -50% 0;
                z-index: 1001;

                & > div {
                    margin: 1rem 0;

                    // .nav__container--divider {}

                    a { padding: 0 1.5rem; }
                }
            }

            .nav__veil { display: block; }
        }

        @media (min-width: $breakpoint-min-tablet) {
            .nav__container {
                width: 70%;
            }
        }

        @media (orientation: landscape) and (max-width: $breakpoint-max-tablet) {
            .nav__top {
                .nav__top--hamburger { top: 1rem; }
            }

            .nav__container { top: 3rem; }
        }
    }
}
</style>
  
<template>
    <div id="nav">

        <div class="nav__logo">
            <router-link to="/">LOGO</router-link> 
        </div>

        <div class="nav__container">
            <div>
                <span class="nav__divider">&#10084;</span>
                <router-link to="/about">Acerca de mí</router-link>
            </div>
            <div>
                <span class="nav__divider">&#10084;</span>
                <router-link to="/resume">Currículum</router-link>
            </div>
            <div>
                <span class="nav__divider">&#10084;</span>
                <router-link to="/projects">Proyectos</router-link>
            </div>
            <div>
                <span class="nav__divider">&#10084;</span>
                <router-link to="/contact">Contacto</router-link>
            </div>
        </div>

    </div>
</template>


<style lang="scss">
@import '@/assets/styles/global.scss';

/*
@mixin pixaled-border( $width, $color, $bgcolor ) {
  box-shadow:
    4*$width 0 $bgcolor, 
    -4*$width 0 $bgcolor, 
    0 (-4*$width) $bgcolor, 
    0 4*$width $bgcolor,
    $width 0 0 2*$width $bgcolor,
    -$width 0 0 2*$width $bgcolor,
    0 (-$width) 0 2*$width $bgcolor,
    0 $width 0 2*$width $bgcolor,
    5*$width 0 $color, 
    -5*$width 0 $color,
    0 (-5*$width) $color, 
    0 5*$width $color,
    0 0 0 3*$width $color,
    0 2*$width 0 2*$width $color,
    0 (-2*$width) 0 2*$width $color,
    2*$width 0 0 2*$width $color,
    (-2*$width) 0 0 2*$width $color;
}
*/

#nav {
    margin: 0 auto;
    max-width: 1250px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .nav__logo {
        margin: 3rem auto 0 auto;
        
        a {
            font-size: $font-size-28px;
            font-weight: bold;
            text-align: center;
            text-decoration: none;

            &:active {
                color: #42b983;
            }
        }
    }

    .nav__container {
        border-radius: 17px;
        border: 2px solid #353535;
        box-shadow: 3px 3px 7px #5b5b5b;
        margin: 2rem 1rem 4rem 1rem;
        padding: 1rem 2rem;
        width: fit-content;

        display: flex;

        //@include pixaled-border( 4px, #000, #fff );

        @media (max-width: $breakpoint-max-mobile) { flex-direction: column; }

        & > div {
            @media (min-width: $breakpoint-min-tablet) {
                &:first-child {
                    .nav__divider { display: none; }
                }
            }

            .nav__divider {
                color: $palette-color-06;
            }

            a {
                color: #2c3e50;
                font-family: $font-family-02;
                font-size: $font-size-14px;
                letter-spacing: 0.1rem;
                padding: 0 1rem;
                text-decoration: none;
                text-shadow: 1px 1px 1px #a7a7a7;

                &.router-link-exact-active {
                    color: #42b983;
                }
            }
        }
    }    
}
</style>
  
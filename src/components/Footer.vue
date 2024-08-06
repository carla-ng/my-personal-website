<template>

    <ScrollToTopButton></ScrollToTopButton>

    <footer class="footer">
        <a class="footer__link" href="https://github.com/carla-ng/my-personal-website" target="_blank">
            Diseñado y desarrollado con <span class="footer__link--heart"></span> por Carla Nardone
        </a>
    </footer>

</template>


<script>
import ScrollToTopButton from './ScrollToTopButton.vue';

export default {
    components: {
        ScrollToTopButton
    }
}
</script>


<style lang="scss" scoped>
.footer {
    background-color: $footer-background-color;
    height: 3rem;
    text-align: center;

    position: absolute;
    bottom: 0;
    width: 100%;

    .footer__link {
        color: $font-color-02;
        font-size: $font-size-14px;
        padding: 0.7rem;
        text-decoration: none;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        
        @media (max-width: $breakpoint-max-tablet) { font-size: $font-size-12px; }
        @media (max-width: $breakpoint-max-mobile) { font-size: $font-size-10px; }

        .footer__link--heart {
            display: flex;
            margin: 0 0.3rem;

            &::before {
                content: '';
                background-image: url('/assets/images/heart.svg');
                background-size: contain;
                display: inline-block;
                height: 18px;
                width: 18px;
            }
        }
    }
}

</style>
  
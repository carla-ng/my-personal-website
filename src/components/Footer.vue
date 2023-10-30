<template>

    <ScrollToTopButton></ScrollToTopButton>

    <footer class="footer">
        <a class="footer__link" href="https://github.com/carla-ng/my-personal-website" target="_blank">
            Hecho con <span class="footer__link--heart"></span> por Carla Nardone
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
    background-color: $palette-color-05;
    height: 3rem;
    text-align: center;

    position: absolute;
    bottom: 0;
    width: 100%;

    .footer__link {
        color: $font-color-02;
        font-size: $font-size-14px;
        padding: 0.8rem;
        text-decoration: none;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

        .footer__link--heart {
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
  
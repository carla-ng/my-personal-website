<template>

    <footer class="footer">
        <a class="footer__text" href="https://github.com/carla-ng/" target="_blank">
            Hecho con <span class="footer__text--heart"></span> por Carla Nardone
        </a>
    </footer>

</template>


<script>
export default {
    setup() {

        return {

        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.footer {
    background-color: $palette-color-08;
    height: 3rem;
    text-align: center;

    position: absolute;
    bottom: 0;
    width: 100%;

    .footer__text {
        color: $font-color-02;
        display: block;
        font-size: $font-size-14px;
        padding: 0.8rem;
        text-decoration: none;
        width: 100%;

        span.footer__text--heart {
            &::before {
                content: '\2764';
                color: $palette-color-06;
                font-size: $font-size-18px;
                line-height: 1.125;
            }
        }
    }
}

</style>
  
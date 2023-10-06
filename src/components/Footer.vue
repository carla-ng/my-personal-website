<template>

    <footer class="footer">
        <a class="footer__link" href="https://github.com/carla-ng/" target="_blank">
            Hecho con <span class="footer__link--heart"></span> por Carla Nardone
        </a>
    </footer>

</template>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.footer {
    background-color: $palette-color-08;
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
  
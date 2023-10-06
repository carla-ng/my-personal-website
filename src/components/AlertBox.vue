<template>

    <div class="alertbox">
        <div class="alertbox__exclamation" v-if="!hide_alert_sign">!</div>
        <div class="alertbox__text" v-html="alert_text"></div>
    </div>

</template>


<script>
export default {
    props: {
        alert_text:        String,  // text to include inside the alert box
        hide_alert_sign:   Boolean  // hide the exclamation mark in the alert box
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.alertbox {
    display: flex;
    align-items: center;
    flex-direction: row;

    margin: 0 auto;
    padding: 0.5rem 1rem;
    width: fit-content;

    background: rgba($accent-color-02, 0.1);
    box-shadow: inset (-4px) (-4px) 0px 0px rgba($accent-color-02, 0.3);
    position: relative;
    text-align: center;

    &:before,
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: content-box;
    }

    &:before {
        top: -4px;
        left: 0;
        border-top: 4px $black solid;
        border-bottom: 4px $black solid;
    }

    &:after {
        left: -4px;
        top: 0;
        border-left: 4px $black solid;
        border-right: 4px $black solid;
    }

    .alertbox__exclamation {
        color: $font-color-01;
        font-family: $font-family-02;
        font-size: $font-size-26px;
        margin-inline-end: 1rem;
    }
    .alertbox__text {
        color: $font-color-01;
        font-family: $font-family-01;
        font-weight: 700;
        font-size: $font-size-16px;
        letter-spacing: 0.1rem;
        z-index: 1;
    }
}
</style>
<template>

    <div class="alertbox">
        <span class="alertbox__exclamation" v-if="!hide_alert_sign">!</span>
        <div class="alertbox__text" v-html="alert_text"></div>
    </div>

</template>


<script>
export default {
    props: {
        alert_text:        String,  // text to include inside the alert box
        hide_alert_sign:   String  // hide the exclamation mark in the alert box
    }
}
</script>


<style lang="scss" scoped>
.alertbox {
    display: flex;
    align-items: center;
    flex-direction: row;

    margin: 0 auto;
    padding: 0.5rem 1rem;
    width: fit-content;

    background: #fff4d6;
    box-shadow: inset (-4px) (-4px) 0px 0px #ffe09a;
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
        border-top: 4px $dark-color solid;
        border-bottom: 4px $dark-color solid;
    }

    &:after {
        left: -4px;
        top: 0;
        border-left: 4px $dark-color solid;
        border-right: 4px $dark-color solid;
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
<template>

    <div class="popup" v-if="isVisible">

        <button @click="closePopup">Close</button>

        <div class="popup__content">
            <div v-html="readmeHtml"></div>
        </div>

    </div>

</template>


<script>
export default {
    props: {
        isVisible: Boolean,   // control the visibility of the popup
        readmeHtml: String,   // pass in the README content
        closePopup: Function, // pass in the function to close the popup
    },
}
</script>


<style lang="scss" scoped>

.popup {
    background-color: pink;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    overflow-y: scroll;
    height: 80vh;
    width: 80vw;
    padding: 2rem 4rem;
}

</style>
<template>

    <AlertBox v-show="showScrollToTop" class="scroll-to-top" @click="scrollToTop" hide_alert_sign="true" alert_text='<?xml version="1.0" encoding="UTF-8"?><svg sodipodi:docbase="/datas/Projs/Cliparts Stocker/tmp/AIGA" sodipodi:docname="AIGA_Left_Arrow_1.svg" sodipodi:version="0.32" viewBox="0 0 431.32 360.61" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://web.resource.org/cc/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://inkscape.sourceforge.net/DTD/sodipodi-0.dtd"><sodipodi:namedview bordercolor="#000" borderopacity="1.0" pagecolor="#000"/><path d="m180.2 360.4-180.2-180.2 180.2-180.2h118.85l-137.06 137.07h269.33v87.22h-268.37l136.31 136.32-119.06-0.21z" fill="#fff"/></svg>' />

</template>


<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import AlertBox from './AlertBox.vue';

export default {
    components: {
        AlertBox
    },

    setup() {
        const showScrollToTop = ref(false)


        // show the scroll-to-top button when the user has scrolled down a bit
        const handleScroll = () => {
            showScrollToTop.value = window.scrollY > 600
        }


        // scroll to the top of the page
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };


        // add scroll event listener when the component is mounted
        onMounted(() => {
            window.addEventListener('scroll', handleScroll)
        });


        // remove scroll event listener before the component is unmounted
        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll)
        });


        return {
            showScrollToTop,
            scrollToTop
        }
    }
}
</script>


<style lang="scss" scoped>
.scroll-to-top {
    background: #99ffd1;
    box-shadow: inset -4px -4px 0px 0px #5dd59f;
    bottom: 42px;
    cursor: pointer;
    padding: 1rem;
    position: fixed;
    right: 14px;
    z-index: 1;
    
    @media (min-width: $breakpoint-min-desktop) { 
        bottom: 32px;
        right: 24px;
    }

    :deep(.alertbox__text) {
        height: 20px;
        @media (min-width: $breakpoint-min-desktop) { height: 24px; }

        svg {
            color: $black;
            height: 20px;
            margin-left: -2px;
            margin-top: -2px;
            transform: rotateZ(90deg);
            width: 20px;

            @media (min-width: $breakpoint-min-desktop) {
                height: 24px;
                width: 24px;
            }

            path { fill: $black; }
        }
    }
}
</style>

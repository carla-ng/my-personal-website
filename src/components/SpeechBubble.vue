<template>
    <div>
        <div class="speechbubble" v-html="speechbubble_text" :class="speechbubble_position"></div>
    </div>
</template>


<script>
export default {
    props: {
        speechbubble_text:     String,  // text to include inside the speechbubble
        speechbubble_position: String   // where text is supposed to coming from
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

$bubble-border: 0 -4px #fff, 
                0 -8px #000, 
                4px 0 #fff, 
                4px -4px #000, 
                8px 0 #000, 
                0 4px #fff, 
                0 8px #000, 
                -4px 0 #fff, 
                -4px  4px #000, 
                -8px 0 #000, 
                -4px -4px #000, 
                4px 4px #000;

.speechbubble {
    background-color: #fff;
    box-sizing: border-box;
    color: #000;
    display: inline-block;
    font-family: $font-family-02;
    font-size: $font-size-12px;
    letter-spacing: 1px;
    margin: 1rem 0;
    padding: 0.3rem 0.6rem;
    position: relative;
    text-align: left;
    width: 100%;

    @media (min-width: $breakpoint-min-desktop) {
        font-size: $font-size-14px;
        width: 70%;
    }

    @media (max-width: $breakpoint-max-tablet) { max-width: 325px; }

    box-shadow: $bubble-border, 4px 12px rgba(0,0,0,0.1), 12px 4px rgba(0,0,0,0.1), 12px 8px rgba(0,0,0,0.1);

    // Positions
    &.top-left {
        &::after {
            content: '';
            display: block;
            position: absolute;
            box-sizing: border-box;

            height: 4px;
            width: 4px;
            top: -8px;
            left: 32px;
            box-shadow: 
                0 -4px #000, 
                0 -8px #000, 
                0 -12px #000, 
                0 -4*4px #000, 
                -4px -12px #000,
                -8px -8px #000, 
                -12px -4px #000, 
                -4px -4px #fff, 
                -8px -4px #fff, 
                -4px -8px #fff, 
                -4px 0 #fff, 
                -8px 0 #fff, 
                -12px 0 #fff;
        }
    }

}
</style>
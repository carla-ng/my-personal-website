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


.speechbubble {
    background-color: $white;
    box-sizing: border-box;
    color: $black;
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

    box-shadow: $speechbubble-border, 4px 12px $speechbubble-shadow-color, 12px 4px $speechbubble-shadow-color, 12px 8px $speechbubble-shadow-color;

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
                0 -4px $black, 
                0 -8px $black, 
                0 -12px $black, 
                0 -4*4px $black, 
                -4px -12px $black,
                -8px -8px $black, 
                -12px -4px $black, 
                -4px -4px $white, 
                -8px -4px $white, 
                -4px -8px $white, 
                -4px 0 $white, 
                -8px 0 $white, 
                -12px 0 $white;
        }
    }

}
</style>
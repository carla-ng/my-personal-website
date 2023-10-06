<template>

    <div class="popup__container" v-if="isVisible">

        <div class="popup">
            <header class="popup__bar window__bar">
                <span>Github > README.md</span>
                <button @click="closePopup" class="window__bar-button">X</button>
            </header>

            <article class="popup__content">
                <div v-html="readmeHtml"></div>
            </article>
        </div>

    </div>

</template>


<script>
import { onBeforeUnmount, watch } from 'vue';

export default {
    props: {
        isVisible: Boolean,   // control the visibility of the popup
        readmeHtml: String,   // pass in the README content
        closePopup: Function, // pass in the function to close the popup
    },

    setup( props ) {

        // Add veil to the DOM
        const createVeil = () => {
            const veil = document.createElement('div')
            veil.className = 'popup__veil'
            document.body.appendChild(veil)

            veil.addEventListener('click', () => props.closePopup())

            var root = document.getElementsByTagName('html')[0]
            root.classList.add('no-scroll')
        }


        // Remove veil from the DOM
        const removeVeil = () => {
            const veil = document.querySelector('.popup__veil')
            if ( veil ) {
                document.body.removeChild(veil)
                
                var root = document.getElementsByTagName('html')[0]
                root.classList.remove('no-scroll')
            }
        }


        // Watch the isVisible prop and create/remove the veil accordingly
        watch(() => props.isVisible, ( newValue ) => {
            if ( newValue ) {
                createVeil()
            } else {
                removeVeil()
            }
        })
        

        onBeforeUnmount(() => {
            removeVeil()
        })


        return {
            createVeil,
            removeVeil
        }
    }
}
</script>


<style lang="scss">
@import '@/assets/styles/global.scss';

.popup__container {
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: 999;

    height: 90vh;
    width: 90vw;
    @media (min-width: $breakpoint-min-tablet) { width: 80vw; }
    @media (min-width: $breakpoint-min-desktop) { width: 70vw; }

    .popup {    
        background-color: $white;
        border-radius: 5px;
        border: 1px solid $palette-color-04;
        box-shadow: 6px 6px 5px #3b3b3b;
        height: 90vh;
        min-width: 0;
        overflow: hidden;
        padding: 0.2rem;
        position: relative;
        width: 100%;

        .popup__bar {
            padding: 0.3rem;

            width: -moz-available;          /* WebKit-based browsers will ignore this. */
            width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
            width: fill-available;

            span {
                color: $font-color-02;
                font-family: $font-family-02;
                font-size: $font-size-14px;
                letter-spacing: 0.05rem;
                line-height: 1.8;
                overflow: hidden;
                padding: 0 0.2rem;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            button {
                cursor: pointer;
                height: 24px;
                position: relative;

                &:active {
                    box-shadow: none;
                    translate: 0 2px;
                }
            }
        } 

        .popup__content {
            overflow-y: scroll;
            padding: 3rem 2rem;

            height: -moz-available;          /* WebKit-based browsers will ignore this. */
            height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
            height: fill-available;

            -ms-overflow-style: none;  /* IE and Edge */
               scrollbar-width: none;  /* Firefox */

            &::-webkit-scrollbar { display: none; }

            & > div {
                margin: 0 auto;
                
                @media (min-width: $breakpoint-min-desktop) { max-width: 70%; }

                img {
                    display: none;
                    border-radius: 10px;
                    max-width: 95%;

                    @media (min-width: $breakpoint-min-tablet) { max-width: 70%; }
                }

                h1, h2, h3, h4, h5, h6 {
                    margin: 1rem 0;
                    word-wrap:break-word;
                }

                h1 {
                    margin: 0.5rem 0 1.5rem 0;
                }

                h3 {
                    margin: 1.5rem 0 1.5rem 0;
                }
            }
        }
    }
}

.popup__veil {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 998;
}

</style>
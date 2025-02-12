<template>
    <button
        :class="buttonClass"
        @click="cik"
    ><slot></slot>
    </button>
</template>

<script lang="ts" setup name="wdButton">
import {defineEmits,defineProps, computed } from 'vue';
import {buttonProps,ButtonEmits} from './type'
import "../../../../theme-chalk/src/button.scss"

const props = defineProps(buttonProps)
const emits = defineEmits(ButtonEmits)

const buttonClass = computed(() => {
    return [
        'wd-button', 
        `wd-button-${props.type}`,
        `wd-button-${props.size}`,
        props.round && 'is-round',
        props.circle && 'is-circle',
        props.disabled && 'is-disabled',
    ];
});
function cik(event:MouseEvent):void{
    emits('click',event)
}

</script>
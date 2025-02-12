<template>
    <label 
        :class="radioClass">
            <span
                :class="radioButtonClass">
            </span>
            <input 
                type="radio"
                :class="radioInputClass"
                :name="props.name"
                :value="props.value"
                v-model="model"
            >
            <span
                :class="radioLabelClass">
                <slot></slot>
            </span>
    </label>
</template>

<script lang="ts" setup name="wd-radio">
import { computed } from 'vue';
import { radioProps } from './type';
import "../../../../theme-chalk/src/radio.scss";

const props = defineProps(radioProps)
const model = defineModel({type:String})

const radioClass = computed(()=>{
    return [
        "wd-radio",
        model.value==props.value && checkClass
    ]
})
const radioButtonClass = computed(()=>{
    return [
        "wd-radio-button",
        model.value==props.value && checkClass
    ]
})
const radioInputClass = computed(()=>{
    return [
        "wd-radio-input",
        model.value==props.value && checkClass
    ]
})
const radioLabelClass = computed(()=>{
    return [
        "wd-radio-label",
        model.value==props.value && checkClass
    ]
})

const checkClass = "is-checked"
</script>
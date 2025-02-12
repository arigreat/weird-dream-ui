<template>
    <label class="wd-checkbox" ref="checkboxSelector">
        <span :class="[checkboxButtonClass]"></span>
        <input 
        type="checkbox"
        v-model="model"
        :value="props.value"
        :name="props.name"
        :class="checkboxInputClass">
        <span
            :class="checkboxLabelClass"
        >
            <slot></slot>
        </span>
    </label>
</template>

<script lang="ts" setup name="wd-checkbox">
import {defineEmits,defineProps, computed, ref } from 'vue';
import "../../../../theme-chalk/src/checkbox.scss";
import {checkboxProps} from './type'

const props = defineProps(checkboxProps)
const checkboxButtonClass = computed(()=>{
    return [
        "wd-checkbox-button",
        model.value&&checkClass
    ]
})
const checkboxInputClass = computed(()=>{
    return [
        "wd-checkbox-input",
        model.value&&checkClass
    ]
})
const checkboxLabelClass = computed(()=>{
    return [
        "wd-checkbox-label",
        model.value&&checkClass
    ]
})
const checkClass = "is-checked"
const checkboxSelector = ref<HTMLLabelElement|null>(null)
const model = defineModel({type:Boolean,default:false})
</script>
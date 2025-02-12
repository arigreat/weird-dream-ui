<template>
    <input
        :class="inputClass"
        :type="props.type"
        @input="getValue($event)"
        v-model="model"
        ref="inputSelector"
        :placeholder="props.placeholder"
        >
</template>

<script setup lang="ts" name="wd-input">
import {defineEmits,defineProps, computed, ref, onMounted } from 'vue';
import "../../../../theme-chalk/src/input.scss";
import {inputProps} from './type'

const props = defineProps(inputProps)
const model = defineModel()
const emits = defineEmits<{(e:'value',value:String):void}>()
const inputClass = computed(()=>{
    return [
        "wd-input",
        `wd-input-${props.type}`,
        props.required && "is-required",
        ]
})
const inputSelector = ref<HTMLInputElement|null>(null)

onMounted(()=>{
    if(!inputSelector.value){
        return
    }
    inputSelector.value.addEventListener('focusout',()=>{
        validatorCheck();
    })
})

function getValue(e:Event){
    emits('value',(e.target as HTMLInputElement).value)
    validatorCheck()
}

function validatorCheck(){
    if(inputSelector.value?.classList.contains('is-required') && !model.value){
            inputSelector.value.classList.add('wd-input-warning');
    }
    if(model.value){
        inputSelector.value?.classList.remove('wd-input-warning');
    }
}

</script>
<template>
<form class="wd-form" ref="formSelector">
    <slot></slot>
</form>
</template>


<script setup lang="ts" name="wd-form">
import {defineEmits,defineProps, computed, ref, onMounted } from 'vue';
import "../../../../theme-chalk/src/form.scss";
import {formProps} from './type'

const formSelector = ref<HTMLFormElement|null>(null)
const props = defineProps(formProps)

onMounted(()=>{
    if(!formSelector.value){
        console.log("fail to load wd-form")
        return 
    }
    if(props.label){
        const labelElement = document.createElement('p')
        labelElement.innerText = props.label
        labelElement.classList.add( "wd-formname",`wd-formname-${props.labelPosition}`)
        formSelector.value.prepend(labelElement)
    }
    if(props.width){
        const width = props.width+'px'
        formSelector.value.style.width = width 
        for(let i=0;i<formSelector.value.children.length;i++){
            (formSelector.value.children[i] as HTMLElement).style.width = width;
        }
    }
})
</script>
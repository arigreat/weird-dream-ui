<template>
    <div class="wd-form-item" ref="formitemSelector">
        <slot></slot>
    </div>
</template>

<script setup lang="ts" name="wd-form-item">
import { onMounted, ref } from "vue";
import "../../../../theme-chalk/src/form-item.scss";
import {formitemProps} from './type';

const formitemSelector = ref<HTMLElement|null>(null)
const props = defineProps(formitemProps)
onMounted(()=>{
    if(!formitemSelector.value){
        console.log("failed to load wd-form-item")
        return
    }

    if(props.height){
        formitemSelector.value.style.height = props.height + 'px'
    }

    if(props.label){
        const labelElement = document.createElement('p')
        const labelText = document.createElement('span')
        labelElement.classList.add('wd-form-itemname')
        labelText.innerText = props.label
        labelElement.appendChild(labelText)
        formitemSelector.value.prepend(labelElement)

        if(formitemSelector.value.children[1].classList.contains('is-required')){
            const requiredText = document.createElement('span')
            requiredText.classList.add('wd-form-itemname-required')
            requiredText.innerText = "*"
            formitemSelector.value.children[0].prepend(requiredText)
        }
    }

    if(props.required){
        for(let i = 0; i<formitemSelector.value.children.length;i++){
            formitemSelector.value.children[i].classList.add('is-required')

            if(formitemSelector.value.children[i].classList.contains('wd-form-itemname')){
                const requiredText = document.createElement('span')
                requiredText.classList.add('wd-form-itemname-required')
                requiredText.innerText = "*"
                formitemSelector.value.children[i].prepend(requiredText)
            }
        }
    }


})
</script>
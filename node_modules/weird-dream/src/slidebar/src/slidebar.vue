<template>
    <!-- <span :class="slidebarTextClass"><slot></slot></span> -->
    <input
        :class="slidebarClass"
        v-model="model"
        @input="getValue($event)"
        @change="getValue($event)"
        type="range" 
        ref="slidebarSelector"
        :min="parseFloat(props.min)" :max="parseFloat(props.max)"
        :step="parseFloat(props.step)">
</template>

<script setup lang="ts" name="wd-slidebar">
import { onMounted,defineEmits,defineProps,computed, ref } from 'vue';
import { slidebarProps } from './type'
import "../../../../theme-chalk/src/slidebar.scss"

const props = defineProps(slidebarProps)
const emits = defineEmits<{(e:'value',value:String):void}>()
const model = defineModel({type:String,default:'0'})
const slidebarSelector = ref<HTMLInputElement|null>(null)

const slidebarClass = computed(()=>{
    return [
        "wd-slidebar",
        `wd-slidebar-${props.fill}`,
        `wd-slidebar-${props.direction}`,
        `wd-slidebar-${props.color}-${props.fill}`,
        `wd-slidebar-${props.size}-${props.type}`,
    ]
})
const slidebarTextClass = computed(()=>{
    return [
        "wd-slidebar-text",
        `wd-slidebar-text-${props.direction}`,
    ]
}) 

function getValue(e:Event){
    const element = e.target as HTMLInputElement
    const valuePersent = ((parseFloat(element.value)-parseFloat(props.min)) / (parseFloat(props.max)-parseFloat(props.min))*100).toFixed(2) + "%"
    element.style.setProperty('--currentValue',valuePersent)
    emits('value',(e.target as HTMLInputElement).value)
}

onMounted(()=>{
    if(props.width&&slidebarClass.value){
        (slidebarSelector.value as HTMLInputElement).style.width = props.width + 'px';
    }
})
</script>
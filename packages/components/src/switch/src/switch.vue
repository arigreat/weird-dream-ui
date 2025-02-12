<template>
    <div
        :class="[switchClass,switchValueClass]"
        @click="switchChange">
            <div class="wd-switch-stick"></div>
    </div>
</template>

<script setup lang="ts" name="wd-switch">
import {defineEmits,defineProps, computed, ref } from 'vue';
import {switchProps,SwitchEmits} from './type'
import "../../../../theme-chalk/src/switch.scss"

const props = defineProps(switchProps)
const emits = defineEmits<{(e:'value',value:boolean):boolean}>()
const model = defineModel({type:Boolean,default:false})

const switchClass = computed(()=>{
    return [
        `wd-switch`,
        `wd-switch-${props.color}`,
        `wd-switch-${props.size}`,
    ]
})

const switchValueClass =computed( () => {
    return value.value === null ? '' : ( value.value ? [`wd-switch-${props.size}-on`,`wd-switch-${props.color}-on`]: [`wd-switch-${props.size}-off`,`wd-switch-${props.color}-off`] );
})

const value = ref<null|boolean>(null)

function switchChange(){
    if(value.value === null)
    {
        value.value = true;
    }
    else{
        value.value=!value.value;
    }
    emits('value',value.value)
    model.value = value.value
}

</script>

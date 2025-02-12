<template>
    <option :value="props.value" :name="props.name" :id="props.id" :class="optionClass" :text="props.text">
        <slot></slot>
    </option>
</template>

<script lang="ts" setup name="wd-option">
import { computed } from 'vue';
import { optionProps } from './type';
import "../../../../theme-chalk/src/option.scss"

const props = defineProps(optionProps)

const optionClass = computed(()=>{return [ 
    "wd-option"
]})

</script>
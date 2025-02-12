<template>
    <div
        :class="radioGroupClass">
        <slot v-bind="radioProps"></slot>
    </div>
</template>

<script setup lang="ts" name="wd-radio-group">
import { computed } from 'vue';
import { radioGroupProps } from './type';
import "../../../../theme-chalk/src/radio-group.scss";

const props = defineProps(radioGroupProps)
const radioGroupClass = computed(()=>{
    return [
        "wd-radio-group"
    ]
})
const radioProps = computed(()=>{
    return [
        props.name && {name:props.name}
    ]
})
</script>
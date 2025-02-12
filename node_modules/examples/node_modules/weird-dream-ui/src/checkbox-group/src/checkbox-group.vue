<template>
    <div 
        :class="checkboxGroupClass">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup name="wd-checkbox-group">
import { computed } from 'vue';
import "../../../../theme-chalk/src/checkbox-group.scss";

const checkboxGroupClass = computed(()=>{
    return [
        "wd-checkbox-group"
    ]
})


</script>
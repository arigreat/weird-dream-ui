<template>
    <div class="wd-button-group">
        <slot>

        </slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import "../../../../theme-chalk/src/button-group.scss"
export default defineComponent({
    name:"wdButtonGroup",
})
</script>
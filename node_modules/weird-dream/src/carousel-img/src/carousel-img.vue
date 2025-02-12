<template>
    <div class="wd-carousel-img" ref="carouselImg">
        <slot></slot>
    </div>
</template>

<script setup lang="ts" name="wd-carousel-img">
import {defineEmits,defineProps, computed, ref, onMounted } from 'vue';
import { carouselImgProps } from './type';
import "../../../../theme-chalk/src/carousel-img.scss"

const carouselImg = ref<HTMLElement|null>(null)
const props = defineProps(carouselImgProps)

function getImg(){
    if(carouselImg.value){
        const src = `url(${props.src})`
        carouselImg.value.style.setProperty('--imgSrc',src)
    }
}

onMounted(()=>{
    getImg()
})
</script>
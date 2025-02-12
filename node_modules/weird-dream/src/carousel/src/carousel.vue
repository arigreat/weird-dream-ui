<template>
    <div class="wd-carousel"
        :class="carouselClass"
        ref="carouselBg">
        <div class="wd-carouselImgbox" ref="carouselSelecter">
            <slot></slot>
        </div>
        <div class="wd-carouselButtonbox" v-if="typeManual" ref="carouselButtons">
            <!-- <div class="wd-carouselButton"></div>
            <div class="wd-carouselButton"></div>
            <div class="wd-carouselButton"></div> -->
        </div>
        <!-- <div class="wd-carouselButtons" v-for="(buttonSet,index) in carouselImgTotal" @click="carouselMovingButton(index)"></div> -->
    </div>
</template>

<script setup lang="ts" name="wd-carousel">
import {defineEmits,defineProps, computed, ref, onMounted, nextTick } from 'vue';
import { carouselProps } from './type';
import "../../../../theme-chalk/src/carousel.scss"

const props = defineProps(carouselProps)

const carouselClass = computed(()=>{
    return [
        `wd-carousel-${props.type}`,
        props.round&&"is-round"
    ]
})

// type
const typeManual:boolean = props.type==='auto'?false:true
const typeAuto:boolean = props.type==='manual'?false:true

// 自动移动
const carouselSelecter = ref<HTMLElement | null>(null)
const carouselBg = ref<HTMLElement | null>(null)
const carouselButtons = ref<HTMLElement | null>(null)

onMounted(()=>{

    // 大小修改
    if(carouselBg.value&&carouselSelecter.value)
    {
        carouselBg.value.style.width = `${props.width}px`
        carouselSelecter.value.style.width = `${props.width}px`
        carouselBg.value.style.height = `${props.height}px`
        carouselSelecter.value.style.height = `${props.height}px`
        const imgSets = carouselSelecter.value.children
        for(let i=0;i<imgSets.length;i++){
            const img = imgSets[i] as HTMLElement
            img.style.width = `${props.width}px`
            img.style.height = `${props.height}px`
        }
    }


    // 自动移动
    let isCarousing:boolean = false
    const carouselImg = ref<number>(0)
    const carouselImgTotal = <number>carouselSelecter.value?.children.length
    const firstImg = carouselSelecter.value?.children[0].cloneNode(true) as Node
    carouselSelecter.value?.appendChild(firstImg)

    const carouselAnimationTime:number = 500
    const carouselIntervalTime:number = 5000

    // 自动移动
    function carouselMovingAuto(){
    if(isCarousing){return}
    if(carouselSelecter.value)
    {
        isCarousing = true

        carouselSelecter.value.style.setProperty('--transformNewX', `-${carouselImg.value*100+100}%`);
        carouselSelecter.value.classList.add("is-moving")
        
        setTimeout(()=>{
            if(carouselButtons.value){
                carouselButtons.value.children[carouselImg.value].classList.remove('wd-carouselButtonCurrent')
            }
            carouselSelecter.value?.classList.remove("is-moving")
            carouselImg.value++
            carouselSelecter.value?.style.setProperty('--transformOldX', `-${carouselImg.value*100}%`);
            // 按钮变色
            if(carouselButtons.value){
                carouselButtons.value.children[carouselImg.value % carouselImgTotal].classList.add('wd-carouselButtonCurrent')
            }
            // 循环轮播图回到头部
            if(carouselImg.value == carouselImgTotal)
            {
                carouselImg.value = 0
                carouselSelecter.value?.style.setProperty('--transformOldX', `-${carouselImg.value*100}%`)
                carouselSelecter.value?.classList.add("is-resetting")
                setTimeout(()=>{carouselSelecter.value?.classList.remove("is-resetting");isCarousing = false},100)
                    
            }
            isCarousing = false
            },carouselAnimationTime)
    }
    }
    typeAuto && setInterval(carouselMovingAuto,carouselIntervalTime)
    // 手动移动
    function carouselMovingManual(index:number){
        isCarousing = true
        if(!carouselSelecter.value){
            return
        }
        carouselSelecter.value.style.setProperty('--transformNewX', `-${index*100}%`);
        carouselSelecter.value.classList.add("is-moving")
        setTimeout(()=>{
            if(carouselButtons.value){
                carouselButtons.value.children[carouselImg.value].classList.remove('wd-carouselButtonCurrent')
            }
            if(!carouselSelecter.value){return}
            carouselSelecter.value.classList.remove("is-moving")
            carouselImg.value = index
            carouselSelecter.value.style.setProperty('--transformOldX', `-${carouselImg.value*100}%`);
            if(carouselButtons.value){
                carouselButtons.value.children[carouselImg.value % carouselImgTotal].classList.add('wd-carouselButtonCurrent')
            }
            isCarousing = false
        },carouselAnimationTime)
    }
    // 添加手动移动按钮
    if(typeManual&&carouselButtons.value){
        for(let i=0;i<carouselImgTotal;i++){
            const button = document.createElement("div")
            button.classList.add("wd-carouselButton")
            
            button.addEventListener('click',(e:MouseEvent)=>{
                carouselMovingManual(i)
            })

            carouselButtons.value.appendChild(button)
        }
    }


})


</script>
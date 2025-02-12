<template>
    <select :name="props.name" :id="props.id" :class="selectClass" style="display: none;">
        <slot></slot>
    </select>
    <div class="wd-selectContainer" ref="selectContainer" tabindex="0">
        <div :class="selectClass" @click="showSelectBox"><span>{{ optionData.options[currentOption]?.props?.text ||''}}</span>
                <svg t="1739191840835" :class="selectArrowClass" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4168" width="20" height="20"><path d="M652.325926 789.333333c-5.12 0-10.145185-1.801481-14.222222-5.499259l-284.444445-256c-4.456296-4.077037-7.016296-9.765926-7.016296-15.834074s2.56-11.851852 7.016296-15.834074l284.444445-256c8.722963-7.86963 22.281481-7.205926 30.151111 1.611852 7.86963 8.722963 7.205926 22.281481-1.611852 30.151111L399.739259 512 666.548148 752.165926c8.722963 7.86963 9.481481 21.333333 1.611852 30.151111-4.171852 4.645926-10.05037 7.016296-15.834074 7.016296z" p-id="4169" fill="currentColor"></path></svg>
        </div>
        <ul :class="selectBoxClass" >
            <li :class="optionClass(index)" v-for="(option,index) in optionData.options" @click="getSelectedOption(index)">{{ option.props.text }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="wd-select">
import { computed,onMounted,reactive,useSlots, VNode,ref, onBeforeUnmount } from 'vue';
import { selectProps } from './type';
import "../../../../theme-chalk/src/select.scss"


const props = defineProps(selectProps)
const emits = defineEmits<{(e:'value',value:String):void}>()
const model = defineModel({type:String,default:'0'})
const selectContainer = ref<HTMLElement|null>(null)

interface OptionVNode extends VNode {
    props: {
        value: string
        text:string
    };
}

const slots = useSlots()
const optionData = reactive<{options:OptionVNode[]}>({options:[]})
const currentOption = ref<number>(0)
const ifshowSelectBox = ref<boolean>(true)

const showSelectBox = () =>{
    ifshowSelectBox.value = !ifshowSelectBox.value
    selectContainer.value?.addEventListener('blur',closeBoxHandler)

}

const closeBoxHandler = () => {
    ifshowSelectBox.value = false
}

const getSelectedOption = (index:number) =>{
    currentOption.value =  index
    model.value = optionData.options[index].props.value
    emits('value',optionData.options[index].props.value)
}

onMounted(()=>{
    if(!slots.default){
        return
    }
    
    const optionElements = slots.default(props)
    for(const optionElement of optionElements){
        optionData.options.push(optionElement)
    }
})

onBeforeUnmount(()=>{
    selectContainer.value?.removeEventListener('blur',closeBoxHandler)
})

const selectBoxClass = computed(()=>{return [
    'wd-selectbox',
    `wd-selectbox-${props.direction}`,
    `wd-selectbox-${props.color}`,
    ifshowSelectBox.value && `is-open`
]})

const selectClass = computed(()=>{return [
    'wd-select',
    `wd-select-${props.direction}`,
    `wd-select-${props.color}`,
]})

const optionClass =(index:number)=>{return [
    'wd-option',
    `wd-option-${props.direction}`,
    `wd-option-${props.color}`,
    currentOption.value === index && `wd-option-${props.color}-selected`
]}

const selectArrowClass = computed(()=>[
    'wd-selectarrow',
    `wd-selectarrow-${props.color}`,
    ifshowSelectBox.value && `is-open`
])
</script>

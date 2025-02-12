<template>
    <div class="wd-joystick-disc"
      ref="joystickSelector"

        :class="joystickDiscClass">
            <div class="wd-joystick-stick"
                :class="joystickStickClass">
        </div>
    </div>
</template>

<script lang="ts" setup name="wdJoystick">
import { onMounted,defineEmits,defineProps,computed, ref, nextTick, onBeforeUnmount } from 'vue';
import { elementRealLeft,elementRealTop } from '@weird-dream-ui/utils';
import { joystickProps } from './type';
import "../../../../theme-chalk/src/joystick.scss"

const emits = defineEmits<{(e:'value',valueX:number,valueY:number):void,(e:'end'):void}>()
const props = defineProps(joystickProps)
const joystickSelector = ref<HTMLElement|null>(null)
const valueX=ref<number>(props.valueX?props.valueX:0)
const valueY=ref<number>(props.valueY?props.valueY:0)

const modelX = defineModel("valueX",{type:Number,default:0})
const modelY = defineModel("valueY",{type:Number,default:0})

const joystickDiscClass = computed(()=>{
    return [
        `wd-joystick-disc-${props.color}`,
        `wd-joystick-disc-${props.size}`,
    ]
})
const joystickStickClass = computed(()=>{
    return [
        `wd-joystick-stick-${props.color}`,
        `wd-joystick-stick-${props.size}`,
    ]
})

onMounted(() => {
  if(!joystickSelector.value){
    return
  }
  const joystickDisc = joystickSelector.value;
  const joystickStick = joystickSelector.value.children[0] as HTMLElement
    
    let joystickDiscLeft: number = elementRealLeft(joystickDisc);
    let joystickDiscTop: number = elementRealTop(joystickDisc);
    const joystickDiscDiameter: number = parseInt(getComputedStyle(joystickDisc).width);
    const joystickStickDiameter: number = parseInt(getComputedStyle(joystickStick).width);
    const joystickStickDefault: number = (joystickDiscDiameter-joystickStickDiameter)/2;

    let ifJoystickMoused: boolean = false;

    function handleScrollNresize(){
        joystickDiscLeft = elementRealLeft(joystickDisc);
        joystickDiscTop = elementRealTop(joystickDisc);
    }

    function mousedownHandler(e:MouseEvent){
      handleScrollNresize()
      ifJoystickMoused = true;
    }

    function mousemoveHandler(e:MouseEvent){
      if (!ifJoystickMoused) {
        return;
      }

      let projectedX:number = e.clientX-joystickDiscLeft-joystickStickDiameter/2;
      let projectedY:number = e.clientY-joystickDiscTop- joystickStickDiameter/2;

      const projectCircle = (joystickDiscDiameter/2 - projectedY - joystickStickDiameter/2) ** 2 + (joystickDiscDiameter/2 - projectedX - joystickStickDiameter/2) ** 2;
      const maxCircle = (joystickDiscDiameter/2 - joystickStickDiameter/2) ** 2;

      if (projectCircle > maxCircle) {
        const scale: number = Math.sqrt(maxCircle / projectCircle);
        projectedY = joystickDiscDiameter/2 - (joystickDiscDiameter/2 - projectedY - joystickStickDiameter/2)*scale-joystickStickDiameter/2 ;
        projectedX = joystickDiscDiameter/2 - (joystickDiscDiameter/2 - projectedX - joystickStickDiameter/2)*scale-joystickStickDiameter/2 ;
      }

      joystickStick.style.left = `${projectedX}px`;
      joystickStick.style.top = `${projectedY}px`;

      valueX.value = (joystickDiscDiameter/2 - projectedX - joystickStickDiameter / 2) / (joystickDiscDiameter/2 - joystickStickDiameter/2) * -1;
      valueY.value = (joystickDiscDiameter/2 - projectedY - joystickStickDiameter / 2) / (joystickDiscDiameter/2 - joystickStickDiameter/2);

      emits('value', valueX.value, valueY.value);
      nextTick(()=>{
        modelX.value = valueX.value
        modelY.value = valueY.value
      })
    }

    function mouseupHandler(e:MouseEvent){
      if(ifJoystickMoused){
        ifJoystickMoused = false;
        joystickStick.style.left = `${joystickStickDefault}px`;
        joystickStick.style.top = `${joystickStickDefault}px`;
        valueX.value = 0;
        valueY.value = 0;
        modelX.value = 0;
        modelY.value = 0;
        nextTick(()=>{
          emits('end');
          emits('value', valueX.value, valueY.value);
        })
      }
    }


    document.addEventListener('scroll',handleScrollNresize)
    document.addEventListener('resize',handleScrollNresize)
    joystickStick.addEventListener('mousedown', mousedownHandler);
    document.addEventListener('mousemove',mousemoveHandler);
    document.addEventListener('mouseup',mouseupHandler);
    
    // joystickStick.addEventListener('mousedown', (e) => {
    //   handleScrollNresize()
    //   ifJoystickMoused = true;
    // });

    

    // document.addEventListener('mousemove', (e) => {
    //   if (!ifJoystickMoused) {
    //     return;
    //   }

    //   let projectedX:number = e.clientX-joystickDiscLeft-joystickStickDiameter/2;
    //   let projectedY:number = e.clientY-joystickDiscTop- joystickStickDiameter/2;

    //   const projectCircle = (joystickDiscDiameter/2 - projectedY - joystickStickDiameter/2) ** 2 + (joystickDiscDiameter/2 - projectedX - joystickStickDiameter/2) ** 2;
    //   const maxCircle = (joystickDiscDiameter/2 - joystickStickDiameter/2) ** 2;

    //   if (projectCircle > maxCircle) {
    //     const scale: number = Math.sqrt(maxCircle / projectCircle);
    //     projectedY = joystickDiscDiameter/2 - (joystickDiscDiameter/2 - projectedY - joystickStickDiameter/2)*scale-joystickStickDiameter/2 ;
    //     projectedX = joystickDiscDiameter/2 - (joystickDiscDiameter/2 - projectedX - joystickStickDiameter/2)*scale-joystickStickDiameter/2 ;
    //   }

    //   joystickStick.style.left = `${projectedX}px`;
    //   joystickStick.style.top = `${projectedY}px`;

    //   valueX.value = (joystickDiscDiameter/2 - projectedX - joystickStickDiameter / 2) / (joystickDiscDiameter/2 - joystickStickDiameter/2) * -1;
    //   valueY.value = (joystickDiscDiameter/2 - projectedY - joystickStickDiameter / 2) / (joystickDiscDiameter/2 - joystickStickDiameter/2);

    //   emits('value', valueX.value, valueY.value);
    //   nextTick(()=>{
    //     modelX.value = valueX.value
    //     modelY.value = valueY.value
    //   })
    // });

    // document.addEventListener('mouseup', () => {
    //   if(ifJoystickMoused){
    //     ifJoystickMoused = false;
    //     joystickStick.style.left = `${joystickStickDefault}px`;
    //     joystickStick.style.top = `${joystickStickDefault}px`;
    //     valueX.value = 0;
    //     valueY.value = 0;
    //     modelX.value = 0;
    //     modelY.value = 0;
    //     nextTick(()=>{
    //       emits('end');
    //       emits('value', valueX.value, valueY.value);
    //     })
    //   }
    // });

    onBeforeUnmount(()=>{
      document.removeEventListener('scroll',handleScrollNresize)
      document.removeEventListener('resize',handleScrollNresize)

      joystickStick.removeEventListener('mousedown', mousedownHandler);
      document.removeEventListener('mousemove',mousemoveHandler);
      document.removeEventListener('mouseup',mouseupHandler);
      
    })
  });



</script>
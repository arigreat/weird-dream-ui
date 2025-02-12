import { defineComponent, mergeModels, ref, useModel, computed, onMounted, nextTick, openBlock, createElementBlock, normalizeClass, createElementVNode } from "vue";
import { elementRealLeft, elementRealTop } from "../../../utils/vue/element.mjs";
import { joystickProps } from "./type.mjs";
import "../../../theme-chalk/src/joystick.css";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "joystick",
  props: /* @__PURE__ */ mergeModels(joystickProps, {
    "valueX": { type: Number, default: 0 },
    "valueXModifiers": {},
    "valueY": { type: Number, default: 0 },
    "valueYModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["value", "end"], ["update:valueX", "update:valueY"]),
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const joystickSelector = ref(null);
    const valueX = ref(props.valueX ? props.valueX : 0);
    const valueY = ref(props.valueY ? props.valueY : 0);
    const modelX = useModel(__props, "valueX");
    const modelY = useModel(__props, "valueY");
    const joystickDiscClass = computed(() => {
      return [
        `wd-joystick-disc-${props.color}`,
        `wd-joystick-disc-${props.size}`
      ];
    });
    const joystickStickClass = computed(() => {
      return [
        `wd-joystick-stick-${props.color}`,
        `wd-joystick-stick-${props.size}`
      ];
    });
    onMounted(() => {
      if (!joystickSelector.value) {
        return;
      }
      const joystickDisc = joystickSelector.value;
      const joystickStick = joystickSelector.value.children[0];
      let joystickDiscLeft = elementRealLeft(joystickDisc);
      let joystickDiscTop = elementRealTop(joystickDisc);
      const joystickDiscDiameter = parseInt(getComputedStyle(joystickDisc).width);
      const joystickStickDiameter = parseInt(getComputedStyle(joystickStick).width);
      const joystickStickDefault = (joystickDiscDiameter - joystickStickDiameter) / 2;
      let ifJoystickMoused = false;
      function handleScrollNresize() {
        joystickDiscLeft = elementRealLeft(joystickDisc);
        joystickDiscTop = elementRealTop(joystickDisc);
      }
      document.addEventListener("scroll", handleScrollNresize);
      document.addEventListener("resize", handleScrollNresize);
      joystickStick.addEventListener("mousedown", (e) => {
        handleScrollNresize();
        ifJoystickMoused = true;
      });
      document.addEventListener("mousemove", (e) => {
        if (!ifJoystickMoused) {
          return;
        }
        let projectedX = e.clientX - joystickDiscLeft - joystickStickDiameter / 2;
        let projectedY = e.clientY - joystickDiscTop - joystickStickDiameter / 2;
        const projectCircle = (joystickDiscDiameter / 2 - projectedY - joystickStickDiameter / 2) ** 2 + (joystickDiscDiameter / 2 - projectedX - joystickStickDiameter / 2) ** 2;
        const maxCircle = (joystickDiscDiameter / 2 - joystickStickDiameter / 2) ** 2;
        if (projectCircle > maxCircle) {
          const scale = Math.sqrt(maxCircle / projectCircle);
          projectedY = joystickDiscDiameter / 2 - (joystickDiscDiameter / 2 - projectedY - joystickStickDiameter / 2) * scale - joystickStickDiameter / 2;
          projectedX = joystickDiscDiameter / 2 - (joystickDiscDiameter / 2 - projectedX - joystickStickDiameter / 2) * scale - joystickStickDiameter / 2;
        }
        joystickStick.style.left = `${projectedX}px`;
        joystickStick.style.top = `${projectedY}px`;
        valueX.value = (joystickDiscDiameter / 2 - projectedX - joystickStickDiameter / 2) / (joystickDiscDiameter / 2 - joystickStickDiameter / 2) * -1;
        valueY.value = (joystickDiscDiameter / 2 - projectedY - joystickStickDiameter / 2) / (joystickDiscDiameter / 2 - joystickStickDiameter / 2);
        emits("value", valueX.value, valueY.value);
        nextTick(() => {
          modelX.value = valueX.value;
          modelY.value = valueY.value;
        });
      });
      document.addEventListener("mouseup", () => {
        if (ifJoystickMoused) {
          ifJoystickMoused = false;
          joystickStick.style.left = `${joystickStickDefault}px`;
          joystickStick.style.top = `${joystickStickDefault}px`;
          valueX.value = 0;
          valueY.value = 0;
          modelX.value = 0;
          modelY.value = 0;
          nextTick(() => {
            emits("end");
            emits("value", valueX.value, valueY.value);
          });
        }
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["wd-joystick-disc", joystickDiscClass.value]),
        ref_key: "joystickSelector",
        ref: joystickSelector
      }, [
        createElementVNode("div", {
          class: normalizeClass(["wd-joystick-stick", joystickStickClass.value])
        }, null, 2)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};

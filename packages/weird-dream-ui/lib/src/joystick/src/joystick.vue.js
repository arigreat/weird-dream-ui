"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const element = require("../../../utils/vue/element.js");
const type = require("./type.js");
require("../../../theme-chalk/src/joystick.css");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "joystick",
  props: /* @__PURE__ */ vue.mergeModels(type.joystickProps, {
    "valueX": { type: Number, default: 0 },
    "valueXModifiers": {},
    "valueY": { type: Number, default: 0 },
    "valueYModifiers": {}
  }),
  emits: /* @__PURE__ */ vue.mergeModels(["value", "end"], ["update:valueX", "update:valueY"]),
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const joystickSelector = vue.ref(null);
    const valueX = vue.ref(props.valueX ? props.valueX : 0);
    const valueY = vue.ref(props.valueY ? props.valueY : 0);
    const modelX = vue.useModel(__props, "valueX");
    const modelY = vue.useModel(__props, "valueY");
    const joystickDiscClass = vue.computed(() => {
      return [
        `wd-joystick-disc-${props.color}`,
        `wd-joystick-disc-${props.size}`
      ];
    });
    const joystickStickClass = vue.computed(() => {
      return [
        `wd-joystick-stick-${props.color}`,
        `wd-joystick-stick-${props.size}`
      ];
    });
    vue.onMounted(() => {
      if (!joystickSelector.value) {
        return;
      }
      const joystickDisc = joystickSelector.value;
      const joystickStick = joystickSelector.value.children[0];
      let joystickDiscLeft = element.elementRealLeft(joystickDisc);
      let joystickDiscTop = element.elementRealTop(joystickDisc);
      const joystickDiscDiameter = parseInt(getComputedStyle(joystickDisc).width);
      const joystickStickDiameter = parseInt(getComputedStyle(joystickStick).width);
      const joystickStickDefault = (joystickDiscDiameter - joystickStickDiameter) / 2;
      let ifJoystickMoused = false;
      function handleScrollNresize() {
        joystickDiscLeft = element.elementRealLeft(joystickDisc);
        joystickDiscTop = element.elementRealTop(joystickDisc);
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
        vue.nextTick(() => {
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
          vue.nextTick(() => {
            emits("end");
            emits("value", valueX.value, valueY.value);
          });
        }
      });
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["wd-joystick-disc", joystickDiscClass.value]),
        ref_key: "joystickSelector",
        ref: joystickSelector
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["wd-joystick-stick", joystickStickClass.value])
        }, null, 2)
      ], 2);
    };
  }
});
exports.default = _sfc_main;

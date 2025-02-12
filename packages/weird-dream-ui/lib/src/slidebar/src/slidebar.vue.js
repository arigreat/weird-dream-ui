"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const type = require("./type.js");
require("../../../theme-chalk/src/slidebar.css");
const _hoisted_1 = ["min", "max", "step"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "slidebar",
  props: /* @__PURE__ */ vue.mergeModels(type.slidebarProps, {
    "modelValue": { type: Number, default: 0 },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ vue.mergeModels(["value"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const model = vue.useModel(__props, "modelValue");
    const slidebarSelector = vue.ref(null);
    const slidebarClass = vue.computed(() => {
      return [
        "wd-slidebar",
        `wd-slidebar-${props.fill}`,
        `wd-slidebar-${props.direction}`,
        `wd-slidebar-${props.color}-${props.fill}`,
        `wd-slidebar-${props.size}-${props.type}`
      ];
    });
    vue.computed(() => {
      return [
        "wd-slidebar-text",
        `wd-slidebar-text-${props.direction}`
      ];
    });
    function getValue(e) {
      const element = e.target;
      const valuePersent = ((parseFloat(element.value) - parseFloat(props.min)) / (parseFloat(props.max) - parseFloat(props.min)) * 100).toFixed(2) + "%";
      element.style.setProperty("--currentValue", valuePersent);
      emits("value", e.target.value);
    }
    vue.onMounted(() => {
      if (props.width && slidebarClass.value) {
        slidebarSelector.value.style.width = props.width + "px";
      }
    });
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
        class: vue.normalizeClass(slidebarClass.value),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
        onInput: _cache[1] || (_cache[1] = ($event) => getValue($event)),
        onChange: _cache[2] || (_cache[2] = ($event) => getValue($event)),
        type: "range",
        ref_key: "slidebarSelector",
        ref: slidebarSelector,
        min: parseFloat(props.min),
        max: parseFloat(props.max),
        step: parseFloat(props.step)
      }, null, 42, _hoisted_1)), [
        [vue.vModelText, model.value]
      ]);
    };
  }
});
exports.default = _sfc_main;

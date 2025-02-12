"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const type = require("./type.js");
require("../../../theme-chalk/src/radio.css");
const _hoisted_1 = ["name", "value"];
const checkClass = "is-checked";
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "radio",
  props: /* @__PURE__ */ vue.mergeModels(type.radioProps, {
    "modelValue": { type: String },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const model = vue.useModel(__props, "modelValue");
    const radioClass = vue.computed(() => {
      return [
        "wd-radio",
        model.value == props.value && checkClass
      ];
    });
    const radioButtonClass = vue.computed(() => {
      return [
        "wd-radio-button",
        model.value == props.value && checkClass
      ];
    });
    const radioInputClass = vue.computed(() => {
      return [
        "wd-radio-input",
        model.value == props.value && checkClass
      ];
    });
    const radioLabelClass = vue.computed(() => {
      return [
        "wd-radio-label",
        model.value == props.value && checkClass
      ];
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("label", {
        class: vue.normalizeClass(radioClass.value)
      }, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(radioButtonClass.value)
        }, null, 2),
        vue.withDirectives(vue.createElementVNode("input", {
          type: "radio",
          class: vue.normalizeClass(radioInputClass.value),
          name: props.name,
          value: props.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event)
        }, null, 10, _hoisted_1), [
          [vue.vModelRadio, model.value]
        ]),
        vue.createElementVNode("span", {
          class: vue.normalizeClass(radioLabelClass.value)
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 2);
    };
  }
});
exports.default = _sfc_main;

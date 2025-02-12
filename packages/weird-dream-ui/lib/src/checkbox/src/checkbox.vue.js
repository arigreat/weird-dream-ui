"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../../../theme-chalk/src/checkbox.css");
const type = require("./type.js");
const _hoisted_1 = ["value", "name"];
const checkClass = "is-checked";
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "checkbox",
  props: /* @__PURE__ */ vue.mergeModels(type.checkboxProps, {
    "modelValue": { type: Boolean, default: false },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const checkboxButtonClass = vue.computed(() => {
      return [
        "wd-checkbox-button",
        model.value && checkClass
      ];
    });
    const checkboxInputClass = vue.computed(() => {
      return [
        "wd-checkbox-input",
        model.value && checkClass
      ];
    });
    const checkboxLabelClass = vue.computed(() => {
      return [
        "wd-checkbox-label",
        model.value && checkClass
      ];
    });
    const checkboxSelector = vue.ref(null);
    const model = vue.useModel(__props, "modelValue");
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("label", {
        class: "wd-checkbox",
        ref_key: "checkboxSelector",
        ref: checkboxSelector
      }, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass([checkboxButtonClass.value])
        }, null, 2),
        vue.withDirectives(vue.createElementVNode("input", {
          type: "checkbox",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
          value: props.value,
          name: props.name,
          class: vue.normalizeClass(checkboxInputClass.value)
        }, null, 10, _hoisted_1), [
          [vue.vModelCheckbox, model.value]
        ]),
        vue.createElementVNode("span", {
          class: vue.normalizeClass(checkboxLabelClass.value)
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 512);
    };
  }
});
exports.default = _sfc_main;

"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const type = require("./type.js");
require("../../../theme-chalk/src/switch.css");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "switch",
  props: /* @__PURE__ */ vue.mergeModels(type.switchProps, {
    "modelValue": { type: Boolean, default: false },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ vue.mergeModels(["value"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const model = vue.useModel(__props, "modelValue");
    const switchClass = vue.computed(() => {
      return [
        `wd-switch`,
        `wd-switch-${props.color}`,
        `wd-switch-${props.size}`
      ];
    });
    const switchValueClass = vue.computed(() => {
      return value.value === null ? "" : value.value ? [`wd-switch-${props.size}-on`, `wd-switch-${props.color}-on`] : [`wd-switch-${props.size}-off`, `wd-switch-${props.color}-off`];
    });
    const value = vue.ref(null);
    function switchChange() {
      if (value.value === null) {
        value.value = true;
      } else {
        value.value = !value.value;
      }
      emits("value", value.value);
      model.value = value.value;
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([switchClass.value, switchValueClass.value]),
        onClick: switchChange
      }, _cache[0] || (_cache[0] = [
        vue.createElementVNode("div", { class: "wd-switch-stick" }, null, -1)
      ]), 2);
    };
  }
});
exports.default = _sfc_main;

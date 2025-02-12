"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const type = require("./type.js");
require("../../../theme-chalk/src/button.css");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "button",
  props: type.buttonProps,
  emits: type.ButtonEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const buttonClass = vue.computed(() => {
      return [
        "wd-button",
        `wd-button-${props.type}`,
        `wd-button-${props.size}`,
        props.round && "is-round",
        props.circle && "is-circle",
        props.disabled && "is-disabled"
      ];
    });
    function cik(event) {
      emits("click", event);
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass(buttonClass.value),
        onClick: cik
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
exports.default = _sfc_main;

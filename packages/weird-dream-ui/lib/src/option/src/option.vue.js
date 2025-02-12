"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const type = require("./type.js");
require("../../../theme-chalk/src/option.css");
const _hoisted_1 = ["value", "name", "id", "text"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "option",
  props: type.optionProps,
  setup(__props) {
    const props = __props;
    const optionClass = vue.computed(() => {
      return [
        "wd-option"
      ];
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("option", {
        value: props.value,
        name: props.name,
        id: props.id,
        class: vue.normalizeClass(optionClass.value),
        text: props.text
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1);
    };
  }
});
exports.default = _sfc_main;

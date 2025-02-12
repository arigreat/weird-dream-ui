"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const type = require("./type.js");
require("../../../theme-chalk/src/radio-group.css");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "radio-group",
  props: type.radioGroupProps,
  setup(__props) {
    const props = __props;
    const radioGroupClass = vue.computed(() => {
      return [
        "wd-radio-group"
      ];
    });
    const radioProps = vue.computed(() => {
      return [
        props.name && { name: props.name }
      ];
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(radioGroupClass.value)
      }, [
        vue.renderSlot(_ctx.$slots, "default", vue.normalizeProps(vue.guardReactiveProps(radioProps.value)))
      ], 2);
    };
  }
});
exports.default = _sfc_main;

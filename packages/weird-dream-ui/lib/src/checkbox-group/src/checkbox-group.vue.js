"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../../../theme-chalk/src/checkbox-group.css");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "checkbox-group",
  setup(__props) {
    const checkboxGroupClass = vue.computed(() => {
      return [
        "wd-checkbox-group"
      ];
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(checkboxGroupClass.value)
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
exports.default = _sfc_main;

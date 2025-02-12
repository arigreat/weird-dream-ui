"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const type = require("./type.js");
const _hoisted_1 = ["value", "name", "id"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "option",
  props: type.optionProps,
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("option", {
        value: props.value,
        name: props.name,
        id: props.id
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_1);
    };
  }
});
exports.default = _sfc_main;

"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const type = require("./type.js");
const _hoisted_1 = ["name", "id"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "select",
  props: type.selectProps,
  setup(__props) {
    const props = __props;
    const selectClass = vue.computed(() => {
      return ["wd-select"];
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(selectClass.value)
      }, [
        vue.createElementVNode("select", {
          name: props.name,
          id: props.id
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 8, _hoisted_1)
      ], 2);
    };
  }
});
exports.default = _sfc_main;

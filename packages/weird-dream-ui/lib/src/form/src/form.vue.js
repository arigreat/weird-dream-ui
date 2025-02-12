"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../../../theme-chalk/src/form.css");
const type = require("./type.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "form",
  props: type.formProps,
  setup(__props) {
    const formSelector = vue.ref(null);
    const props = __props;
    vue.onMounted(() => {
      if (!formSelector.value) {
        console.log("fail to load wd-form");
        return;
      }
      if (props.label) {
        const labelElement = document.createElement("p");
        labelElement.innerText = props.label;
        labelElement.classList.add("wd-formname", `wd-formname-${props.labelPosition}`);
        formSelector.value.prepend(labelElement);
      }
      if (props.width) {
        const width = props.width + "px";
        formSelector.value.style.width = width;
        for (let i = 0; i < formSelector.value.children.length; i++) {
          formSelector.value.children[i].style.width = width;
        }
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("form", {
        class: "wd-form",
        ref_key: "formSelector",
        ref: formSelector
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 512);
    };
  }
});
exports.default = _sfc_main;

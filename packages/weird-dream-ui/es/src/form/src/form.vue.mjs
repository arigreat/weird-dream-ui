import { defineComponent, ref, onMounted, openBlock, createElementBlock, renderSlot } from "vue";
import "../../../theme-chalk/src/form.css";
import { formProps } from "./type.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form",
  props: formProps,
  setup(__props) {
    const formSelector = ref(null);
    const props = __props;
    onMounted(() => {
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
      return openBlock(), createElementBlock("form", {
        class: "wd-form",
        ref_key: "formSelector",
        ref: formSelector
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 512);
    };
  }
});
export {
  _sfc_main as default
};

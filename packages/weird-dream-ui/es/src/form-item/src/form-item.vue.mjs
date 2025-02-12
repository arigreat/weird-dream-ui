import { defineComponent, ref, onMounted, openBlock, createElementBlock, renderSlot } from "vue";
import "../../../theme-chalk/src/form-item.css";
import { formitemProps } from "./type.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form-item",
  props: formitemProps,
  setup(__props) {
    const formitemSelector = ref(null);
    const props = __props;
    onMounted(() => {
      if (!formitemSelector.value) {
        console.log("failed to load wd-form-item");
        return;
      }
      if (props.height) {
        formitemSelector.value.style.height = props.height + "px";
      }
      if (props.label) {
        const labelElement = document.createElement("p");
        const labelText = document.createElement("span");
        labelElement.classList.add("wd-form-itemname");
        labelText.innerText = props.label;
        labelElement.appendChild(labelText);
        formitemSelector.value.prepend(labelElement);
        if (formitemSelector.value.children[1].classList.contains("is-required")) {
          const requiredText = document.createElement("span");
          requiredText.classList.add("wd-form-itemname-required");
          requiredText.innerText = "*";
          formitemSelector.value.children[0].prepend(requiredText);
        }
      }
      if (props.required) {
        for (let i = 0; i < formitemSelector.value.children.length; i++) {
          formitemSelector.value.children[i].classList.add("is-required");
          if (formitemSelector.value.children[i].classList.contains("wd-form-itemname")) {
            const requiredText = document.createElement("span");
            requiredText.classList.add("wd-form-itemname-required");
            requiredText.innerText = "*";
            formitemSelector.value.children[i].prepend(requiredText);
          }
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "wd-form-item",
        ref_key: "formitemSelector",
        ref: formitemSelector
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 512);
    };
  }
});
export {
  _sfc_main as default
};

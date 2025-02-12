import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
import { optionProps } from "./type.mjs";
import "../../../theme-chalk/src/option.css";
const _hoisted_1 = ["value", "name", "id", "text"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "option",
  props: optionProps,
  setup(__props) {
    const props = __props;
    const optionClass = computed(() => {
      return [
        "wd-option"
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("option", {
        value: props.value,
        name: props.name,
        id: props.id,
        class: normalizeClass(optionClass.value),
        text: props.text
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};

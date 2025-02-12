import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
import { buttonProps, ButtonEmits } from "./type.mjs";
import "../../../theme-chalk/src/button.css";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "button",
  props: buttonProps,
  emits: ButtonEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const buttonClass = computed(() => {
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
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(buttonClass.value),
        onClick: cik
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};

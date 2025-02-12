import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, renderSlot, normalizeProps, guardReactiveProps } from "vue";
import { radioGroupProps } from "./type.mjs";
import "../../../theme-chalk/src/radio-group.css";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "radio-group",
  props: radioGroupProps,
  setup(__props) {
    const props = __props;
    const radioGroupClass = computed(() => {
      return [
        "wd-radio-group"
      ];
    });
    const radioProps = computed(() => {
      return [
        props.name && { name: props.name }
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(radioGroupClass.value)
      }, [
        renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(radioProps.value)))
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};

import { defineComponent, openBlock, createElementBlock, renderSlot } from "vue";
import { optionProps } from "./type.mjs";
const _hoisted_1 = ["value", "name", "id"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "option",
  props: optionProps,
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("option", {
        value: props.value,
        name: props.name,
        id: props.id
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};

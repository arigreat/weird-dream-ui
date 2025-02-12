import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot } from "vue";
import { selectProps } from "./type.mjs";
const _hoisted_1 = ["name", "id"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "select",
  props: selectProps,
  setup(__props) {
    const props = __props;
    const selectClass = computed(() => {
      return ["wd-select"];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(selectClass.value)
      }, [
        createElementVNode("select", {
          name: props.name,
          id: props.id
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 8, _hoisted_1)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};

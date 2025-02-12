import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
import "../../../theme-chalk/src/checkbox-group.css";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "checkbox-group",
  setup(__props) {
    const checkboxGroupClass = computed(() => {
      return [
        "wd-checkbox-group"
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(checkboxGroupClass.value)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};

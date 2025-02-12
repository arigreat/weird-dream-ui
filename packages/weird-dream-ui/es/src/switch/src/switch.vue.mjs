import { defineComponent, mergeModels, useModel, computed, ref, openBlock, createElementBlock, normalizeClass, createElementVNode } from "vue";
import { switchProps } from "./type.mjs";
import "../../../theme-chalk/src/switch.css";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "switch",
  props: /* @__PURE__ */ mergeModels(switchProps, {
    "modelValue": { type: Boolean, default: false },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["value"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const model = useModel(__props, "modelValue");
    const switchClass = computed(() => {
      return [
        `wd-switch`,
        `wd-switch-${props.color}`,
        `wd-switch-${props.size}`
      ];
    });
    const switchValueClass = computed(() => {
      return value.value === null ? "" : value.value ? [`wd-switch-${props.size}-on`, `wd-switch-${props.color}-on`] : [`wd-switch-${props.size}-off`, `wd-switch-${props.color}-off`];
    });
    const value = ref(null);
    function switchChange() {
      if (value.value === null) {
        value.value = true;
      } else {
        value.value = !value.value;
      }
      emits("value", value.value);
      model.value = value.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([switchClass.value, switchValueClass.value]),
        onClick: switchChange
      }, _cache[0] || (_cache[0] = [
        createElementVNode("div", { class: "wd-switch-stick" }, null, -1)
      ]), 2);
    };
  }
});
export {
  _sfc_main as default
};

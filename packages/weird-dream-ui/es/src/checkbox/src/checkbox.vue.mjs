import { defineComponent, mergeModels, computed, ref, useModel, openBlock, createElementBlock, createElementVNode, normalizeClass, withDirectives, vModelCheckbox, renderSlot } from "vue";
import "../../../theme-chalk/src/checkbox.css";
import { checkboxProps } from "./type.mjs";
const _hoisted_1 = ["value", "name"];
const checkClass = "is-checked";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "checkbox",
  props: /* @__PURE__ */ mergeModels(checkboxProps, {
    "modelValue": { type: Boolean, default: false },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const checkboxButtonClass = computed(() => {
      return [
        "wd-checkbox-button",
        model.value && checkClass
      ];
    });
    const checkboxInputClass = computed(() => {
      return [
        "wd-checkbox-input",
        model.value && checkClass
      ];
    });
    const checkboxLabelClass = computed(() => {
      return [
        "wd-checkbox-label",
        model.value && checkClass
      ];
    });
    const checkboxSelector = ref(null);
    const model = useModel(__props, "modelValue");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: "wd-checkbox",
        ref_key: "checkboxSelector",
        ref: checkboxSelector
      }, [
        createElementVNode("span", {
          class: normalizeClass([checkboxButtonClass.value])
        }, null, 2),
        withDirectives(createElementVNode("input", {
          type: "checkbox",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
          value: props.value,
          name: props.name,
          class: normalizeClass(checkboxInputClass.value)
        }, null, 10, _hoisted_1), [
          [vModelCheckbox, model.value]
        ]),
        createElementVNode("span", {
          class: normalizeClass(checkboxLabelClass.value)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 512);
    };
  }
});
export {
  _sfc_main as default
};

import { defineComponent, mergeModels, useModel, computed, openBlock, createElementBlock, normalizeClass, createElementVNode, withDirectives, vModelRadio, renderSlot } from "vue";
import { radioProps } from "./type.mjs";
import "../../../theme-chalk/src/radio.css";
const _hoisted_1 = ["name", "value"];
const checkClass = "is-checked";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "radio",
  props: /* @__PURE__ */ mergeModels(radioProps, {
    "modelValue": { type: String },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const model = useModel(__props, "modelValue");
    const radioClass = computed(() => {
      return [
        "wd-radio",
        model.value == props.value && checkClass
      ];
    });
    const radioButtonClass = computed(() => {
      return [
        "wd-radio-button",
        model.value == props.value && checkClass
      ];
    });
    const radioInputClass = computed(() => {
      return [
        "wd-radio-input",
        model.value == props.value && checkClass
      ];
    });
    const radioLabelClass = computed(() => {
      return [
        "wd-radio-label",
        model.value == props.value && checkClass
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(radioClass.value)
      }, [
        createElementVNode("span", {
          class: normalizeClass(radioButtonClass.value)
        }, null, 2),
        withDirectives(createElementVNode("input", {
          type: "radio",
          class: normalizeClass(radioInputClass.value),
          name: props.name,
          value: props.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event)
        }, null, 10, _hoisted_1), [
          [vModelRadio, model.value]
        ]),
        createElementVNode("span", {
          class: normalizeClass(radioLabelClass.value)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};

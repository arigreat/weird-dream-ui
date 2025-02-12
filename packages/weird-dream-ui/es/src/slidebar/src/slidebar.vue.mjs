import { defineComponent, mergeModels, useModel, ref, computed, onMounted, withDirectives, openBlock, createElementBlock, normalizeClass, vModelText } from "vue";
import { slidebarProps } from "./type.mjs";
import "../../../theme-chalk/src/slidebar.css";
const _hoisted_1 = ["min", "max", "step"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "slidebar",
  props: /* @__PURE__ */ mergeModels(slidebarProps, {
    "modelValue": { type: String, default: "0" },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["value"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const model = useModel(__props, "modelValue");
    const slidebarSelector = ref(null);
    const slidebarClass = computed(() => {
      return [
        "wd-slidebar",
        `wd-slidebar-${props.fill}`,
        `wd-slidebar-${props.direction}`,
        `wd-slidebar-${props.color}-${props.fill}`,
        `wd-slidebar-${props.size}-${props.type}`
      ];
    });
    computed(() => {
      return [
        "wd-slidebar-text",
        `wd-slidebar-text-${props.direction}`
      ];
    });
    function getValue(e) {
      const element = e.target;
      const valuePersent = ((parseFloat(element.value) - parseFloat(props.min)) / (parseFloat(props.max) - parseFloat(props.min)) * 100).toFixed(2) + "%";
      element.style.setProperty("--currentValue", valuePersent);
      emits("value", e.target.value);
    }
    onMounted(() => {
      if (props.width && slidebarClass.value) {
        slidebarSelector.value.style.width = props.width + "px";
      }
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("input", {
        class: normalizeClass(slidebarClass.value),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
        onInput: _cache[1] || (_cache[1] = ($event) => getValue($event)),
        onChange: _cache[2] || (_cache[2] = ($event) => getValue($event)),
        type: "range",
        ref_key: "slidebarSelector",
        ref: slidebarSelector,
        min: parseFloat(props.min),
        max: parseFloat(props.max),
        step: parseFloat(props.step)
      }, null, 42, _hoisted_1)), [
        [vModelText, model.value]
      ]);
    };
  }
});
export {
  _sfc_main as default
};

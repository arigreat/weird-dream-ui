"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../../../theme-chalk/src/input.css");
const type = require("./type.js");
const _hoisted_1 = ["type", "placeholder"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "input",
  props: /* @__PURE__ */ vue.mergeModels(type.inputProps, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ vue.mergeModels(["value"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const model = vue.useModel(__props, "modelValue");
    const emits = __emit;
    const inputClass = vue.computed(() => {
      return [
        "wd-input",
        `wd-input-${props.type}`,
        props.required && "is-required"
      ];
    });
    const inputSelector = vue.ref(null);
    vue.onMounted(() => {
      if (!inputSelector.value) {
        return;
      }
      inputSelector.value.addEventListener("focusout", () => {
        validatorCheck();
      });
    });
    function getValue(e) {
      emits("value", e.target.value);
      validatorCheck();
    }
    function validatorCheck() {
      var _a, _b;
      if (((_a = inputSelector.value) == null ? void 0 : _a.classList.contains("is-required")) && !model.value) {
        inputSelector.value.classList.add("wd-input-warning");
      }
      if (model.value) {
        (_b = inputSelector.value) == null ? void 0 : _b.classList.remove("wd-input-warning");
      }
    }
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
        class: vue.normalizeClass(inputClass.value),
        type: props.type,
        onInput: _cache[0] || (_cache[0] = ($event) => getValue($event)),
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value = $event),
        ref_key: "inputSelector",
        ref: inputSelector,
        placeholder: props.placeholder
      }, null, 42, _hoisted_1)), [
        [vue.vModelDynamic, model.value]
      ]);
    };
  }
});
exports.default = _sfc_main;

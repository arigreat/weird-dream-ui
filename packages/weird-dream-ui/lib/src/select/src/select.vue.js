"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const type = require("./type.js");
require("../../../theme-chalk/src/select.css");
const _hoisted_1 = ["name", "id"];
const _hoisted_2 = ["onClick"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "select",
  props: /* @__PURE__ */ vue.mergeModels(type.selectProps, {
    "modelValue": { type: String, default: "0" },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ vue.mergeModels(["value"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const model = vue.useModel(__props, "modelValue");
    const selectContainer = vue.ref(null);
    const slots = vue.useSlots();
    const optionData = vue.reactive({ options: [] });
    const currentOption = vue.ref(0);
    const ifshowSelectBox = vue.ref(true);
    const showSelectBox = () => {
      var _a;
      ifshowSelectBox.value = !ifshowSelectBox.value;
      (_a = selectContainer.value) == null ? void 0 : _a.addEventListener("blur", closeBoxHandler);
    };
    const closeBoxHandler = () => {
      ifshowSelectBox.value = false;
    };
    const getSelectedOption = (index) => {
      currentOption.value = index;
      model.value = optionData.options[index].props.value;
      emits("value", optionData.options[index].props.value);
    };
    vue.onMounted(() => {
      if (!slots.default) {
        return;
      }
      const optionElements = slots.default(props);
      for (const optionElement of optionElements) {
        optionData.options.push(optionElement);
      }
    });
    vue.onBeforeUnmount(() => {
      var _a;
      (_a = selectContainer.value) == null ? void 0 : _a.removeEventListener("blur", closeBoxHandler);
    });
    const selectBoxClass = vue.computed(() => {
      return [
        "wd-selectbox",
        `wd-selectbox-${props.direction}`,
        `wd-selectbox-${props.color}`,
        ifshowSelectBox.value && `is-open`
      ];
    });
    const selectClass = vue.computed(() => {
      return [
        "wd-select",
        `wd-select-${props.direction}`,
        `wd-select-${props.color}`
      ];
    });
    const optionClass = (index) => {
      return [
        "wd-option",
        `wd-option-${props.direction}`,
        `wd-option-${props.color}`,
        currentOption.value === index && `wd-option-${props.color}-selected`
      ];
    };
    const selectArrowClass = vue.computed(() => [
      "wd-selectarrow",
      `wd-selectarrow-${props.color}`,
      ifshowSelectBox.value && `is-open`
    ]);
    return (_ctx, _cache) => {
      var _a, _b;
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
        vue.createElementVNode("select", {
          name: props.name,
          id: props.id,
          class: vue.normalizeClass(selectClass.value),
          style: { "display": "none" }
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 10, _hoisted_1),
        vue.createElementVNode("div", {
          class: "wd-selectContainer",
          ref_key: "selectContainer",
          ref: selectContainer,
          tabindex: "0"
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(selectClass.value),
            onClick: showSelectBox
          }, [
            vue.createElementVNode("span", null, vue.toDisplayString(((_b = (_a = optionData.options[currentOption.value]) == null ? void 0 : _a.props) == null ? void 0 : _b.text) || ""), 1),
            (vue.openBlock(), vue.createElementBlock("svg", {
              t: "1739191840835",
              class: vue.normalizeClass([selectArrowClass.value, "icon"]),
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "4168",
              width: "20",
              height: "20"
            }, _cache[0] || (_cache[0] = [
              vue.createElementVNode("path", {
                d: "M652.325926 789.333333c-5.12 0-10.145185-1.801481-14.222222-5.499259l-284.444445-256c-4.456296-4.077037-7.016296-9.765926-7.016296-15.834074s2.56-11.851852 7.016296-15.834074l284.444445-256c8.722963-7.86963 22.281481-7.205926 30.151111 1.611852 7.86963 8.722963 7.205926 22.281481-1.611852 30.151111L399.739259 512 666.548148 752.165926c8.722963 7.86963 9.481481 21.333333 1.611852 30.151111-4.171852 4.645926-10.05037 7.016296-15.834074 7.016296z",
                "p-id": "4169",
                fill: "currentColor"
              }, null, -1)
            ]), 2))
          ], 2),
          vue.createElementVNode("ul", {
            class: vue.normalizeClass(selectBoxClass.value)
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(optionData.options, (option, index) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                class: vue.normalizeClass(optionClass(index)),
                onClick: ($event) => getSelectedOption(index)
              }, vue.toDisplayString(option.props.text), 11, _hoisted_2);
            }), 256))
          ], 2)
        ], 512)
      ], 64);
    };
  }
});
exports.default = _sfc_main;

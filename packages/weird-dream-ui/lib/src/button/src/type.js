"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ButtonType = ["primary", "success", "info", "warning", "danger", "text"];
const ButtonSize = ["huge", "large", "medium", "small", "mini", "tiny"];
const buttonProps = {
  type: {
    type: String,
    validator(value) {
      return ButtonType.includes(value);
    },
    default: "primary"
  },
  size: {
    type: String,
    validator(value) {
      return ButtonSize.includes(value);
    },
    default: "medium"
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
};
const ButtonEmits = {
  click: (event) => event
};
exports.ButtonEmits = ButtonEmits;
exports.ButtonSize = ButtonSize;
exports.ButtonType = ButtonType;
exports.buttonProps = buttonProps;

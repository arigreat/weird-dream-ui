"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const formitemLabelPositionType = ["center", "left", "right"];
const formitemProps = {
  label: {
    type: String
  },
  labelPosition: {
    type: String,
    validator(value) {
      return formitemLabelPositionType.includes(value);
    },
    default: "center"
  },
  height: {
    type: String,
    default: "50"
  },
  required: {
    type: Boolean,
    default: false
  }
};
exports.formitemLabelPositionType = formitemLabelPositionType;
exports.formitemProps = formitemProps;

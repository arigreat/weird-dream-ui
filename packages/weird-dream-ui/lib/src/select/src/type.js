"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const selectDirection = ["row", "column"];
const selectColor = ["primary", "blue", "red", "grey", "yellow", "pink", "white", "black"];
const selectProps = {
  id: {
    type: String
  },
  name: {
    type: String
  },
  direction: {
    type: String,
    validator(value) {
      return selectDirection.includes(value);
    },
    default: "column"
  },
  color: {
    type: String,
    validator(value) {
      return selectColor.includes(value);
    },
    default: "primary"
  }
};
exports.selectColor = selectColor;
exports.selectDirection = selectDirection;
exports.selectProps = selectProps;

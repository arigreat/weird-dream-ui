"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const carouselProps = {
  type: {
    type: String,
    validator(value) {
      return ["primary", "manual", "auto"].includes(value);
    },
    default: "primary"
  },
  width: {
    type: String,
    default: "500"
  },
  height: {
    type: String,
    default: "300"
  },
  round: {
    type: Boolean,
    default: false
  }
};
exports.carouselProps = carouselProps;

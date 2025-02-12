"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const JoystickColor = ["primary", "blue", "red", "grey", "yellow", "white", "black", "pink"];
const JoystickSize = ["large", "medium", "small"];
const joystickProps = {
  color: {
    type: String,
    validator(value) {
      return JoystickColor.includes(value);
    },
    default: "primary"
  },
  size: {
    type: String,
    validator(value) {
      return JoystickSize.includes(value);
    },
    default: "medium"
  },
  valueX: {
    type: Number
  },
  valueY: {
    type: Number
  }
};
exports.JoystickColor = JoystickColor;
exports.JoystickSize = JoystickSize;
exports.joystickProps = joystickProps;

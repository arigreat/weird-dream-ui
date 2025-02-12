const slidebarType = ["inner", "outer"];
const slidebarFill = ["full", "stripe", "default", "gradient"];
const slidebarColor = ["primary", "blue", "red", "grey", "yellow", "pink", "white", "black"];
const slidebarSize = ["huge", "large", "medium", "small", "mini"];
const slidebarDirection = ["vertical", "horizontal"];
const slidebarProps = {
  type: {
    type: String,
    validator(value) {
      return slidebarType.includes(value);
    },
    default: "inner"
  },
  size: {
    type: String,
    validator(value) {
      return slidebarSize.includes(value);
    },
    default: "medium"
  },
  fill: {
    type: String,
    validator(value) {
      return slidebarFill.includes(value);
    },
    default: "default"
  },
  color: {
    type: String,
    validator(value) {
      return slidebarColor.includes(value);
    },
    default: "primary"
  },
  direction: {
    type: String,
    validator(value) {
      return slidebarDirection.includes(value);
    },
    default: "horizontal"
  },
  min: {
    type: String,
    default: "0"
  },
  max: {
    type: String,
    default: "100"
  },
  step: {
    type: String,
    default: "1"
  },
  value: {
    type: String,
    default: "0"
  },
  width: {
    type: String
  }
};
export {
  slidebarColor,
  slidebarDirection,
  slidebarFill,
  slidebarProps,
  slidebarSize,
  slidebarType
};

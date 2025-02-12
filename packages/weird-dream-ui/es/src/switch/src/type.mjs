const SwitchColor = ["primary", "blue", "red", "yellow", "black", "white", "pink"];
const SwitchSize = ["huge", "large", "medium", "small", "mini", "tiny"];
const switchProps = {
  color: {
    type: String,
    validator(value) {
      return SwitchColor.includes(value);
    },
    default: "primary"
  },
  size: {
    type: String,
    validator(value) {
      return SwitchSize.includes(value);
    },
    default: "medium"
  },
  disabled: {
    type: Boolean,
    default: false
  }
};
export {
  SwitchColor,
  SwitchSize,
  switchProps
};

const formLabelPositionType = ["center", "left", "right"];
const formProps = {
  label: {
    type: String
  },
  labelPosition: {
    type: String,
    validator(value) {
      return formLabelPositionType.includes(value);
    },
    default: "left"
  },
  width: {
    type: String,
    default: "500"
  }
};
export {
  formLabelPositionType,
  formProps
};

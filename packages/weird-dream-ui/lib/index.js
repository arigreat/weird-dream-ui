"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const index$1 = require("./src/button/index.js");
const index$2 = require("./src/button-group/index.js");
const index$3 = require("./src/carousel/index.js");
const index$4 = require("./src/carousel-img/index.js");
const index$5 = require("./src/checkbox/index.js");
const index$6 = require("./src/checkbox-group/index.js");
const index$7 = require("./src/form/index.js");
const index$8 = require("./src/form-item/index.js");
const index$9 = require("./src/input/index.js");
const index$a = require("./src/joystick/index.js");
const index$b = require("./src/option/index.js");
const index$c = require("./src/radio/index.js");
const index$d = require("./src/radio-group/index.js");
const index$e = require("./src/select/index.js");
const index$f = require("./src/slidebar/index.js");
const index$g = require("./src/switch/index.js");
index$1.wdButton.install = function(app) {
  app.component("wdButton", index$1.wdButton);
};
index$2.wdButtonGroup.install = function(app) {
  app.component("wdButtonGroup", index$2.wdButtonGroup);
};
index$3.wdCarousel.install = function(app) {
  app.component("wdCarousel", index$3.wdCarousel);
};
index$4.wdCarouselImg.install = function(app) {
  app.component("wdCarouselImg", index$4.wdCarouselImg);
};
index$5.wdCheckbox.install = function(app) {
  app.component("wdCheckbox", index$5.wdCheckbox);
};
index$6.wdCheckboxGroup.install = function(app) {
  app.component("wdCheckboxGroup", index$6.wdCheckboxGroup);
};
index$7.wdForm.install = function(app) {
  app.component("wdForm", index$7.wdForm);
};
index$8.wdFormItem.install = function(app) {
  app.component("wdFormItem", index$8.wdFormItem);
};
index$9.wdInput.install = function(app) {
  app.component("wdInput", index$9.wdInput);
};
index$a.wdJoystick.install = function(app) {
  app.component("wdJoystick", index$a.wdJoystick);
};
index$b.wdOption.install = function(app) {
  app.component("wdOption", index$b.wdOption);
};
index$c.wdRadio.install = function(app) {
  app.component("wdRadio", index$c.wdRadio);
};
index$d.wdRadioGroup.install = function(app) {
  app.component("wdRadioGroup", index$d.wdRadioGroup);
};
index$e.wdSelect.install = function(app) {
  app.component("wdSelect", index$e.wdSelect);
};
index$f.wdSlidebar.install = function(app) {
  app.component("wdSlidebar", index$f.wdSlidebar);
};
index$g.wdSwitch.install = function(app) {
  app.component("wdSwitch", index$g.wdSwitch);
};
const install = function(app) {
  app.component("wdButton", index$1.wdButton);
  app.component("wdButtonGroup", index$2.wdButtonGroup);
  app.component("wdCarousel", index$3.wdCarousel);
  app.component("wdCarouselImg", index$4.wdCarouselImg);
  app.component("wdCheckbox", index$5.wdCheckbox);
  app.component("wdCheckboxGroup", index$6.wdCheckboxGroup);
  app.component("wdForm", index$7.wdForm);
  app.component("wdFormItem", index$8.wdFormItem);
  app.component("wdInput", index$9.wdInput);
  app.component("wdJoystick", index$a.wdJoystick);
  app.component("wdOption", index$b.wdOption);
  app.component("wdRadio", index$c.wdRadio);
  app.component("wdRadioGroup", index$d.wdRadioGroup);
  app.component("wdSelect", index$e.wdSelect);
  app.component("wdSlidebar", index$f.wdSlidebar);
  app.component("wdSwitch", index$g.wdSwitch);
};
const index = {
  install
};
exports.wdButton = index$1.wdButton;
exports.wdButtonGroup = index$2.wdButtonGroup;
exports.wdCarousel = index$3.wdCarousel;
exports.wdCarouselImg = index$4.wdCarouselImg;
exports.wdCheckbox = index$5.wdCheckbox;
exports.wdCheckboxGroup = index$6.wdCheckboxGroup;
exports.wdForm = index$7.wdForm;
exports.wdFormItem = index$8.wdFormItem;
exports.wdInput = index$9.wdInput;
exports.wdJoystick = index$a.wdJoystick;
exports.wdOption = index$b.wdOption;
exports.wdRadio = index$c.wdRadio;
exports.wdRadioGroup = index$d.wdRadioGroup;
exports.wdSelect = index$e.wdSelect;
exports.wdSlidebar = index$f.wdSlidebar;
exports.wdSwitch = index$g.wdSwitch;
exports.default = index;

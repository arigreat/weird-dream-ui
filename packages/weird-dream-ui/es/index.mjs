import { wdButton } from "./src/button/index.mjs";
import { wdButtonGroup } from "./src/button-group/index.mjs";
import { wdCarousel } from "./src/carousel/index.mjs";
import { wdCarouselImg } from "./src/carousel-img/index.mjs";
import { wdCheckbox } from "./src/checkbox/index.mjs";
import { wdCheckboxGroup } from "./src/checkbox-group/index.mjs";
import { wdForm } from "./src/form/index.mjs";
import { wdFormItem } from "./src/form-item/index.mjs";
import { wdInput } from "./src/input/index.mjs";
import { wdJoystick } from "./src/joystick/index.mjs";
import { wdOption } from "./src/option/index.mjs";
import { wdRadio } from "./src/radio/index.mjs";
import { wdRadioGroup } from "./src/radio-group/index.mjs";
import { wdSelect } from "./src/select/index.mjs";
import { wdSlidebar } from "./src/slidebar/index.mjs";
import { wdSwitch } from "./src/switch/index.mjs";
wdButton.install = function(app) {
  app.component("wdButton", wdButton);
};
wdButtonGroup.install = function(app) {
  app.component("wdButtonGroup", wdButtonGroup);
};
wdCarousel.install = function(app) {
  app.component("wdCarousel", wdCarousel);
};
wdCarouselImg.install = function(app) {
  app.component("wdCarouselImg", wdCarouselImg);
};
wdCheckbox.install = function(app) {
  app.component("wdCheckbox", wdCheckbox);
};
wdCheckboxGroup.install = function(app) {
  app.component("wdCheckboxGroup", wdCheckboxGroup);
};
wdForm.install = function(app) {
  app.component("wdForm", wdForm);
};
wdFormItem.install = function(app) {
  app.component("wdFormItem", wdFormItem);
};
wdInput.install = function(app) {
  app.component("wdInput", wdInput);
};
wdJoystick.install = function(app) {
  app.component("wdJoystick", wdJoystick);
};
wdOption.install = function(app) {
  app.component("wdOption", wdOption);
};
wdRadio.install = function(app) {
  app.component("wdRadio", wdRadio);
};
wdRadioGroup.install = function(app) {
  app.component("wdRadioGroup", wdRadioGroup);
};
wdSelect.install = function(app) {
  app.component("wdSelect", wdSelect);
};
wdSlidebar.install = function(app) {
  app.component("wdSlidebar", wdSlidebar);
};
wdSwitch.install = function(app) {
  app.component("wdSwitch", wdSwitch);
};
const install = function(app) {
  app.component("wdButton", wdButton);
  app.component("wdButtonGroup", wdButtonGroup);
  app.component("wdCarousel", wdCarousel);
  app.component("wdCarouselImg", wdCarouselImg);
  app.component("wdCheckbox", wdCheckbox);
  app.component("wdCheckboxGroup", wdCheckboxGroup);
  app.component("wdForm", wdForm);
  app.component("wdFormItem", wdFormItem);
  app.component("wdInput", wdInput);
  app.component("wdJoystick", wdJoystick);
  app.component("wdOption", wdOption);
  app.component("wdRadio", wdRadio);
  app.component("wdRadioGroup", wdRadioGroup);
  app.component("wdSelect", wdSelect);
  app.component("wdSlidebar", wdSlidebar);
  app.component("wdSwitch", wdSwitch);
};
const index = {
  install
};
export {
  index as default,
  wdButton,
  wdButtonGroup,
  wdCarousel,
  wdCarouselImg,
  wdCheckbox,
  wdCheckboxGroup,
  wdForm,
  wdFormItem,
  wdInput,
  wdJoystick,
  wdOption,
  wdRadio,
  wdRadioGroup,
  wdSelect,
  wdSlidebar,
  wdSwitch
};

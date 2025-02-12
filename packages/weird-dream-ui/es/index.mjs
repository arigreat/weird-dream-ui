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

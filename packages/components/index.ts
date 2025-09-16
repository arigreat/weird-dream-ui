import type { App } from 'vue'
import wdButton from './src/button'
import wdButtonGroup from './src/button-group'
import wdCarousel from './src/carousel'
import wdCarouselImg from './src/carousel-img'
import wdCheckbox from './src/checkbox'
import wdCheckboxGroup from './src/checkbox-group'
import wdForm from './src/form' 
import wdFormItem from './src/form-item'
import wdInput from './src/input'
import wdJoystick from './src/joystick'
import wdOption from './src/option'
import wdRadio from './src/radio'
import wdRadioGroup from './src/radio-group'
import wdSelect from './src/select'
import wdSlidebar from './src/slidebar'
import wdSwitch from './src/switch'

wdButton.install = function (app: App): void {
  app.component('wdButton', wdButton)
}

wdButtonGroup.install = function (app: App): void {
  app.component('wdButtonGroup', wdButtonGroup)
}

wdCarousel.install = function (app: App): void {
  app.component('wdCarousel', wdCarousel)
}

wdCarouselImg.install = function (app: App): void {
  app.component('wdCarouselImg', wdCarouselImg)
}

wdCheckbox.install = function (app: App): void {
  app.component('wdCheckbox', wdCheckbox)
}

wdCheckboxGroup.install = function (app: App): void {
  app.component('wdCheckboxGroup', wdCheckboxGroup)
}

wdForm.install = function (app: App): void {
  app.component('wdForm', wdForm)
}

wdFormItem.install = function (app: App): void {
  app.component('wdFormItem', wdFormItem)
}

wdInput.install = function (app: App): void {
  app.component('wdInput', wdInput)
}

wdJoystick.install = function (app: App): void {
  app.component('wdJoystick', wdJoystick)
}

wdOption.install = function (app: App): void {
  app.component('wdOption', wdOption)
}

wdRadio.install = function (app: App): void {
  app.component('wdRadio', wdRadio)
}

wdRadioGroup.install = function (app: App): void {
  app.component('wdRadioGroup', wdRadioGroup)
}

wdSelect.install = function (app: App): void {
  app.component('wdSelect', wdSelect)
}

wdSlidebar.install = function (app: App): void {
  app.component('wdSlidebar', wdSlidebar)
}

wdSwitch.install = function (app: App): void {
  app.component('wdSwitch', wdSwitch)
}

export{
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
    wdSwitch,
}

const install = function (app: App): void {
    app.component('wdButton',wdButton)
    app.component('wdButtonGroup',wdButtonGroup)
    app.component('wdCarousel',wdCarousel)
    app.component('wdCarouselImg',wdCarouselImg)
    app.component('wdCheckbox',wdCheckbox)
    app.component('wdCheckboxGroup',wdCheckboxGroup)
    app.component('wdForm',wdForm)
    app.component('wdFormItem',wdFormItem)
    app.component('wdInput',wdInput)
    app.component('wdJoystick',wdJoystick)
    app.component('wdOption',wdOption)
    app.component('wdRadio',wdRadio)
    app.component('wdRadioGroup',wdRadioGroup)
    app.component('wdSelect',wdSelect)
    app.component('wdSlidebar',wdSlidebar)
    app.component('wdSwitch',wdSwitch)
};
  
export default {
    install,
};
  
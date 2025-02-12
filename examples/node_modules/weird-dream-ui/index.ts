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
  
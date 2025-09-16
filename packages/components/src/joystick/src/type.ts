import { ExtractPropTypes } from 'vue'
export const JoystickColor = ['primary', 'blue', 'red', 'grey', 'yellow','white','black','pink']
export const JoystickSize = ['large', 'medium', 'small']
// export const JoystickTheme = []
export const joystickProps = {
  color: {
    type: String,
    validator(value:string){
      return JoystickColor.includes(value)
    },
    default:'primary'
  },
  size: {
    type: String,
    validator(value:string){
      return JoystickSize.includes(value)
    },
    default:'medium'
  },
  valueX:{
    type:Number,
  },
  valueY:{
    type:Number,
  },
  debounce:{
    type:Number,
    default:5
  }
}
// export type JoystickProps = ExtractPropTypes<typeof joystickProps>
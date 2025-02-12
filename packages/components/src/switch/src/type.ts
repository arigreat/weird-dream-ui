import { ExtractPropTypes } from 'vue'
export const SwitchColor = ['primary', 'blue', 'red', 'yellow', 'black','white','pink']
export const SwitchSize = ['huge','large', 'medium', 'small', 'mini', 'tiny']
export const switchProps = {
  color: {
    type: String,
    validator(value:string){
      return SwitchColor.includes(value)
    },
    default:'primary'
  },
  size: {
    type: String,
    validator(value:string){
      return SwitchSize.includes(value)
    },
    default:'medium'
  },
  disabled:{
    type:Boolean,
    default:false,
  }
}
export type SwitchProps = ExtractPropTypes<typeof switchProps>

export const SwitchEmits = {
  click: (event: MouseEvent): MouseEvent => event
};
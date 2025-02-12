import { ExtractPropTypes } from 'vue'
export const ButtonType = ['primary', 'success', 'info', 'warning', 'danger','text']
export const ButtonSize = ['huge','large', 'medium', 'small', 'mini', 'tiny']
export const buttonProps = {
  type: {
    type: String,
    validator(value:string){
      return ButtonType.includes(value)
    },
    default:'primary'
  },
  size: {
    type: String,
    validator(value:string){
      return ButtonSize.includes(value)
    },
    default:'medium'
  },
  round:{
    type:Boolean,
    default:false,
  },
  circle:{
    type:Boolean,
    default:false,
  },
  disabled:{
    type:Boolean,
    default:false,
  }
}
export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export const ButtonEmits = {
  click: (event: MouseEvent): MouseEvent => event
};
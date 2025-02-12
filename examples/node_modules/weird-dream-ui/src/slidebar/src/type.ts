export const slidebarType = ['inner','outer']
export const slidebarFill = ['full','stripe','default','gradient']
export const slidebarColor = ['primary', 'blue', 'red', 'grey', 'yellow','pink','white','black']
export const slidebarSize = ['huge','large', 'medium', 'small', 'mini']
export const slidebarDirection = ['vertical','horizontal']

export const slidebarProps = {
    type:{
        type:String,
        validator(value:string){
            return slidebarType.includes(value)
          },
          default:'inner'
    },
    size:{
        type:String,
        validator(value:string){
            return slidebarSize.includes(value)
          },
          default:'medium'
    },
    fill:{
        type:String,
        validator(value:string){
            return slidebarFill.includes(value)
          },
        default:'default'
    },
    color:{
        type: String,
        validator(value:string){
          return slidebarColor.includes(value)
        },
        default:'primary'
    },
    direction:{
        type:String,
        validator(value:string){
            return slidebarDirection.includes(value)
          },
          default:'horizontal'
    },
    min:{
        type:String,
        default:'0'
    },
    max:{
        type:String,
        default:'100'
    },
    step:{
        type:String,
        default:'1'
    },
    value:{
        type:String,
        default:'0'
    },
    width:{
        type:String,
    }
}

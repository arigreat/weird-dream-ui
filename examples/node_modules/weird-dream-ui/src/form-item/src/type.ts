export const formitemLabelPositionType = ['center','left','right']

export const formitemProps = {
    label:{
        type:String,
    },
    labelPosition:{
        type:String,
        validator(value:string){
            return formitemLabelPositionType.includes(value)
          },
        default:"center",
    },
    height:{
        type:String,
        default:'50',
    },
    required:{
        type:Boolean,
        default:false
    }
}
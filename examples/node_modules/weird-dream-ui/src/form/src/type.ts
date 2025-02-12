export const formLabelPositionType = ['center','left','right']

export const formProps = {
    label:{
        type:String,
    },
    labelPosition:{
        type:String,
        validator(value:string){
            return formLabelPositionType.includes(value)
          },
        default:"left",
    },
    width:{
        type:String,
        default:'500',
    }
}
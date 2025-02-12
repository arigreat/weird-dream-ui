export const selectDirection = ['row','column']
export const selectColor = ['primary', 'blue', 'red', 'grey', 'yellow','pink','white','black']

export const selectProps = {
    id:{
        type:String,
    },
    name:{
        type:String,
    },
    direction:{
        type:String,
        validator(value:string){
        return selectDirection.includes(value)
        },
        default:'column'
    },
    color:{
        type:String,
        validator(value:string){
            return selectColor.includes(value)
        },
        default:'primary'
    }
}
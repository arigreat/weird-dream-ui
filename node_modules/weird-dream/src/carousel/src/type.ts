export const carouselProps = {
    type:{
        type:String,
        validator(value:string){
            return ['primary','manual','auto'].includes(value)
          },
        default:'primary'
    },
    width:{
        type:String,
        default:'500'
    },
    height:{
        type:String,
        default:'300'
    },
    round:{
        type:Boolean,
        default:false
    }
}
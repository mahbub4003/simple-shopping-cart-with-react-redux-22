import { ASUS_ADD, A_DECREMENT, A_INCREMENT, CANON_ADD, C_DECREMENT, C_INCREMENT, DEL_ADD, D_DECREMENT, D_INCREMENT } from "./constant"

export const addAsus = ()=>{
    return{
        type : ASUS_ADD
    }
}
export const addDel = ()=>{
    return{
        type : DEL_ADD
    }
}

export const addCanon = ()=>{
    return{
        type : CANON_ADD
    }
}

export const asusCountIncrement = ()=>{
    return{
        type : A_INCREMENT
    }
}

export const asusCountDecrement = ()=>{
    return{
        type : A_DECREMENT
    }
}

export const delCountIncrement = ()=>{
    return{
        type : D_INCREMENT
    }
}
export const delCountDecrement = ()=>{
    return{
        type : D_DECREMENT
    }
}

export const canonCountIncrement = ()=>{
    return{
        type : C_INCREMENT
    }
}
export const canonCountDecrement = ()=>{
    return{
        type : C_DECREMENT
    }
}
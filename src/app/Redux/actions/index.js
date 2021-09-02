export const incNumber=(num)=>{
    return{
        type:"INCREMENT",
        payload:num
       
    }
}

export const decNumber=()=>{
    return{
        type:"DECREMENT"
    }
}

export const getLead=(data)=>{
   
    return{
        type:"ADDLEAD",
        payload:data
    }
}
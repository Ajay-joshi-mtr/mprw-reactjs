import axios from "axios";

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



export const getPosts = () => async (dispatch)=>{
    const result =await axios.get("https://jsonplaceholder.typicode.com/posts/");

    dispatch({
        type:"GETPOST",
        payload:result.data,
    })
}

export const deletelead = (id) => ({
    type: "DELETE_POST",
    payload: id,
  });


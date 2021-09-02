const initialState = {
    posts:[],
    post:null,
}
 

const leads=(state=initialState,action)=>{

    switch(action.type){

        case "GETPOST":
            return{
                ...state,
                posts:action.payload,
            }
            
        case "ADDLEADSE":
            return {
                ...state.data,
                micros: action.payload
             };
            
        default:
            return state;
    }       
}

export default leads;
const initialState = [
    {
        username: "test",
        id: 1,
        title: "Eat",
        completed: true
       },
       {
        username: "test",
        id: 2,
        title: "Code",
        completed: false
       },
       {
        username: "test",
        id: 3,
        title: "Sleep",
        completed: false
       }
];
 

const leads=(state=initialState,action)=>{

    switch(action.type){

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
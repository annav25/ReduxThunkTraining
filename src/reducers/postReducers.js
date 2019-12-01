const postReducer=(PreviousArray=[],action)=>{
    if (action.type==="FETCH_POSTS"){
        return action.payload;
    }
    return PreviousArray;
 }
 
 export default postReducer;
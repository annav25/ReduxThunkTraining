 const userReducer=(currentUserArray=[],action)=>{
    if (action.type==="FETCH_USER"){
       const findById=currentUserArray.filter(user=> user.id===action.payload.id);
       if (findById.length===0){
             return [...currentUserArray,action.payload];
       }
    }
    return currentUserArray;
}

export default userReducer;
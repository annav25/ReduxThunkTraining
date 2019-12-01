 const userReducer=(currentUser="",action)=>{
    if (action.type==="FETCH_USER"){
        return action.payload;
    }
    return currentUser;
}

export default userReducer;
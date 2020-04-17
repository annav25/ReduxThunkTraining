import {instance} from '../apis/jsonPlaceholder'

export const GetPosts= ()=>{
  return function(dispatch){
    instance.get('/posts')
    .then(Response=>{
        dispatch({
            type:"FETCH_POSTS",
            payload: Response.data
        });
    })
  }
};


  export const GetUserById=(id)=>{
    return function(dispatch){
      instance.get('/users/'+id)
      .then(response=>{
        dispatch({
         type:"FETCH_USER",
         payload:{id:id, name:response.data.name}
        });
      })
    }
  };
   



import axios from 'axios'


export const instance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
});
export const GetUser=id=>instance.get('/users/'+id);

import React from 'react';
import {GetPosts} from'../actions'
import {connect} from 'react-redux';
import UserHeader from './UserHeader';

class PostList extends React.Component{

     renderSingleElement(post){
        console.log('post',post);
        return (
            <div  key={post.id} className="item">
                  <i className="large bug middle aligned icon"></i>
                 <div className="content">
                    <a className="header">{post.title}</a>
                    <div className="description">{post.body}</div>
                    <UserHeader userId={post.userId}/>
                 </div>
            </div>
        )
    }

    render(){
       
        const posts=this.props.posts;
        if (posts.length===0){
            return <div>list</div>;
        }
        else{
            //const postsC=new Array(posts[0]);
           const elementArray=posts.map(post=>this.renderSingleElement(post));
         
           // const element= posts.map(post=><li>{post.id}</li>);
            return <div className="ui relaxed divided list">{elementArray}</div>;
        }
       
    }

    

    componentDidMount(){
        this.props.fetchPost();
       // console.log(this.props.fetchPost());
    }

}

const MapStateToProps=(state)=>{
 return {posts:state.posts};
}

const MasDispatchToProps={fetchPost:GetPosts};
export default connect(MapStateToProps,MasDispatchToProps)(PostList);
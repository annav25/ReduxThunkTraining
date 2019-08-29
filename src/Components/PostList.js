import React from 'react';
import {GetPosts} from'../actions'
import {connect} from 'react-redux';
class PostList extends React.Component{
    render(){
        return <div>list</div>;
    }

    componentDidMount(){
        console.log(this.props);
    }
}

const MapStateToProps=(state)=>{

}

const MasDispatchToProps={fetchPost:GetPosts};
export default connect(null,MasDispatchToProps)(PostList);
import React from 'react';

import {connect} from 'react-redux';
import {GetUserById} from '../actions';

class UserHeader extends React.Component{

    render(){
        const userObj= this.props.user;
        if (this.props.postID<10)
        {
            console.log('render for post id ',this.props.postID);
            //console.log('render for post id ',this.props.postID, 'state: ',userObj.length);
        }
   
       
        if (!userObj){
            return <div></div>
        }
        return <div>user: {userObj.name}</div>
    }

    componentDidMount(){
        if (this.props.postID<10)
        {
            console.log('cmpdidmount for post id ',this.props.postID);
        }
        this.props.getUser(this.props.userId);
    }
}

const mapStateToProps=(state,ownProps)=>{
    if (ownProps.postID<10)
        {
            console.log('mapStateToProps called ',ownProps.postID );
        }
    return {user:state.user.find(user=>user.id===ownProps.userId)};
}

const mapDispatchToProps={getUser:GetUserById};

 
export default connect(mapStateToProps,mapDispatchToProps)(UserHeader);

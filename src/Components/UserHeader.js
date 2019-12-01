import React from 'react';
import {GetUser} from '../apis/jsonPlaceholder';
import {connect} from 'react-redux';
import {GetUserById} from '../actions';

class UserHeader extends React.Component{

    render(){
        if (this.props.user===""){
            return <div></div>
        }
        return <div>{this.props.user}</div>
    }

    componentDidMount(){
        this.props.getUser(this.props.userId);
    }
}

const mapStateToProps=(state)=>({user:state.user});
const mapDispatchToProps={getUser:GetUserById};

 connect(mapStateToProps,mapDispatchToProps)(UserHeader);

export default UserHeader;
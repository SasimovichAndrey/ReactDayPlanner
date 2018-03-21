import React, { Component } from 'react';
import { connect } from 'react-redux'

class User extends Component{
    render(){
        const { name } = this.props.user;

        return (
            <div>
                {name}
            </div>
        )
    }
}

let mapStateToProps = function(state){
    return {
        user: state.user
    }
}

User = connect(mapStateToProps
)(User);

export default User
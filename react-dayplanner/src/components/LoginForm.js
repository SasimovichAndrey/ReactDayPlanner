import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions/userActions'
import { Redirect } from 'react-router-dom'

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: null,
            password: null
        }
    }

    render(){
        const { from } = this.props.location.state || { from: { pathname: "/" } };

        if (this.props.isLogged) {
            return <Redirect to={from} />;
        }

        return (
            <div>
                Email <input type="text" value={this.state.email} onChange={(ev) => this.setState(Object.assign({}, this.state, {email : ev.target.value}))}/> <br/>
                Password <input type="password" value={this.state.password} onChange={(ev) => this.setState(Object.assign({}, this.state, {password : ev.target.value}))}/><br/>
                <input type="button" value="Login" onClick={() => this.props.login(this.state.email, this.state.password)}/>

            </div>
        )
    }
}
  
function mapStateToProps (state) {
    return {
        isLogged: state.user.isLogged
    }
}

var mapDispatchToProps = {
    login: login
}

LoginForm = connect(mapStateToProps,
    mapDispatchToProps)(LoginForm);

export default LoginForm
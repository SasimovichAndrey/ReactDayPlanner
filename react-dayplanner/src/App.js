import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getUser } from './actions/userActions'
import LoginForm from './components/LoginForm'
import Main from './components/Main'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  componentDidMount(){
    this.props.getUser();
  }

  render() {
    var appComponent = this;
    return (
      <BrowserRouter>
        <div className="AppContainer">
          <Route path="/" exact={true} render={(props) => {
            if(appComponent.props.isUserLoading){
              return (
                <div> Loading... </div>
              )
            }
            else if(appComponent.props.userIsLoggedIn){
              return <Main/>
            } else {
              return (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: props.location }
                  }}
                />
                )
            } 
          }}/>
          <Route path="/login" component={LoginForm}/>
          
        </div>
      </BrowserRouter>
    );
  }

}

function mapStateToProps (state) {
  return {
    userIsLoggedIn: state.user.isLogged,
    isUserLoading: state.user.isUserLoading
  }
}

var mapDispatchToProps = {
  getUser: getUser
}

App = connect(mapStateToProps,
   mapDispatchToProps)(App);

export default App;



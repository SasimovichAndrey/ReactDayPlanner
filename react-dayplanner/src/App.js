import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from './actions/todoActions'

class App extends Component {
  renderTodoList(){
    const { todos } = this.props;

    return(Object.values(todos).map((todo) => 
          <Todo {...todo} key={todo.id}/>
    ))
  }

  render() {
    const { addTodo } = this.props;

    return (
      <div className="App">
        {this.renderTodoList()}
        <input type="button" onClick={ () => addTodo() } value="add todo"/>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch){
  return {
    addTodo: bindActionCreators(addTodo, dispatch)
  }
}

App = connect(mapStateToProps,
   mapDispatchToProps)(App);

export default App;

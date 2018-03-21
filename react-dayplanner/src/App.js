import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo, getTodos } from './actions/todoActions'
import UserView from './components/User'
import AddTodoForm from './components/AddTodoForm'
import moment from 'moment'

class App extends Component {
  componentDidMount(){
    this.props.getTodos();
  }

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
        <UserView/>
        {this.renderTodoList()}
        <AddTodoForm onSubmit={(newTodo) => this.onAddTodo(newTodo)}/>
      </div>
    );
  }

  onAddTodo(todoFromForm){
    var newTodo = {
        ...todoFromForm
    }

    this.props.addTodo(newTodo);
  }
}

function mapStateToProps (state) {
  return {
    todos: state.todos
  }
}

var mapDispatchToProps = {
  addTodo: addTodo,
  getTodos: getTodos
}

App = connect(mapStateToProps,
   mapDispatchToProps)(App);

export default App;

import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo, getTodos } from './actions/todoActions'
import UserView from './components/User'

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
        <input type="button" onClick={ () => this.onAddTodo() } value="add todo"/>
      </div>
    );
  }

  onAddTodo(){
    var newTodo = {
        startTime: 'start 3',
        endTime: 'end 3',
        description: 'test todo 3'
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

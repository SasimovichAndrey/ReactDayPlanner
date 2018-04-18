import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo'
import { connect } from 'react-redux'
import { addTodo, getTodos } from './actions/todoActions'
import UserView from './components/User'
import AddTodoForm from './components/AddTodoForm'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  initialState = {
    newTodo:{
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null,
      description: ""
    }
  }

  constructor(props){
    super(props);

    this.state = this.initialState;
  }

  componentDidMount(){
    this.props.getTodos(this.props.userId);
  }

  /* Render methods */  
  renderTodoList(){
    const { todos } = this.props;

    return(
      <div className="todo-list row">
        {Object.values(todos).map((todo) => 
          <div className="col-12 col-md-4" key={todo.id}>
            <Todo {...todo} />
          </div>)
        }
      </div>
      )
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <UserView/>
          </div>
        </div>
        {this.renderTodoList()}
        <AddTodoForm 
          {...this.state.newTodo}
          onSubmit={() => this.onAddTodo()} 
          onTodoChanged={(propName, value) => this.onNewTodoChanged(propName, value)}
        />
      </div>
    );
  }


  /* Event handlers */
  onAddTodo(){
    var newTodo = Object.assign({}, this.state.newTodo,{
      startTime: this.state.newTodo.startTime,
      endTime: this.state.newTodo.endTime,
      userId: this.props.userId
    })

    this.setState(this.initialState)

    this.props.addTodo(newTodo);
  }

  onNewTodoChanged(propName, value){
    this.setState({
      newTodo: Object.assign({}, this.state.newTodo, {[propName]: value})
    })
  } 
}

function mapStateToProps (state) {
  return {
    todos: state.todos,
    userId: state.user.id
  }
}

var mapDispatchToProps = {
  addTodo: addTodo,
  getTodos: getTodos
}

App = connect(mapStateToProps,
   mapDispatchToProps)(App);

export default App;

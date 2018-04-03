import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo'
import { connect } from 'react-redux'
import { addTodo, getTodos } from './actions/todoActions'
import UserView from './components/User'
import AddTodoForm from './components/AddTodoForm'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      newTodo:{
        startTime: null,
        endTime: null,
        description: "",
        isValid: false
      }
    }
  }

  componentDidMount(){
    this.props.getTodos();
  }

  /* Render methods */  
  renderTodoList(){
    const { todos } = this.props;

    return(Object.values(todos).map((todo) => 
          <Todo {...todo} key={todo.id}/>
    ))
  }

  render() {
    return (
      <div className="App">
        <UserView/>
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
      endTime: this.state.newTodo.endTime
    })

    this.setState({
      newTodo:{
        startTime: null,
        endTime: null,
        description: "",
        isValid: false
      }
    })

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

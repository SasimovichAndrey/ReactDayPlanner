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
  constructor(props){
    super(props);

    this.state = {
      newTodo:{
        startTime: "",
        endTime: "",
        description: ""
      }
    }
  }

  componentDidMount(){
    this.props.getTodos();
  }

  renderTodoList(){
    const { todos } = this.props;

    console.log("app rendered")

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
        <AddTodoForm 
          {...this.state.newTodo}
          onSubmit={() => this.onAddTodo()} 
          onTodoChanged={(propName, value) => this.onNewTodoChanged(propName, value)}
          // onStartTimeChanged={(startTime) => this.onStartTimeChanged(startTime)} 
          // onEndTimeChanged={(endTime) => this.onEndTimeChanged(endTime)} 
          // onDescriptionChanged={(description) => this.onDescriptionChanged(description)}
        />
      </div>
    );
  }

  onAddTodo(){
    var newTodo = Object.assign({}, this.state.newTodo,{
      startTime: moment(this.state.newTodo.startTime),
      endTime: moment(this.state.newTodo.endTime)
    })

    this.setState({
      newTodo:{
        startTime: "",
        endTime: "",
        description: ""
      }
    })

    this.props.addTodo(newTodo);
  }

  onNewTodoChanged(propName, value){
    this.setState({
      newTodo: Object.assign({}, this.state.newTodo, {[propName]: value})
    })
  }

  // onStartTimeChanged(startTime){
  //   this.setState({
  //     newTodo: Object.assign({}, this.state.newTodo, {startTime: startTime})
  //   })
  // }

  // onEndTimeChanged(endTime){
  //   this.setState({
  //     newTodo: Object.assign({}, this.state.newTodo, {endTime: endTime})
  //   })
  // }

  // onDescriptionChanged(description){
  //   this.setState({
  //     newTodo: Object.assign({}, this.state.newTodo, {description: description})
  //   })
  // }
  
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

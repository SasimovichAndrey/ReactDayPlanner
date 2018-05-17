import React, { Component } from 'react';
import UserView from '../components/User'
import AddTodoForm from '../components/AddTodoForm'
import { addTodo, getTodos } from '../actions/todoActions'
import { connect } from 'react-redux'
import Todo from '../components/Todo'

class Main extends Component {
    initialState = {
        newTodo:{
          startTime: null,
          endTime: null,
          description: ""
        }
      }
    
    constructor(props){
        super(props);
    
        this.state = this.initialState;
    }


    componentDidMount(){
        
        if(!this.props.isUserLoading){
          this.props.getTodos(this.props.user.userId);
        }
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

    render(){
        return (
            <div id="LoggedUserAppcontainer">
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
          )
    }

      /* Event handlers */
  onAddTodo(){
    var newTodo = Object.assign({}, this.state.newTodo,{
      startDate: this.state.newTodo.startTime,
      endDate: this.state.newTodo.endTime,
      userId: this.props.user.userId
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
      user: state.user.user
    }
  }
  
  var mapDispatchToProps = {
    addTodo: addTodo,
    getTodos: getTodos
  }
  
  Main = connect(mapStateToProps,
     mapDispatchToProps)(Main);
  
  export default Main;
  
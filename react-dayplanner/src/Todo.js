import React, { Component } from 'react'
import { connect } from 'react-redux'

class Todo extends Component{
    render(){
        const { startTime, endTime, description } = this.props;

        return(
            <div>
                <div>{startTime} - {endTime}</div>
                <div>{description}</div>
            </div>
        );
    }
}

Todo = connect()(Todo);

export default Todo;
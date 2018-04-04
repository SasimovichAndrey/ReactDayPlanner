import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import './Todo.css'

class Todo extends Component{
    render(){
        const { startTime, endTime, description } = this.props;
        var startDateFormatted = moment(startTime).format("DD.MM.YY HH:mm")
        var endDateFormatted = moment(endTime).format("DD.MM.YY HH:mm")

        var className = "todo-item"
        return(
            <div className={className}>
                <div>{startDateFormatted} - {endDateFormatted}</div>
                <div>{description}</div>
            </div>
        );
    }
}

Todo = connect()(Todo);

export default Todo;
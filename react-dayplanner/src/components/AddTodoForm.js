import React, { Component } from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

export default class AddTodoForm extends Component{
    render(){
        return(
            <div className="add-todo-form">
                Start date 
                <DatePicker 
                    selected={this.props.startTime === "" ? null : moment(this.props.startTime)} 
                    onChange={(date) => this.onTodoChanged("startTime", date)} 
                    timeFormat="HH:mm"
                    dateFormat="LLL"
                    showTimeSelect/>
                <br/>
                End date
                <DatePicker 
                    selected={this.props.endTime === "" ? null : moment(this.props.endTime)} 
                    onChange={(date) => this.onTodoChanged("endTime", date)} 
                    timeFormat="HH:mm"
                    dateFormat="LLL"
                    showTimeSelect/>
                <br/>
                Description <input value={this.props.description} type="text"  onChange={(ev) => this.onTodoChanged("description", ev.target.value)}/><br/>
                <input type="button" onClick={ () => this.props.onSubmit() } value="add todo"/>
            </div>
        )
    }

    onTodoChanged(propName, value){
        this.props.onTodoChanged(propName, value);
    }
}
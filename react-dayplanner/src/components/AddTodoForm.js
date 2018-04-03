import React, { Component } from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

export default class AddTodoForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            isValid: false,
            startTime:{
                isValid: false
            },
            endTime:{
                isValid: false
            },
            description: {
                isValid: false
            }
        }
    }

    render(){
        return(
            <div className="add-todo-form">
                Start date 
                <DatePicker 
                    selected={this.props.startTime == null ? null : moment(this.props.startTime)} 
                    onChange={(date) => this.onTodoChanged("startTime", date)} 
                    timeFormat="HH:mm"
                    dateFormat="LLL"
                    showTimeSelect
                    className={this.state.startTime.isValid ? null: "form-error"}
                    />
                <br/>
                End date
                <DatePicker 
                    selected={this.props.endTime == null ? null : moment(this.props.endTime)} 
                    onChange={(date) => this.onTodoChanged("endTime", date)} 
                    timeFormat="HH:mm"
                    dateFormat="LLL"
                    showTimeSelect
                    className={this.state.endTime.isValid ? null: "form-error"}/>
                <br/>
                Description 
                <input value={this.props.description} type="text" onChange={(ev) => this.onTodoChanged("description", ev.target.value)}
                    className={this.state.description.isValid ? null: "form-error"}
                />
                <br/>
                <input type="button" onClick={ () => this.props.onSubmit() } value="add todo" disabled={!this.state.isValid}/>
            </div>
        )
    }

    onTodoChanged(propName, value){
        this.validateForm(propName, value);

        this.props.onTodoChanged(propName, value);
    }

    validateForm(propName, value){
        var newState = Object.assign({}, this.state);

        switch(propName){
            case "startTime":
            case "endTime":
            case "description":
                newState[propName] = Object.assign({}, this.state.startTime,
                             {
                                 isValid: value != null && value != ""
                             }
                        )           
        }

        if(newState.startTime.isValid &&
            newState.endTime.isValid &&
            newState.description.isValid){
            newState.isValid = true
        }
        else{
            newState.isValid = false
        }

        this.setState(newState)
    }
}
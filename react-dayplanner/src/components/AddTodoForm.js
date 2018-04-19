import React, { Component } from 'react'
import moment from 'moment'
import DatePicker from 'react-date-picker';

export default class AddTodoForm extends Component{
    initialState = {
        isValid: false,
        startTime:{
            isValid: false,
            isTouched: false
        },
        endTime:{
            isValid: false,
            isTouched: false
        },
        description: {
            isValid: false,
            isTouched: false
        }
    }

    constructor(props){
        super(props)

        this.state = this.initialState
    }

    render(){
        return(
            <div className="add-todo-form form">
                <div className="row form-row justify-content-center">
                    <div className="col-12 col-md-2">
                    Start date 
                    </div>
                    <div className="col-12 col-md-3">
                        <DatePicker 
                            value={this.props.startTime == null ? null : this.props.startTime} 
                            onChange={(date) => this.onTodoChanged("startTime", date)} 
                            readOnly 
                            className={this.state.startTime.isValid || !this.state.startTime.isTouched ? null: "form-error"}
                            />
                    </div>
                </div>
                <div className="row form-row justify-content-center">
                    <div className="col-12 col-md-2">
                        End date
                    </div>
                    <div className="col-12 col-md-3">
                        <DatePicker 
                            value={this.props.endTime == null ? null : this.props.endTime} 
                            onChange={(date) => this.onTodoChanged("endTime", date)} 
                            readOnly 
                            className={this.state.endTime.isValid  || !this.state.endTime.isTouched ? null: "form-error"}/>
                    </div>
                </div>
                <div className="row form-row justify-content-center">
                    <div className="col-12 col-md-2">
                        Description
                    </div>
                    <div className="col-12 col-md-3">
                        <input value={this.props.description} type="text" onChange={(ev) => this.onTodoChanged("description", ev.target.value)}
                            className={this.state.description.isValid  || !this.state.description.isTouched ? null: "form-error"}
                        />
                    </div>
                </div>
                <div className="row form-row justify-content-center">
                    <div className="col-12 col-md-5">
                        <input type="button" onClick={ () => {this.props.onSubmit(); this.onSubmit()} } value="add todo" disabled={!this.state.isValid}/>
                    </div>
                </div>
            </div>
        )
    }

    onSubmit(){
        this.setState(Object.assign({}, this.state, {isValid: false }))
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
                                 isValid: value != null && value !== "",
                                 isTouched: true
                             }
                        )
                break;
            default:
                break;
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
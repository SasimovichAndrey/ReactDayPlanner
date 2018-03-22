import React, { Component } from 'react'
import moment from 'moment'

export default class AddTodoForm extends Component{
    render(){
        return(
            <div>
                Start date <input value={this.props.startTime} type="text"  onChange={(ev) => this.onTodoChanged("startTime", ev.target.value)}/><br/>
                End date <input value={this.props.endTime} type="text"  onChange={(ev) => this.onTodoChanged("endTime", ev.target.value)}/><br/>
                Description <input value={this.props.description} type="text"  onChange={(ev) => this.onTodoChanged("description", ev.target.value)}/><br/>
                <input type="button" onClick={ () => this.props.onSubmit() } value="add todo"/>
            </div>
        )
    }

    onTodoChanged(propName, value){
        this.props.onTodoChanged(propName, value);
    }
}
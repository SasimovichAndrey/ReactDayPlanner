import React, { Component } from 'react'
import moment from 'moment'

export default class AddTodoForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            startDate: "",
            endDate: "",
            description: ""
        }
    }

    onSubmit(){
        var newTodo = {
            startTime: moment(this.state.startDate),
            endTime: moment(this.state.endDate),
            description: this.state.description
        }

        this.props.onSubmit(newTodo);
    }

    render(){
        return(
            <div>
                Start date <input value={this.state.startDate} type="text"  onChange={(ev) => this.setState({startDate: ev.target.value})}/><br/>
                End date <input value={this.state.endDate} type="text"  onChange={(ev) => this.setState({endDate: ev.target.value})}/><br/>
                Description <input value={this.state.description} type="text"  onChange={(ev) => this.setState({description: ev.target.value})}/><br/>
                <input type="button" onClick={ () => this.onSubmit() } value="add todo"/>
            </div>
        )
    }
}
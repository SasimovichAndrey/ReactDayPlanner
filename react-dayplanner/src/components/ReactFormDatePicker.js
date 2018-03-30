import React, {Component} from 'react'
import {Field, Message} from 'react-form'
import moment from 'moment'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

export default class ReactFormDatePicker extends Component{
    render(){
        return (
            <Field field={this.props.field}>
                {fieldApi => {
                    const { onChange, onBlur, field, ...rest } = this.props
                    const { value, error, warning, success, setValue, setTouched } = fieldApi
                    debugger
                    return (
                        <div>
                            <DatePicker 
                                selected={moment(value)}
                                onChange={date => {
                                    setValue(date)
                                    if (onChange) {
                                        onChange(date)
                                    }
                                }}
                                onBlur={e  => {
                                    setTouched()
                                    if (onBlur) {
                                        onBlur(e)
                                    }
                                }}
                            />
                            {error ? <Message color="red" message={error} /> : null}
                            {!error && warning ? <Message color="orange" message={warning} /> : null}
                            {!error && !warning && success ? <Message color="green" message={success} /> : null}
                        </div>
                        )
                    }
                }
            </Field>
        )
    }
}
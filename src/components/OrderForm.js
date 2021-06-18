//Created a component for my order form
import React from 'react'

export default function OrderForm(props) {
    const { values, change, errors } = props

    //create a function to handle the onChange event for the inputs
    const onChange = evt => {
        const { name, value } = evt.target
        change(name, value)
    }

    return (
        <form id='pizza-form'> {/*A form with an id of 'pizza-form'*/}
            <div className='errors'> {/*Display the validation errors */}
                <div>{errors.name}</div>
            </div>
            <label>Name:
                <input id='name-input' name='name' type='text' value={values.name} onChange={onChange}/> {/*A name text input field with an id of 'name-input' */}
            </label>
        </form>
    )
}

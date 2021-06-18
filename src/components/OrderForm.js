//Created a component for my order form
import React from 'react'

export default function OrderForm(props) {
    const { values, change } = props

    //create a function to handle the onChange event for the inputs
    const onChange = evt => {
        const { name, value } = evt.target
        change(name, value)
    }

    return (
        <form id='pizza-form'>
            
        </form>
    )
}

//Created a component for my order form
import React from 'react'

export default function OrderForm(props) {
    const { values, change, errors, submit } = props

    //create a function to handle the onChange event for the inputs
    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type ==='checkbox' ? checked : value //fixed onChange function to work with checkboxes
        change(name, valueToUse)
    }

    //create a function that on submit prevents the default page refresh of a form submitting and submits the information
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}> {/*A form with an id of 'pizza-form'*/}
            <div className='errors'> {/*Display the validation errors */}
                <div>{errors.name}</div>
            </div>

            <label>Name:
                <input id='name-input' name='name' type='text' value={values.name} onChange={onChange}/> {/*A name text input field with an id of 'name-input' */}
            </label>

            <label>Size:
                <select id='size-dropdown' name='size' value={values.size} onChange={onChange}> {/*A dropdown with an id of 'size-dropdown*/}
                    <option value=''>-Select a Size-</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>

            <label>Toppings: {/*Checkboxes for at least 4 toppings*/}
                <label>Cheese
                    <input type='checkbox' name='cheese' checked={values.cheese} onChange={onChange}/>
                </label>
                <label>Pepperoni
                    <input type='checkbox' name='pepperoni' checked={values.pepperoni} onChange={onChange}/>
                </label>
                <label>Sausage
                    <input type='checkbox' name='sausage' checked={values.sausage} onChange={onChange}/>
                </label>
                <label>Vegetable
                    <input type='checkbox' name='vegetable' checked={values.vegetable} onChange={onChange}/>
                </label>
            </label>

            <label>Special Instructions:
                <input id='special-text' name='special' type='text' value={values.special} onChange={onChange}/> {/*A text input for special instructions with an id of 'special-text'*/}
            </label>

            <button id='order-button'>Add to Order</button> {/*An Add to Order button with an id of 'order-button'*/}
        </form>
    )
}

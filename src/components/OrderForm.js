//Created a component for my order form
import React from 'react'

export default function OrderForm(props) {
    const { values, change, errors } = props

    //create a function to handle the onChange event for the inputs
    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type ==='checkbox' ? checked : value //fixed onChange function to work with checkboxes
        change(name, valueToUse)
    }

    return (
        <form id='pizza-form'> {/*A form with an id of 'pizza-form'*/}
            <div className='errors'> {/*Display the validation errors */}
                <div>{errors.name}</div>
            </div>

            <label>Name:
                <input id='name-input' name='name' type='text' value={values.name} onChange={onChange}/> {/*A name text input field with an id of 'name-input' */}
            </label>

            <label>Size:
                <select id='size-dropdown' name='size' value={values.size} onChange={onChange}>
                    <option value=''>-Select a Size-</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>

            <label>Toppings:
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
                <input id='special-text' name='special' type='text' value={values.special} onChange={onChange}/>
            </label>
        </form>
    )
}

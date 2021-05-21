import React from 'react'

export default function PizzaForm(props) {
    const {values, submit, change, disabled, errors} = props

    const onSubmit= evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value, checked, type} = evt.target
        const valueToUse = type ==='checkbox' ? checked: value
        change(name, valueToUse)
    }
    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <div className='group submit'>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.special}</div>
                </div>
                <button disabled={disabled}>submit</button>
            </div>

            <div className='group inputs'>
                <label>name
                    <input 
                    value={values.name}
                    onChange={onChange}
                    id='name'
                    type='text'
                    />
                </label>

                <label> Size
                    <select onChange={onChange} value={values.size} name='size'>
                        <option value=''>--Select a size--</option>
                        <option value='small'>Small</option>
                        <option value='small'>Medium</option>
                        <option value='small'>Large</option>
                    </select>
                </label>
                <div className='group checkboxes'>
                    <h3>Toppings</h3>
                    <label>Cheese
                        <input type='checkbox' name=''/>
                    </label>
                </div>
            </div>
        </form>
    )
}

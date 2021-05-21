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
            <div className='group-submit'>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.special}</div>
                </div>
            </div>

            <div className='name-input'>
                <label>Name:
                    <input 
                    value={values.name}
                    onChange={onChange}
                    id='name-input'
                    type='text'
                    />
                </label>

                <label> Size
                    <select onChange={onChange} value={values.size} id='size-dropdown'>
                        <option value=''>--Select a size--</option>
                        <option value='small'>Small</option>
                        <option value='small'>Medium</option>
                        <option value='small'>Large</option>
                    </select>
                </label>
                <div className='group-checkboxes'>
                    <h3>Toppings:</h3>
                    <label>Cheese
                        <input type='checkbox' name='cheese' checked={values.cheese} onChange={onChange}/>
                    </label>
                    <label>Pepperoni
                        <input type='checkbox' name='pepperoni' checked={values.pepperoni} onChange={onChange}/>
                    </label>
                    <label>BBQ Chicken
                        <input type='checkbox' name='bbqchicken' checked={values.bbqchicken} onChange={onChange}/>
                    </label>
                    <label>Sausage
                        <input type='checkbox' name='sausage' checked={values.sausage} onChange={onChange}/>
                    </label>                   
                </div>
                <div className='special-input'>
                    <label>Special Instructions:
                        <input type='text' id='special-text' value={values.special} onChange={onChange} />
                    </label> 
                </div>
                <div>
                    <button disabled={disabled}>submit</button>
                </div>
            </div>
        </form>
    )
}

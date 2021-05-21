import React from 'react'

export default function PizzaForm(props) {
    const {values, submit, change, disabled, errors} = props

    const onSubmit= evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
        // console.log('event target: \n', evt.target)
    }
    
    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <div className='Order-top'>
                <h2>Place an Order</h2>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.special}</div>
                </div>
            </div>

            <div className='form-input'>
                <label>Name:
                    <input 
                    value={values.name}
                    onChange={onChange}
                    id='name-input'
                    name='name'
                    type='text'
                    />
                </label>

                <label> Size
                    <select onChange={onChange} value={values.size} id='size-dropdown' name='size'>
                        <option value=''>--Select a size--</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                <div className='group-checkboxes'>
                    <h3>Toppings:</h3>

                    <label>Cheese
                        <input type='checkbox' name='cheese' checked={values.cheese} onChange={onChange}/>
                    </label>

                    <label>Pepperoni
                        <input type='checkbox' name='pepperoni' checked={values.pepperoni} value={values.pepperoni[0]} onChange={onChange}/>
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
                        <input type='text' id='special-text' name='special' onChange={onChange} />
                    </label> 
                </div>
                <div>
                    <button disabled={disabled} id='order-button'>submit</button>
                </div>
            </div>
        </form>
    )
}

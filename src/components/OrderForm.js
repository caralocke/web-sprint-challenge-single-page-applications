//Created a component for my order form
import React from 'react'
import styled from 'styled-components' //Imported styled
import img from '../images/pizzaShopBackground.jpg'

const StyledFormContainer = styled.form`
    width: 65%;
    height: 800px;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    align-items: center;
`
const StyledForm = styled.div`
    background-color: bisque;
    font-family: 'Times New Roman';
    font-size: 1.2rem;
    display:flex;
    flex-direction:row;
    padding: 5%;
    margin-top: 50px;
`

const StyledInputs = styled.div `
    display:flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 50%;

    &.checkboxes {
        display:flex;
        flex-direction: row;
    }
`

const StyledButton = styled.button`
  background-color: ${({theme}) => theme.primaryColor};
  color: ${({theme}) => theme.secondaryColor};
  font-weight: bold;
  font-size: 14px;
  -webkit-text-stroke-width: .3px;
  -webkit-text-stroke-color: orange;

  &:disabled {
    color:maroon;
    background-color: darkgray;
    border: 2px solid maroon;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${({theme}) => theme.tertiaryColor};
    -webkit-text-stroke-width: .5px;
    -webkit-text-stroke-color: ${({theme}) => theme.primaryColor};
  }
`
const StyledErrors = styled.div`
    color: ${({theme}) => theme.tertiaryColor};
`

export default function OrderForm(props) {
    const { values, change, errors, submit, disabled } = props

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
        <StyledFormContainer id='pizza-form' onSubmit={onSubmit}> {/*A form with an id of 'pizza-form'*/}
            <StyledForm>
                <StyledInputs>
                    <div className='errors'> {/*Display the validation errors */}
                        <StyledErrors>{errors.name}</StyledErrors>
                        <StyledErrors>{errors.size}</StyledErrors>
                    </div>

                    <label>Name:
                        <input id='name-input' name='name' placeholder='Enter Name' type='text' value={values.name} onChange={onChange}/> {/*A name text input field with an id of 'name-input' */}
                    </label>
                    <br></br>
                    <label>Size:
                        <select id='size-dropdown' name='size' value={values.size} onChange={onChange}> {/*A dropdown with an id of 'size-dropdown*/}
                            <option value=''>-Select a Size-</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>
                    <br></br>
                

                    <label>Special Instructions:
                        <input id='special-text' name='special' placeholder='Any special requests?' type='text' value={values.special} onChange={onChange}/> {/*A text input for special instructions with an id of 'special-text'*/}
                    </label>
                </StyledInputs>

                <StyledInputs className='checkboxes'>
                    <label>Toppings: {/*Checkboxes for at least 4 toppings*/}
                        <div>
                            <label>Cheese
                                <input type='checkbox' name='cheese' checked={values.cheese} onChange={onChange}/>
                            </label>
                        </div>
                        <div>
                            <label>Pepperoni
                                <input type='checkbox' name='pepperoni' checked={values.pepperoni} onChange={onChange}/>
                            </label>
                        </div>
                        <div>
                            <label>Sausage
                                <input type='checkbox' name='sausage' checked={values.sausage} onChange={onChange}/>
                            </label>
                        </div>
                        <div>
                        <label>Vegetable
                            <input type='checkbox' name='vegetable' checked={values.vegetable} onChange={onChange}/>
                        </label>
                        </div>
                    </label>
                </StyledInputs>
            </StyledForm>
                <div>
                    <StyledButton disabled={disabled} id='order-button'>Add to Order</StyledButton> {/*An Add to Order button with an id of 'order-button'*/}
                </div>
        </StyledFormContainer>
    )
}

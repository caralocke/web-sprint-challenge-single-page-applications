//Created a component for the home page
import React from 'react'
import { useHistory } from 'react-router-dom' //imported useHistory
import styled from 'styled-components' //Imported styled
import img from '../images/pizzaShopBackground.jpg' //Imported the background image I want to use

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image:url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const Styledh2 = styled.h2`
    color: ${({theme}) => theme.primaryColor};
    background-color: ${({theme}) => theme.black};
    border: 1px dotted ${({theme}) => theme.tertiaryColor};
    border-radius: 5px;
    -webkit-text-stroke-width: .5px;
    -webkit-text-stroke-color: orange;

    transition: all 0.2s ease-in-out;

    &:hover {
        color: ${({theme}) => theme.tertiaryColor};
        border: 1px solid ${({theme}) => theme.tertiaryColor};
        transform: scale(1.1);
    } 
`

const StyledImage = styled.img`
    width: 400px;
    border-radius: 50%;

    &:hover{
        border: 5px ridge ${({theme}) => theme.tertiaryColor};
    }
`

const StyledButton = styled.button`
  background-color: ${({theme}) => theme.primaryColor};
  color: ${({theme}) => theme.secondaryColor};
  font-weight: bold;
  font-size: 14px;
  -webkit-text-stroke-width: .5px;
  -webkit-text-stroke-color: orange;

  &:hover {
    background-color: ${({theme}) => theme.tertiaryColor};
    -webkit-text-stroke-width: .5px;
    -webkit-text-stroke-color: ${({theme}) => theme.primaryColor};
    transform: scale(1.1);
  }
`

export default function Home() {
    const history = useHistory()

    //create a function to use useHistory to route to the order form
    const Order = () => {
        history.push('/pizza')
    }

    return (
        <StyledHome>
            <Styledh2>Hand made, from the heart ♥</Styledh2>
            <StyledImage src='https://images.pexels.com/photos/2180874/pexels-photo-2180874.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' alt='hand made'></StyledImage>
            <StyledButton onClick={Order}>Place an Order</StyledButton>
        </StyledHome>
    )
}

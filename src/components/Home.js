//Created a component for the home page
import React from 'react'
import { useHistory } from 'react-router-dom' //imported useHistory

export default function Home() {
    const history = useHistory()
    //create a function to use useHistory to route to the order form
    const Order = () => {
        history.push('/pizza')
    }

    return (
        <div>
            <h2>Hand made, from the heart ♥</h2>
            <img src='https://images.pexels.com/photos/2180874/pexels-photo-2180874.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' alt='hand made'></img>
            <button onClick={Order}>Place an Order</button>
        </div>
    )
}

import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Home(props) {
    console.log('home props: \n', props)

    const history = useHistory()

    const routeToOrder = () => {
        history.push('/pizza')
    }
    return (
        <div className='home-wrapper'>
            <img className='home-img' src='https://images.pexels.com/photos/4773769/pexels-photo-4773769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='pizza'/>
            <button className='order-button' onClick={routeToOrder}>Order now!</button>            
        </div>
    )
}

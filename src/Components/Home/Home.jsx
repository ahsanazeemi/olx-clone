import React from 'react'
import Header from './Home_Components/Header'
import Header_Nav from './Home_Components/Header_Nav'
import olx_home from '../../Images/olx_home.jpg'
import Comp from './Home_Components/Components'
import Footer from './Home_Components/Footer'

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Header_Nav />
                <img src={olx_home} className='olx_home_image' />
                <Comp />
                <Footer />
            </div>
        )
    }
}
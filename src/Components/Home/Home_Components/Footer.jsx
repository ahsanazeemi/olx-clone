import React from 'react'
import Footer_Nav from './Footer_Components/footer_nav'
import Footer_Copyright from './Footer_Components/footer_copyright'

export default class Footer extends React.Component{
    render(){
        return(
            <div>
                <Footer_Nav />
                <Footer_Copyright />
            </div>
        )
    }
}
import React from 'react'

export default class Footer_Copyright extends React.Component{
    render(){
        return(
            <div className='footer_copyright' >
                <div className='footer_copyright_left'>
                    <b>Other Countries </b> &nbsp; &nbsp; &nbsp;<span>India</span>-<span>South Africa</span>-<span>Indonesia</span>
                </div>
                <div className='footer_copyright_right'>
                    <b>Free Classifieds in Pakistan</b> &nbsp;
                    &#169; 2006-2020 OLX
                </div>
            </div>
        )
    }
}
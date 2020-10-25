import React from 'react'
import {
    Link
  } from "react-router-dom";
export default class Header_Nav extends React.Component{
    render(){
        return(
            <div className='header_nav'>
                <span className='header_nav_spans'><Link className='link' to='/mobile-phones' >Mobile Phones</Link></span> 
                <span className='header_nav_spans'><Link className='link' to='/cars' >Cars</Link></span> 
                <span className='header_nav_spans'><Link className='link' to='/bikes' >Motercycles</Link></span> 
                <span className='header_nav_spans'><Link className='link' to='/lands-and-plots' >Houses</Link></span> 
                <span className='header_nav_spans'><Link className='link' to='/tv-and-audio' >TV-Audio-Video</Link></span> 
                <span className='header_nav_spans'><Link className='link' to='/tablets' >Tablets</Link></span> 
                <span className='header_nav_spans'><Link className='link' to='/lands-and-plots' >Land and Plots</Link></span> 
            </div>
        )
    }
}
import React from 'react'
import bike_1 from '../../../../Images/bike_1.jpg'
import bike_2 from '../../../../Images/bike_2.jpg'
import bike_3 from '../../../../Images/bike_3.jpg'
import bike_4 from '../../../../Images/bike_4.jpg'
import Header from '../Header'
import Footer from '../Footer'
import Header_Nav from '../Header_Nav'
import olx_home from '../../../../Images/olx_home.jpg'
import {
    Link
  } from "react-router-dom";

 export default class Bike_Ads extends React.Component{

     render(){

         return(
             <div className='ext2'>
                 {this.props.show ==='false' ?
                     void(0)
                 :
                 <div>
                        <Header />
                        <Header_Nav />
                        <img src={olx_home} className='olx_home_image' />
                        </div>
                 }
             <div className='home_divs'>
                 <h1>Bikes Ads in Pakistan</h1>
                 <div><Link to='/ads#00'>
                     <div>
                        <img src={bike_1} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 300,000</h2>
                        <p>First Condotion Racing Bike for Sale</p>
                        <h5>TODAY</h5>
                        </div>
                        
                     </div></Link><Link to='/ads#01'>
                     <div >
                        <img src={bike_2} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 380,000</h2>
                        <p>Fast Motor Racing and Heavy Engine Bike for Sale</p>
                        <h5>5 OCT</h5>
                        </div>
                     </div></Link><Link to='/ads#02'>
                     <div  >
                        <img src={bike_3} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 260,000</h2>
                        <p>Normal Heavy Motor Bike for Sale</p>
                        <h5>YESTERDAY</h5>
                        </div>
                     </div></Link><Link to='/ads#03'>
                     <div  >
                        <img src={bike_4} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 70,000</h2>
                        <p>Simple AMD + Normal Bike for Sale</p>
                        <h5>21 MAR</h5>
                        </div>
                     </div></Link>
                 </div>
             </div>
             {this.props.show ==='false' ?
                     void(0)
                 :
                        <Footer />
                 }
             </div>
         )
     }
 }
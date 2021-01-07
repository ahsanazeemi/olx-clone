import React from 'react'
import home_1 from '../../../../Images/home_1.jpeg'
import home_2 from '../../../../Images/home_2.jpg'
import home_3 from '../../../../Images/home_3.jpeg'
import home_4 from '../../../../Images/home_4.jpg'
import Header from '../Header'
import Footer from '../Footer'
import Header_Nav from '../Header_Nav'
import olx_home from '../../../../Images/olx_home.jpg'
import {
    Link
  } from "react-router-dom";

 export default class House_Ads extends React.Component{
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
                 <h1>House for Rent and Sale Ads in Pakistan</h1>
                 <div><Link className='top_link' to='/ads#40'>
                     <div >
                        <img src={home_1} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 10,000,000</h2>
                        <p>8 Marla Commercial House DHA for Sale</p>
                        <h5>18 SEP</h5>
                        </div>
                     </div></Link><Link to='/ads#41'>
                     <div >
                        <img src={home_2} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 80,00,000</h2>
                        <p>500 Yards Commercial House Baldia Town for Sale</p>
                        <h5>8 FEB</h5>
                        </div>
                     </div></Link><Link to='/ads#42'>
                     <div  >
                        <img src={home_3} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 12,000,000</h2>
                        <p>18 Marla Commercial House Rawalpindi for Sale</p>
                        <h5>30 NOV</h5>
                        </div>
                     </div></Link><Link to='/ads#43'>
                     <div >
                        <img src={home_4} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 10,500,000</h2>
                        <p>1800 Sqft New House Lahore for Sale</p>
                        <h5>31 JUNE</h5>
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
import React from 'react'
import mob_1 from '../../../../Images/mob_1.jpg'
import mob_2 from '../../../../Images/mob_2.jpg'
import mob_3 from '../../../../Images/mob_3.jpg'
import mob_4 from '../../../../Images/mob_4.jpg'
import Header from '../Header'
import Footer from '../Footer'
import Header_Nav from '../Header_Nav'
import olx_home from '../../../../Images/olx_home.jpg'
import {
    Link
  } from "react-router-dom";

 export default class Mobile_Ads extends React.Component{
    show_ad(p){
        console.log(p)
        window.location.href = p
    }
     render(){
         return(
            <div className='ext2'>
            {this.props.show=='false' ?
                console.log('nothing')
            :
            <div>
                   <Header />
                   <Header_Nav />
                   <img src={olx_home} className='olx_home_image' />
                   </div>
            }
             <div className='home_divs'>
                 <h1>Smartphones Ads in Pakistan</h1>
                 <div><Link to='/ads#30'>
                     <div >
                        <img src={mob_1} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 16,000</h2>
                        <p>Infinix note 4 Second Hand Mobile for Sale</p>
                        <h5>8 JUL</h5>
                        </div>
                     </div></Link><Link to='/ads#31'>
                     <div >
                        <img src={mob_2} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 80,000</h2>
                        <p>Huawei Y9 Prime First Hand for Sale</p>
                        <h5>12 DEC</h5>
                        </div>
                     </div></Link><Link to='/ads#32'>
                     <div >
                        <img src={mob_3} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 25,000</h2>
                        <p>2nd Hand Infinix Note 9 Play for Sale</p>
                        <h5>26 NOV</h5>
                        </div>
                     </div></Link><Link to='/ads#33'>
                     <div >
                        <img src={mob_4} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 56,000</h2>
                        <p>Brand New Huawei 6s Pro for Sale</p>
                        <h5>3 MAR</h5>
                        </div>
                     </div></Link>
                 </div>
             </div>
             {this.props.show=='false' ?
                     console.log('nothing')
                 :
                        <Footer />
                 }
             </div>
         )
     }
 }
import React from 'react'
import tv_1 from '../../../../Images/tv_1.jpg'
import tv_2 from '../../../../Images/tv_2.jpg'
import tv_3 from '../../../../Images/tv_3.jpg'
import tv_4 from '../../../../Images/tv_4.jpg'
import Header from '../Header'
import Footer from '../Footer'
import Header_Nav from '../Header_Nav'
import olx_home from '../../../../Images/olx_home.jpg'
import {
    Link
  } from "react-router-dom";

 export default class TV_Ads extends React.Component{

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
                 <h1>TV & Audio Ads in Pakistan</h1>
                 <div><Link to='/ads#50'>
                     <div  >
                        <img src={tv_1} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 22,000</h2>
                        <p>Brand New 28" Samsung LED TV for Sale</p>
                        <h5>18 DEC</h5>
                        </div>
                     </div></Link><Link to='/ads#51'>
                     <div >
                        <img src={tv_2} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 5,000</h2>
                        <p>RGB Brand New Gaming Headphones for Sale</p>
                        <h5>5 JAN</h5>
                        </div>
                     </div></Link><Link to='/ads#52'>
                     <div >
                        <img src={tv_3} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 26,000</h2>
                        <p>Brand New 32" LED for Sale First Hand</p>
                        <h5>3 SEP</h5>
                        </div>
                     </div></Link><Link to='/ads#53'>
                     <div  >
                        <img src={tv_4} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 13,000</h2>
                        <p>Brand New Audionic Speakers for Sale</p>
                        <h5>21 APR</h5>
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
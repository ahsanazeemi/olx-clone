import React from 'react'
import car_1 from '../../../../Images/car_1.jpg'
import car_2 from '../../../../Images/car_2.jpg'
import car_3 from '../../../../Images/car_3.jpg'
import car_4 from '../../../../Images/car_4.jpg'
import Header from '../Header'
import Footer from '../Footer'
import Header_Nav from '../Header_Nav'
import olx_home from '../../../../Images/olx_home.jpg'
import {
    Link
  } from "react-router-dom";

 export default class Car_Ads extends React.Component{
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
                 <h1>Cars Ads in Pakistan</h1>
                 <div ><Link to='/ads#10'>
                     <div >
                        <img src={car_1} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 3,300,000</h2>
                        <p>First Condition Civic 05EPQ2 Car for Sale</p>
                        <h5>18 AUG</h5>
                        </div>
                     </div></Link><Link to='/ads#11'>
                     <div >
                        <img src={car_2} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 450,000</h2>
                        <p>Civic Second Hand New Car for Sale</p>
                        <h5>5 OCT</h5>
                        </div>
                     </div></Link><Link to='/ads#12'>
                     <div >
                        <img src={car_3} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 6,000,000</h2>
                        <p>Black Ferrari New Condition for Sale First Hand</p>
                        <h5>3 NOV</h5>
                        </div>
                     </div></Link><Link to='/ads#13'>
                     <div >
                        <img src={car_4} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 7,500,000</h2>
                        <p>Red Ferra First Hand Condition and Heavy Engine for Sale</p>
                        <h5>21 MAR</h5>
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
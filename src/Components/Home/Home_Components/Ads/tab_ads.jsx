import React from 'react'
import tab_1 from '../../../../Images/tab_1.jpg'
import tab_2 from '../../../../Images/tab_2.jpg'
import tab_3 from '../../../../Images/tab_3.jpg'
import tab_4 from '../../../../Images/tab_4.jpg'
import Header from '../Header'
import Footer from '../Footer'
import Header_Nav from '../Header_Nav'
import olx_home from '../../../../Images/olx_home.jpg'
import {
    Link
  } from "react-router-dom";


 export default class Tab_Ads extends React.Component{
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
                 <h1>Tablets Ads in Pakistan</h1>
                 <div><Link to='/ads#20'>
                     <div >
                        <img src={tab_1} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 25,000</h2>
                        <p>First Condition Samsung A10 Tablet for Sale</p>
                        <h5>19 SEP</h5>
                        </div>
                     </div></Link><Link to='/ads#21'>
                     <div >
                        <img src={tab_2} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 35,000</h2>
                        <p>Brand New Huawei S10 Tablet for Sale</p>
                        <h5>28 FEB</h5>
                        </div>
                     </div></Link><Link to='/ads#22'>
                     <div >
                        <img src={tab_3} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 61,000</h2>
                        <p>Dark Black Brand New QMobile Tablet for Sale</p>
                        <h5>27 JAN</h5>
                        </div>
                     </div></Link><Link to='/ads#23'>
                     <div >
                        <img src={tab_4} className='ad_baner' width='170px' height='120px' />
                        <div>
                        <h2>Rs : 14,000</h2>
                        <p>Apple Tablet New Condition for Sale</p>
                        <h5>1 SEP</h5>
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
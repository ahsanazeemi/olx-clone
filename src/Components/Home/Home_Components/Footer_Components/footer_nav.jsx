import React from 'react'
import app_store from '../../../../Images/appstore.png'
import play_store from '../../../../Images/playstore.png'
import fb from '../../../../Images/fb.png'
import yt from '../../../../Images/yt.png'
import tw from '../../../../Images/tw.png'
import ig from '../../../../Images/ig.png'

export default class Footer_Nav extends React.Component{
    render(){
        return(
            <div className='footer_nav' >
              <div className='single_footer' >
                  <h3>POPULAR CATEGORIES</h3>
                  <ul>
                      <li>Cars</li>
                      <li>Flat for Rents</li>
                      <li>Jobs</li>
                      <li>Mobile Phones</li>
                  </ul>
              </div>
              <div className='single_footer' >
                  <h3>Trending Searches</h3>
                  <ul>
                      <li>Bikes</li>
                      <li>Watches</li>
                      <li>Books</li>
                      <li>Dogs</li>
                  </ul>
              </div>
              <div className='single_footer' >
                  <h3>About us</h3>
                  <ul>
                      <li>About OLX</li>
                      <li>OLX Blog</li>
                      <li>Contact us</li>
                      <li>OLX Business</li>
                  </ul>
              </div>
              <div className='single_footer' >
                  <h3>OLX</h3>
                  <ul>
                      <li>Help</li>
                      <li>OLX Help</li>
                      <li>Sitemap</li>
                      <li>Legal & Privacy Information</li>
                  </ul>
              </div>
              <div className='single_footer' >
                  <h3>FOLLOW US</h3>
                  <p>
                    <img src={fb}  width='25px' />
                    <img src={yt}  width='25px' />
                    <img src={tw}  width='25px' />
                    <img src={ig}  width='25px' />
                  </p>
                  <h3>Available for IOS and Android</h3>
                  <img src={app_store} width='110px' /> &nbsp;<img src={play_store} width='110px' />
              </div>  
            </div>
        )
    }
}
import React from 'react'
import Bike_Ads from './Ads/bike_ads'
import Car_Ads from './Ads/car_ads'
import Tv_Ads from './Ads/tv_ads'
import Tab_Ads from './Ads/tab_ads'
import House_Ads from './Ads/house_ads'
import Mobile_Ads from './Ads/mobile_ads'

export default class Comp extends React.Component{
    render(){
        return(
            <div>
                <h1 className='recom_head' >Fresh Recommendations:</h1>
                <div id='comp_div'>
                    <Bike_Ads show='false' />
                    <Tab_Ads  show='false' />
                    <House_Ads  show='false' />
                    <button className='but1' onClick={(e)=>{
                        document.getElementById('id01').style.display='initial'
                        e.target.remove()
                        }
                    }>Load More</button>
                    <div id='id01' style={{display:'none'}}>
                    <Mobile_Ads show='false'  />
                    <Tv_Ads  show='false' />
                    <Car_Ads  show='false' />
                    </div>
                </div>
            </div>
        )
    }
}
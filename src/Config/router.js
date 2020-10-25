import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from '../Components/Home/Home'
import About from '../Components/Pages/About'
import Mobile_Ads from '../Components/Home/Home_Components/Ads/mobile_ads'
import Car_Ads from '../Components/Home/Home_Components/Ads/car_ads'
import Tab_Ads from '../Components/Home/Home_Components/Ads/tab_ads'
import Tv_Ads from '../Components/Home/Home_Components/Ads/tv_ads'
import House_Ads from '../Components/Home/Home_Components/Ads/house_ads'
import Bike_Ads from '../Components/Home/Home_Components/Ads/bike_ads'


export default class Routers extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/mobile-phones' component={Mobile_Ads} />
                <Route path='/tv-and-audio' component={Tv_Ads} />
                <Route path='/bikes' component={Bike_Ads} />
                <Route path='/tablets' component={Tab_Ads} />
                <Route path='/cars' component={Car_Ads} />
                <Route path='/lands-and-plots' component={House_Ads} />
            </Router>
        )
    }
}
import React from 'react'
import Header from './Home/Home_Components/Header'
import Header_Nav from './Home/Home_Components/Header_Nav'
import bike_1 from '../Images/bike_1.jpg'
import bike_2 from '../Images/bike_2.jpg'
import bike_3 from '../Images/bike_3.jpg'
import bike_4 from '../Images/bike_4.jpg'
import car_1 from '../Images/car_1.jpg'
import car_2 from '../Images/car_2.jpg'
import car_3 from '../Images/car_3.jpg'
import car_4 from '../Images/car_4.jpg'
import mobile_1 from '../Images/mob_1.jpg'
import mobile_2 from '../Images/mob_2.jpg'
import mobile_3 from '../Images/mob_3.jpg'
import mobile_4 from '../Images/mob_4.jpg'
import tab_1 from '../Images/tab_1.jpg'
import tab_2 from '../Images/tab_2.jpg'
import tab_3 from '../Images/tab_3.jpg'
import tab_4 from '../Images/tab_4.jpg'
import house_1 from '../Images/home_1.jpeg'
import house_2 from '../Images/home_2.jpg'
import house_3 from '../Images/home_3.jpeg'
import house_4 from '../Images/home_4.jpg'
import tv_1 from '../Images/tv_1.jpg'
import tv_2 from '../Images/tv_2.jpg'
import tv_3 from '../Images/tv_3.jpg'
import tv_4 from '../Images/tv_4.jpg'

import Bike_Ads from './Home/Home_Components/Ads/bike_ads'
import Car_Ads from './Home/Home_Components/Ads/car_ads'
import Tv_Ads from './Home/Home_Components/Ads/tv_ads'
import Tab_Ads from './Home/Home_Components/Ads/tab_ads'
import House_Ads from './Home/Home_Components/Ads/house_ads'
import Mobile_Ads from './Home/Home_Components/Ads/mobile_ads'
import Footer from './Home/Home_Components/Footer'


export default class Show_Ad extends React.Component{
    render(){
        let arr = [
            [
                {
                name : 'First Condotion Racing Bike for Sale',
                price : 'Rs : 300,000',
                date : 'TODAY',
                image : bike_1,
                imp : Bike_Ads
            },
            {
                name : 'Fast Motor Racing & Heavy Bike for Sale',
                price : 'Rs : 380,000',
                date : '5 OCT',
                image : bike_2,
                imp : Bike_Ads
            },
            {
                name : 'Normal Heavy Motor Bike for Sale',
                price : 'Rs : 260,000',
                date : 'YESTERDAY',
                image : bike_3,
                imp : Bike_Ads
            },
            {
                name : 'Simple AMD + Normal Bike for Sale',
                price : 'Rs : 70,000',
                date : '21 MAR',
                image : bike_4,
                imp : Bike_Ads
            }
        ],
        [
                
            {
                name : 'First Condition Civic 05EPQ2 Car for Sale',
                price : 'Rs : 3,300,000',
                date : '18 AUG',
                image : car_1,
                imp : Car_Ads
            },
            {
                name : 'Civic Second Hand New Car for Sale',
                price : 'Rs : 450,000',
                date : '5 OCT',
                image : car_2,
                imp : Car_Ads
            },
            {
                name : 'Black Ferrari New Condition for Sale',
                price : 'Rs : 6,000,000',
                date : '3 NOV',
                image : car_3,
                imp : Car_Ads
            },
            {
                name : 'Red Ferra First Hand Condition for Sale',
                price : 'Rs : 7,500,000',
                date : '21 MAR',
                image : car_4,
                imp : Car_Ads
            }
        ],
        [
                
            {
                name : 'First Condition Samsung A10 Tablet for Sale',
                price : 'Rs : 250,000',
                date : '19 SEP',
                image : tab_1,
                imp : Tab_Ads
            },
            {
                name : 'Brand New Huawei S10 Tablet for Sale',
                price : 'Rs : 35,000',
                date : '28 FEB',
                image : tab_2,
                imp : Tab_Ads
            },
            {
                name : 'Dark Black QMobile Tablet for Sale',
                price : 'Rs : 61,000',
                date : '27 JAN',
                image : tab_3,
                imp : Tab_Ads
            },
            {
                name : 'Apple Tablet New Condition for Sale',
                price : 'Rs : 14,000',
                date : '1 SEP',
                image : tab_4,
                imp : Tab_Ads
            }
        ],
        [
                
            {
                name : 'Infinix note 4 Second Hand Mobile for Sale',
                price : 'Rs : 16,000',
                date : '8 JUL',
                image : mobile_1,
                imp : Mobile_Ads
            },
            {
                name : 'Huawei Y9 Prime First Hand for Sale',
                price : 'Rs : 80,000',
                date : '12 DEC',
                image : mobile_2,
                imp : Mobile_Ads
            },
            {
                name : '2nd Hand Infinix Note 9 Play for Sale',
                price : 'Rs : 25,000',
                date : '26 NOV',
                image : mobile_3,
                imp : Mobile_Ads
            },
            {
                name : 'Brand New Huawei 6s Pro for Sale',
                price : 'Rs : 56,000',
                date : '3 MAR',
                image : mobile_4,
                imp : Mobile_Ads
            }
        ],
        [
                
            {
                name : '8 Marla New Made House in DHA for Sale',
                price : 'Rs : 1,000,000',
                date : '18 SEP',
                image : house_1,
                imp : House_Ads
            },
            {
                name : '500 Yards House in Baldia Town for Sale',
                price : 'Rs : 800,000',
                date : '8 FEB',
                image : house_2,
                imp : House_Ads
            },
            {
                name : '18 Marla House Rawalpindi for Sale',
                price : 'Rs : 1,200,000',
                date : '30 NOV',
                image : house_3,
                imp : House_Ads
            },
            {
                name : '1800 Sqft New House Lahore for Sale',
                price : 'Rs : 1,050,000',
                date : '3 MAR',
                image : house_4,
                imp : House_Ads
            }
        ],
        [
                
            {
                name : 'Brand New 28" Samsung LED TV for Sale',
                price : 'Rs : 22,000',
                date : '18 DEC',
                image : tv_1,
                imp : Tv_Ads
            },
            {
                name : 'RGB New Gaming Head Phones for Sale',
                price : 'Rs : 5,000',
                date : '5 JAN',
                image : tv_2,
                imp : Tv_Ads
            },
            {
                name : 'Brand New 32" LED SAMSUNG for Sale',
                price : 'Rs : 26,000',
                date : '3 SEP',
                image : tv_3,
                imp : Tv_Ads
            },
            {
                name : 'New Audionic Speakers for Sale',
                price : 'Rs : 13,000',
                date : '21 APR',
                image : tv_4,
                imp : Tv_Ads
            }
        ]
    ]
        let h = (window.location.hash).replace('#','')
        let f = h[0]
        let l = h[1]
        let x =arr[f][l].image
        let Below = arr[f][l].imp
        return(
            <div>
                <Header /> 
                <Header_Nav />
                <div className='main'>
                <div className='show'>
                    <img src={x} />
                </div>
                <div className='ad_details' >
                    <h1>{arr[f][l].name}</h1>
                    <h2><b>{arr[f][l].price}</b></h2>
        <h3>Date : <b>{arr[f][l].date}</b></h3>
                    <h3>Seller Name : OLX</h3>
                    <p>Verified by <b>OLX</b></p>
                    <p>Chat with Seller : +923011234567</p>
                </div>
                
                
                
                </div>
        <Below show='false' />
        <Footer />
            </div>
        )
    }
}
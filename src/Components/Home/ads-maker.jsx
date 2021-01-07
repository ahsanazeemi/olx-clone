import React from 'react'
import Header from './Home_Components/Header'
import Header_Nav from './Home_Components/Header_Nav'
import Footer from './Home_Components/Footer'
import { connect } from 'react-redux'
import { postAd } from '../../store/action'

class Ads_Maker extends React.Component {
    constructor() {
        super()
        window.onload = () => {
            localStorage.getItem('login') != 'true' ?
                window.location.href = '/'
                :
                void (0)
        }
        this.state = {
            productNameState: '',
            productDesState: '',
            productImageState: '',
            productPriceState: '',
            productPlaceState: '',
            productCategoryState: '',
            productContactState: '',
        }
    }
    render() {
        // Date
        var now = new Date()
        var todayDate = now.getDate()
        var nowMonth = now.getMonth()
        var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
        var todayMonth = months[nowMonth]
        var todayFullDate = `${todayDate} ${todayMonth}`

        return (
            <div>
                <Header />
                <Header_Nav />
                <img className='olx-ads-logo' width='200' height='200' src='https://cdn2.iconfinder.com/data/icons/mixd/512/23_OLX-512.png' />
                <div className='ads-maker-div' id='post-ad' >
                    <h1>Post your Ads now!</h1>
                    <span className='span-1'>*Fill information accordingly; Your data will be kept safe!</span>
                    <div className="main-ads-maker">

                        <label  >Product Name: </label>
                        <input placeholder='e.g: Core i9 3rd Generation Laptop for; Words Limit: 200' type='text'
                        onChange={(e)=>{
                            this.setState({
                                productNameState: e.target.value
                            })
                        }} 
                        />
                        <br />
                        <label  >Product Description: </label>
                        <input placeholder='e.g: Good for Gaming,Softwares,Video Editing, etc; Words Limit: 250 ' type='text'
                        onChange={(e)=>{
                            this.setState({
                                productDesState: e.target.value
                            })
                        }} 
                        />
                        <br />
                        <label  >Product Price: </label>
                        <input min='10' max='100000000' type='number' placeholder='Minimum 10 and Maximum 100000000 PKR' 
                        onChange={(e)=>{
                            this.setState({
                                productPriceState: e.target.value
                            })
                        }} 
                        />
                        <br />
                        <label  >Product Image URL: </label>
                        <input type='text' placeholder='e.g: https://www.google.com/example.png' 
                        onChange={(e)=>{
                            this.setState({
                                productImageState: e.target.value
                            })
                        }} 
                        />
                        <br />
                        <label  >Product Place: </label>
                        <input type='text' placeholder='e.g: Karachi' 
                        onChange={(e)=>{
                            this.setState({
                                productPlaceState: e.target.value
                            })
                        }} 
                        />
                        <br />
                        <label  >Date: </label>
                        <input disabled value={todayFullDate} type='text' />
                        <br />
                        <label  >Product Category: </label>
                        <select onChange={(e)=>{
                            this.setState({
                                productCategoryState: e.target.value
                            })
                        }} >
                            <option selected disabled>Please Choose your Category</option>
                            <option>Mobiles</option>
                            <option>Tablets</option>
                            <option>Houses</option>
                            <option>Bikes</option>
                            <option>T.V and LED's</option>
                            <option>Cars and Vehicles</option>
                        </select>
                        <br />
                        <label  >Seller Name: </label>
                        <input disabled value={localStorage.getItem('userName')} type='text' />
                        <br />
                        <label  >Seller Contact no: </label>
                        <input type='number' placeholder='e.g: 03151234567' 
                        onChange={(e)=>{
                            this.setState({
                                productContactState: e.target.value
                            })
                        }} 
                        />
                        <br />
                        <label>Seller Email Address: </label>
                        <input disabled value={localStorage.getItem('userMail')} type='text' />
                        <br />

                        <div className="ad-buttons">
                            <span id='ad-error' className='span-2'>
                                <span>
                                There is something wrong with Your request. Please fill the form again!</span>
                            <br />
                            <div style={{
                                textAlign: 'left',
                                fontSize: 12,
                                color: '#002F34'
                            }}>
                            <div>*Product Name should be greater than 10 words and smaller than 200 words.</div>
                            <div>*Product Description should be greater than 20 words and smaller than 250 words.</div>
                            <div>*Product Price should be greater than 10 PKR and smaller than 100000000 PKR.</div>
                            <div>*Product Image URL should be a valid URL and contain .png, .jpeg, .eps, .jpg in the end.</div>
                            <div>*Product Place should be greater than 2 words and smaller than 100 words.</div>
                            <div>*Product Category should be selected.</div>
                            <div>*Seller Contact Number should be written in Pakistani Pattern e.g: '03181236267'.</div>
                            </div>
                            
                            </span>
                            

                            <button className='cancel-ad-button' onClick={() => {
                                window.location.reload()
                            }} >Cancel</button> &nbsp; <button className='post-ad-button' onClick={()=>this.props.post_Ad(
                                this.state.productNameState,
                                this.state.productDesState,
                                this.state.productPriceState,
                                this.state.productImageState,
                                this.state.productPlaceState,
                                todayFullDate,
                                this.state.productCategoryState,
                                this.state.productContactState,
                                )} >Post Ad</button>
                        </div>
                    </div>
                </div>
                <div className='ads-maker-div-pending' id='pending' >
                    <i className="fas fa-exclamation-triangle"></i>
                    <h1>Your Ad is pending for Approval!</h1>
                    <p>We have received your Ad. Once Our Team will review it according to Cyber Laws; We will post it immediately. </p>
                    <p>Remeber: If your Ad contain Illegal things, So we dont only remove it but also inform FIA too.</p>
                    <h2>Thanks for understanding!</h2>
                </div>                
                <Footer />
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>({
    post_Ad: (a,b,c,d,e,f,g,i)=>dispatch(postAd(a,b,c,d,e,f,g,i))
})

export default connect(null, mapDispatchToProps)(Ads_Maker);
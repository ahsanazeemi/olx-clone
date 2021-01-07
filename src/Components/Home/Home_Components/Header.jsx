import React from 'react'
import Logo from '../../../Images/olx_logo.png'
import Search_Logo from '../../../Svg/search-solid.svg'
import Add_Solid from '../../../Svg/plus-solid.svg'
import * as firebase from 'firebase';
import { connect } from 'react-redux'
import { fbLogin } from '../../../store/action'
import {
  Link
} from "react-router-dom";

class Header extends React.Component {
  render() {
    
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={Logo} height='38px' />
        </a>

        <select className='select-input' onClick={(e) => {
          e.target.style.border = '3px solid cyan'
        }} onBlur={(e) => {
          e.target.style.border = '3px solid #002F34'
        }} >
          <option value='pak' disabled value='selected' > Pakistan</option>
          <option value='sindh' >Sindh</option>
          <option value='punjab'>Punjab</option>
          <option value='kpk'>KPK</option>
          <option value='baloch'>Balochistan</option>
        </select>&nbsp; &nbsp;

        <input className='input-text' type="text" placeholder='Find Cars, Mobile Phones and more...' />
        <button className='input-but' ><img src={Search_Logo} height='25px' /></button>&nbsp;

        {localStorage.getItem('login') == 'true' ? <span>
        <Link className="nav-link minus" to='/ads-maker' ><button><img src={Add_Solid} height='20px' /> SELL</button></Link>
          </span> : 
          
          <a className="nav-link up login-link"  onClick={()=>this.props.fb_Login()}  href={void(0)}>Login<span className="sr-only">(current)</span></a>
           }
        &nbsp;
        {localStorage.getItem('login') == 'true' ? 
        <img className='login_img' src={localStorage.getItem('userPhoto')} width='48' height='48' /> : 
         <a onClick={()=>this.props.fb_Login()} className="nav-link plus" href={void(0)}><button><img src={Add_Solid} height='20px' /> SELL</button></a>}
        
        

      </nav>
      {localStorage.getItem('login') == 'true' ? <button className='logout_button' onClick={()=>{
        localStorage.clear()
        window.location.reload()
        window.location.href = '/'
      }}><i className="fas fa-sign-out-alt"></i> &nbsp;Logout</button> : void(0)}
      
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  userName : state.login.userName,
  userPhoto : state.login.userPhoto,
  userMail : state.login.userMail
})

const mapDispatchToProps = (dispatch) => ({
  fb_Login: ()=>dispatch(fbLogin())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
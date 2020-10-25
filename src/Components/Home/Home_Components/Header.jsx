import React from 'react'
import Logo from '../../../Images/olx_logo.png'
import Search_Logo from '../../../Svg/search-solid.svg'
import Add_Solid from '../../../Svg/plus-solid.svg'
import * as firebase from 'firebase';

class Header extends React.Component{
    fb_login=()=>{
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user)
      }).catch(function(err) {
        console.log(err)
        // ...
      });
    }

  render(){
    return(
      <nav  className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={Logo}  height='38px' />
        </a>

        <select className='select-input' onClick={(e)=>{
          e.target.style.border='3px solid cyan'
        }} onBlur={(e)=>{
          e.target.style.border='3px solid #002F34'
        }} >
        <option disabled defaultValue selected> Pakistan</option>
          <option>Sindh</option>
          <option>Punjab</option>
          <option>KPK</option>
          <option>Balochistan</option>
        </select>&nbsp; &nbsp; 

        <input className='input-text' type="text" placeholder='Find Cars, Mobile Phones and more...' />
        <button className='input-but' ><img src={Search_Logo} height='25px' /></button>&nbsp;
        
              <a className="nav-link up" href="#">Login<span className="sr-only">(current)</span></a>
&nbsp;
              <a onClick={this.fb_login} className="nav-link plus" href="#"><button><img src={Add_Solid} height='20px' /> SELL</button></a>
              
      </nav>
    )
    }
}

export default Header;
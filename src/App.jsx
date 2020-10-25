import React from 'react'
import {firebase_init} from './Config/firebase'
import Routers from './Config/router'
import './index.css'

class App extends React.Component{
  constructor(){
    super()
    firebase_init()
  }
  render(){
    return(
      <Routers />
    )
  }
}
export default App;
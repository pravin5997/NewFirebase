import React, { Component } from 'react'
import fire from './config/Fire'
import Main from './Main'
import { database } from 'firebase'
// import SideBar from './Sidebar'


export default class App extends Component {
  
  render() {
 
    return (
      <div className="App">
       <Main />
       {/* <SideBar /> */}
      </div>
    );
  }
}


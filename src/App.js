import React, { Component } from 'react'
import fire from './config/Fire'
import Main from './Main'
import { database } from 'firebase'
// import SideBar from './Sidebar'
import MyDetail from './Form'
import Notification from './Notification'


export default class App extends Component {
  
  render() {
 
    return (
      <div className="App">
       <Main />
       {/* <Notification /> */}
       {/* <MyDetail /> */}
       {/* <SideBar /> */}
      </div>
    );
  }
}


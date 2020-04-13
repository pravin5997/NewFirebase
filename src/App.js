import React, { Component } from 'react'
import fire from './config/Fire'
import Main from './Main'
import { database } from 'firebase'
// import SideBar from './Sidebar'
import MyDetail from './Form'


export default class App extends Component {
  
  render() {
 
    return (
      <div className="App">
       <Main />
       {/* <MyDetail /> */}
       {/* <SideBar /> */}
      </div>
    );
  }
}


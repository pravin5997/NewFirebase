import React, { Component } from 'react'
import fire from './config/Fire'
import Main from './Main'
import { database } from 'firebase'



export default class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     userData:{}
  //   }
  // }
  // componentDidMount (){
  //   this.authListener();
  // }

  // authListener(){
  //   fire.auth().onAuthStateChanged((user)=>{
  //     if(user){
  //       const uid = user.uid;
  //      fire.database().ref("/user/"+ uid).once("value")
  //      .then((snapshot) =>{
  //        const userObect = snapshot.val();
  //        this.setState({userData:userObect})
  //      })
  //     }else{
  //    console.log("not login")
       
       
  //     }
  //   })
  // }

  render() {
 
    return (
      <div className="App">
       <Main />
      </div>
    );
  }
}


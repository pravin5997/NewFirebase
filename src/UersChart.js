import React from 'react';
import {Line} from 'react-chartjs-2';
import fire from './config/Fire'

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May',"Jun","July","August","september","November","december"],
  datasets: [
    {
      label: 'Total Leave',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [2,3,4,2,0,7,5,6,2,0,1,2]
    }
  ]
}

export default class UersChart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userData:{}
        }
    }
    componentDidMount () {
        fire.auth().onAuthStateChanged((user)=>{
            const uid = user.uid;
       fire.database().ref("/userData/"+ uid).once("value")
       .then((snapshot) =>{
         const userObect = snapshot.val();
         this.setState({
                    userData:userObect,
                   
                    })
       })
        })
    }
  render() {
      
    return (
      <div style={{height:"200px"}}>
        <Line
        height="100px"
          data={state}
          options={{
            title:{
              display:true,
              text:'Total Leave per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
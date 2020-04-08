import React from 'react';
import {Line} from 'react-chartjs-2';
import fire from './config/Fire'
import {Col} from 'react-bootstrap'

export default class UersChart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userData:{},
            January:0,
            February:0,
            March:0,
            April:0,
            May:0,
            June:0,
            July:0,
            August:0,
            September:0,
            October:0,
            November:0,
            December:0,
            chartData: {
              labels: ['January', 'February', 'March',
                       'April', 'May',"June","July","August","September","October","November","December"],
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
        }
    }
    componentDidMount () {
        fire.auth().onAuthStateChanged((user)=>{
            const uid = user.uid;
       fire.database().ref("/userData/"+ uid).once("value")
       .then((snapshot) =>{
         const userObject = snapshot.val();
         console.log(userObject)
         const JanuaryLeave =[]
         const FebruaryLeave =[]
         const MarchLeave =[]
         const AprilLeave =[]
         const MayLeave =[]
         const JuneLeave =[]
         const JulyLeave =[]
         const AugustLeave =[]
         const SeptemberLeave =[]
         const OctoberLeave =[]
         const NovemberLeave =[]
         const DecemberLeave =[]
         for (var j in userObject){
          const myDate  = userObject[j].fromDate
          const myDate2 = myDate.split('/')
          if (myDate2[1] == "1"){
            const totalLeave = parseInt(userObject[j].numberOfLeaves)
            JanuaryLeave.push(totalLeave)
            const totalCasual = JanuaryLeave.reduce((a,b)=>a+b)
            this.setState({January:totalCasual}) 
            
          }
          if (myDate2[1] == "2"){
            const totalLeave = parseInt(userObject[j].numberOfLeaves)
            FebruaryLeave.push(totalLeave)
            const totalCasual = FebruaryLeave.reduce((a,b)=>a+b)
            this.setState({February:totalCasual}) 
            
          }
          if (myDate2[1] == "3"){
            const totalLeave = parseInt(userObject[j].numberOfLeaves)
            MarchLeave.push(totalLeave)
            const totalCasual = MarchLeave.reduce((a,b)=>a+b)
            this.setState({March:totalCasual}) 
            
          }
          if (myDate2[1] == "4"){
            const totalLeave = parseInt(userObject[j].numberOfLeaves)
            AprilLeave.push(totalLeave)
            const totalCasual = AprilLeave.reduce((a,b)=>a+b)
            this.setState({April:totalCasual}) 
            
          }
          if (myDate2[1] == "5"){
            const totalLeave = parseInt(userObject[j].numberOfLeaves)
            MayLeave.push(totalLeave)
            const totalCasual = MayLeave.reduce((a,b)=>a+b)
            this.setState({May:totalCasual}) 
            
          }
          if (myDate2[1] == "6"){
            const totalLeave = parseInt(userObject[j].numberOfLeaves)
            JuneLeave.push(totalLeave)
            const totalCasual = JuneLeave.reduce((a,b)=>a+b)
            this.setState({June:totalCasual}) 
            
          }
          if (myDate2[1] == "7"){
            const totalLeave = parseInt(userObject[j].numberOfLeaves)
            JulyLeave.push(totalLeave)
            const totalCasual = JulyLeave.reduce((a,b)=>a+b)
            this.setState({July:totalCasual}) 
            
          }
          if (myDate2[1] == "8"){
            const totalLeave = parseInt(userObject[j].numberOfLeaves)
            AugustLeave.push(totalLeave)
            const totalCasual = AugustLeave.reduce((a,b)=>a+b)
            this.setState({August:totalCasual}) 
            
          }
          if (myDate2[1] == "9"){
            const totalLeave = parseInt(userObject[j].numberOfLeaves)
            SeptemberLeave.push(totalLeave)
            const totalCasual = SeptemberLeave.reduce((a,b)=>a+b)
            this.setState({September:totalCasual}) 
            
          }
          if (myDate2[1] == "10"){
            const totalLeave = parseInt(userObject[j].numberOfLeaves)
            OctoberLeave.push(totalLeave)
            const totalCasual = OctoberLeave.reduce((a,b)=>a+b)
            this.setState({October:totalCasual}) 
            
          }
          if (myDate2[1] == "11"){
            const totalLeave = parseInt(userObject[j].numberOfLeaves)
            NovemberLeave.push(totalLeave)
            const totalCasual = NovemberLeave.reduce((a,b)=>a+b)
            this.setState({November:totalCasual}) 
            
          }
          if (myDate2[1] == "12"){
            const totalLeave = parseInt(userObject[j].numberOfLeaves)
            DecemberLeave.push(totalLeave)
            const totalCasual = DecemberLeave.reduce((a,b)=>a+b)
            this.setState({December:totalCasual}) 
            
          }
          
          }
          
         this.setState({
                    userData:userObject,
                    chartData: {
                      labels: ['January', 'February', 'March',
                               'April', 'May',"Jun","July","August","september","October","November","december"],
                      datasets: [
                        {
                          label: 'Total Leave',
                          fill: false,
                          lineTension: 0.5,
                          backgroundColor: 'rgba(75,192,192,1)',
                          borderColor: 'rgba(0,0,0,1)',
                          borderWidth: 2,
                          data: [this.state.January,this.state.February,this.state.March,this.state.April,this.state.May,this.state.June,
                            this.state.July,this.state.August,this.state.September,this.state.October,this.state.November,this.state.December]
                        }
                      ]
                    }
                   
                    })
       })
        })
    }
  render() {
     
    return (
      <div style={{height:"200px"}}>
        <Line
        height="100px"
          data={this.state.chartData}
          options={{
            title:{
              display:true,
              text:'All Leave Total per month',
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
import React from 'react';
import {Pie} from 'react-chartjs-2';
import fire from './config/Fire'

export default class UserPieChart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userData:{},
            Maternity:0,
            Vacation:0,
            Sick:0,
            Quarantine:0,
            Casual:0,
            Study:0,
            Earned:0,
            HalfPay:0,
            ChartData: {
                labels: ['Sick Leave', 'Vacation Leave', 'Casual Leave',
                         'Study Leave', 'Maternity Leave',"Earned Leave"],
                datasets: [
                  {
                    label: 'Leave',
                    backgroundColor: [
                      '#B21F00',
                      '#C9DE00',
                      '#2FDE00',
                      '#00A6B4',
                      '#6800B4',
                      '#7800B4',
                      '#5800B4',
                      '#3800B4',
                    ],
                    hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F',
                    '#6800B4',
                    ],
                    data: [0,0,0,0,0,0]
                  }
                ]
              }


        }
    }
    componentWillMount () {
        fire.auth().onAuthStateChanged((user)=>{
            const uid = user.uid;
       fire.database().ref("/userData/"+ uid).once("value")
       .then((snapshot) =>{
         const userObect = snapshot.val();
         const CasualLeave =[]
         const MaternityLeave = []
         const VacationLeave = []
         const SickLeave = []
         const QuarantineLeave = []
         const EarnedLeave = []
         const StudyLeave = []
         const HalfPay = []
         for (var j in userObect){
           const leaveId =userObect[j]
           const leaveData = (leaveId)=>{

            }
             
           
             if(userObect[j].leave_type == "Maternity Leave"){
              const totalLeave = parseInt(userObect[j].numberOfLeaves)
              MaternityLeave.push(totalLeave)
              const totalCasual = MaternityLeave.reduce((a,b)=>a+b)
                this.setState({Maternity:totalCasual}) 
             }
             if(userObect[j].leave_type == "Vacation leave"){
              const totalLeave = parseInt(userObect[j].numberOfLeaves)
              VacationLeave.push(totalLeave)
              const totalCasual = VacationLeave.reduce((a,b)=>a+b)
                this.setState({Vacation:totalCasual}) 
             }
             if(userObect[j].leave_type == "Sick Leave or Medical Leave"){
              const totalLeave = parseInt(userObect[j].numberOfLeaves)
              SickLeave.push(totalLeave)
              const totalCasual = SickLeave.reduce((a,b)=>a+b)
                this.setState({Sick:totalCasual}) 
             }
             if(userObect[j].leave_type == "Casual Leave"){
               const totalLeave = parseInt(userObect[j].numberOfLeaves)
               CasualLeave.push(totalLeave)
               const totalCasual = CasualLeave.reduce((a,b)=>a+b)
                this.setState({Casual:totalCasual}) 
             }
             if(userObect[j].leave_type == "Quarantine Leave"){
              const totalLeave = parseInt(userObect[j].numberOfLeaves)
              QuarantineLeave.push(totalLeave)
              const totalCasual = QuarantineLeave.reduce((a,b)=>a+b)
                this.setState({Quarantine:totalCasual}) 
             }
             if(userObect[j].leave_type == "Earned Leave or Privilege Leave"){
              const totalLeave = parseInt(userObect[j].numberOfLeaves)
              EarnedLeave.push(totalLeave)
              const totalCasual = EarnedLeave.reduce((a,b)=>a+b)
                this.setState({Earned:totalCasual}) 
             }
             if(userObect[j].leave_type == "Study Leave or Sabbatical Leave"){
              const totalLeave = parseInt(userObect[j].numberOfLeaves)
              StudyLeave.push(totalLeave)
              const totalCasual = StudyLeave.reduce((a,b)=>a+b)
                this.setState({Study:totalCasual}) 
             }
             if(userObect[j].leave_type == "Half Pay Leave"){
              const totalLeave = parseInt(userObect[j].numberOfLeaves)
              HalfPay.push(totalLeave)
              const totalCasual = HalfPay.reduce((a,b)=>a+b)
              this.setState({HalfPay:totalCasual}) 
             }
         }
        
         
         this.setState({
                    userData:userObect,
                    ChartData: {
                        labels: ['Sick Leave', 'Vacation Leave', 'Casual Leave',
                                 'Study Leave', 'Maternity Leave',"Earned Leave","Half Pay Leave","Quarantine Leave"],
                        datasets: [
                          {
                            label: 'Leave',
                            backgroundColor: [
                              '#B21F00',
                              '#C9DE00',
                              '#2FDE00',
                              '#00A6B4',
                              '#6800B4',
                              '#0800B4',
                              'grey',
                              'blue',
                              
                            ],
                            hoverBackgroundColor: [
                            '#501800',
                            '#4B5000',
                            '#175000',
                            '#003350',
                            '#35014F',
                            '#6859B4',
                            '#C90E00',
                            '#2F0E00',
                            ],
                            data: [this.state.Sick, this.state.Vacation, this.state.Casual, this.state.Study, this.state.Maternity,this.state.Earned,this.state.HalfPay,this.state.Quarantine]
                          }
                        ]
                      }
                    })
       })
        })
    }
  render() {
    return (
      
        <Pie
            height="219px"
          data={this.state.ChartData}
          options={{
            title:{
              display:true,
              text:'Average Leave',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

    
    );
  }
}
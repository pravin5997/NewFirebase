import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import fire from './config/Fire'

// const state = {
//   labels: ['Sick Leave', 'Vacation Leave', 'Casual Leave',
//            'Study Leave', 'Maternity Leave'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       backgroundColor: [
//         '#B21F00',
//         '#C9DE00',
//         '#2FDE00',
//         '#00A6B4',
//         '#6800B4'
//       ],
//       hoverBackgroundColor: [
//       '#501800',
//       '#4B5000',
//       '#175000',
//       '#003350',
//       '#35014F'
//       ],
//       data: [1, 5, 2, 0, 3]
//     }
//   ]
// }

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
         console.log(userObect)
         for (var j in userObect){
             if(userObect[j].leave_type == "Maternity Leave"){
                this.setState({Maternity:userObect[j].numberOfLeaves}) 
             }
             if(userObect[j].leave_type == "Vacation leave"){
                this.setState({Vacation:userObect[j].numberOfLeaves}) 
             }
             if(userObect[j].leave_type == "Sick Leave or Medical Leave"){
                this.setState({Sick:userObect[j].numberOfLeaves}) 
             }
             if(userObect[j].leave_type == "Casual Leave"){
               const numberLeave =[]
               const totalLeave = userObect[j].numberOfLeaves
               numberLeave.push(totalLeave)
               console.log(numberLeave)
                this.setState({Casual:userObect[j].numberOfLeaves}) 
             }
             if(userObect[j].leave_type == "Quarantine Leave"){
                this.setState({Quarantine:userObect[j].numberOfLeaves}) 
             }
             if(userObect[j].leave_type == "Earned Leave or Privilege Leave"){
                this.setState({Earned:userObect[j].numberOfLeaves}) 
             }
             if(userObect[j].leave_type == "Study Leave or Sabbatical Leave"){
                this.setState({Study:userObect[j].numberOfLeaves}) 
             }
             if(userObect[j].leave_type == "Half Pay Leave"){
                this.setState({HalfPay:userObect[j].numberOfLeaves}) 
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
      <div>
        <Pie
            height="100px"
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

      </div>
    );
  }
}
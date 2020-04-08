import React, { Component } from 'react'
import fire from './config/Fire'
import {Button, Form,FormGroup,FormLabel,Navbar,Nav,Col} from 'react-bootstrap'
import { Link } from "react-router-dom";
import DatePicker from "./DatePickerInput";
import { Multiselect } from 'multiselect-react-dropdown';

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state ={
            userData:{},
            leaveDecs:"",
            dropDown:"",
            UserName:"",
            dropDownError:"",
            NumberOfLeave:"",
            NumberOfLeaveErroe:"",
            leaveDecsError:"",
            userName:props.userEmail,
            fromDate: new Date(),
            toDate: new Date(),
            admin:"",
            adminError:"",
            options: [{name: 'Hitesh Sir', id: "VF2yj2SuNMPfS4C16Vd5Jd0e1do1"},{name: 'Gujan Sir', id: "zb6oP0NqFTWlxmhwBPW8Jpxvbm13"},{name: 'Jay Bhai', id: "PQ6NEf6yHkTTfurhWoF6uW5CxF92"}],
            selectedList:[],
            selectedItem:[],
            selectedValue:"",
            multidata:[],
            myfinalData:{},
            selectedOption:""

        }
    }

    fromDateChange = fromDate => this.setState({ fromDate });
    toDateChange = toDate => this.setState({ toDate });

    componentDidMount () {
        fire.auth().onAuthStateChanged((user)=>{
            const uid = user.uid;
       fire.database().ref("/user/"+ uid).once("value")
       .then((snapshot) =>{
         const userObect = snapshot.val();
         this.setState({
                    userData:userObect,
                    userName:userObect.firstName
                    })
       })
        })
    }
    onChangeHandle = (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }
   
    logOutHandle = () =>{
        fire.auth().signOut();
    }
    onClickButton = (event) =>{
        this.valid()
        event.preventDefault();
        if(this.state.dropDown.length >1 && this.state.leaveDecs.length >1){
          fire.auth().onAuthStateChanged((user)=>{
            const uid =user.uid
            
         
        const userRef = fire.database().ref("userData/"+ uid)
        const data = {leave_type:this.state.dropDown,numberOfLeaves:this.state.NumberOfLeave,apllyDate:this.state.fromDate.toLocaleDateString(),toDate:this.state.toDate.toLocaleDateString(),LeaveDecsp:this.state.leaveDecs,adminUid:this.state.multidata}
          userRef.push(data).then(res =>
              {
                  
                  this.props.history.push("/mainhome/")
              })
            })
    
        
    }
    }
    valid() {
        if (this.state.dropDown.length < 1) {
			this.setState({
				dropDownError: 'This field is required'
			});
		} else {
			this.setState({
				dropDownError: null
			});
        }
        if (this.state.leaveDecs.length < 1) {
			this.setState({
				leaveDecsError: 'This field is required'
			});
		} else {
			this.setState({
				leaveDecsError: null
			});
        }
        if (this.state.NumberOfLeave.length < 1) {
			this.setState({
				NumberOfLeaveErroe: 'This number field is required'
			});
		} else {
			this.setState({
				NumberOfLeaveErroe: null
			});
        }
        if (this.state.admin.length < 1) {
			this.setState({
				adminError: 'This field is required'
			});
		} else {
			this.setState({
				adminError: null
			});
		}
    }
    multiChange = (selectedData) =>{
      const userRef = fire.database().ref("user");
      userRef.on("value",(snapshot)=>{
        let users = snapshot.val()
        let finaldata = []
       let events = selectedData.map((item) =>item.id)
     
          for (let i in users){
          
            events.map((item) =>{
            
              if (item == i){
                
                finaldata.push(i)
              }
          } ) 
        }
      this.setState({multidata:finaldata.toString()})
    })
  }
 
    render() {
      console.log(this.state.selectedOption)
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <div className = "App" >
              
            <div className="container" >
                <Form>
                <h1>welcome {this.state.userName}</h1>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Leave Type</Form.Label>
                    <Form.Control as="select" value={this.state.dropDown} name="dropDown" onChange={this.onChangeHandle}>
                    <option>---Select---</option>   
                    <option>Vacation leave</option>
                    <option>Sick Leave or Medical Leave</option>
                    <option>Casual Leave</option>
                    <option>Maternity Leave</option>
                    <option>Earned Leave or Privilege Leave</option>
                    <option>Quarantine Leave</option>
                    <option>Study Leave or Sabbatical Leave</option>
                    <option>Half Pay Leave</option>
                    </Form.Control>
                    <p style={{ color: 'red', fontSize: '12px' }}>{this.state.dropDownError}</p>
                </Form.Group>
                <FormGroup>
                    <FormLabel>Number Of Leave</FormLabel>
                    <input type="number" value={this.state.NumberOfLeave} onChange = {this.onChangeHandle} name="NumberOfLeave" id="number" className="form-control" placeholder="Number of leave" />
                    <p style={{ color: 'red', fontSize: '12px' }}>{this.state.NumberOfLeaveErroe}</p>
                </FormGroup>
                <Form.Row>
                    <Form.Group as={Col} md={6}>
                      <Form.Label>
                        <h5>From</h5>
                      </Form.Label>
                      <br />
                      <DatePicker
                        onChangeEvent={this.fromDateChange}
                        DateValue={this.state.fromDate}
                      />
                    </Form.Group>
                    {(this.state.NumberOfLeave >1) ? (
                      <Form.Group as={Col} md={6}>
                        <Form.Label>
                          <h5>To</h5>
                        </Form.Label>
                        <br />
                        <DatePicker
                          onChangeEvent={this.toDateChange}
                          DateValue={this.state.toDate}
                        />
                      </Form.Group>
                    ) : null}
                  </Form.Row>
                <FormGroup>
                    <FormLabel>Leave Description</FormLabel>
                    <textarea value={this.state.leaveDecs} onChange = {this.onChangeHandle} name="leaveDecs" id="leaveDecs" className="form-control" placeholder="Description" />
                    <p style={{ color: 'red', fontSize: '12px' }}>{this.state.leaveDecsError}</p>
                </FormGroup>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Admin</Form.Label>
                    <div style={{backgroundColor:"white",borderRadius:"0.25rem"}}>
                    <Multiselect
                        options={this.state.options}
                        // selectedValues={this.state.multidata}
                        onSelect = {this.multiChange}
                        displayValue="name"
                        
                        
                    />
                    </div>
                   
                </Form.Group>
                
            </Form>
            <Button type="button" onClick ={this.onClickButton}>Apply</Button>
                
            </div>
            </div>
            </div>
            </div>
        )
    }
}

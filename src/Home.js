import React, { Component } from 'react'
import fire from './config/Fire'
import {Button, Form,FormGroup,FormLabel,Navbar,Nav,Col,Row} from 'react-bootstrap'
import { Link } from "react-router-dom";
import DatePicker from "./DatePickerInput";
import { Multiselect } from 'multiselect-react-dropdown';
// import './formcss.css';

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
            currentDate:new Date(),
            toDate: new Date(),
            admin:"",
            adminError:"",
            options: [{name: 'Hitesh Sir', id: "tUL8MC88xSaMHXv08LHHkv1rdoG2"},{name: 'Gujan Sir', id: "pNowOO0jTXfsUZ2Yuz2xKLxotME2"},{name: 'Jay Bhai', id: "oZmpCay2OOhHxPOjHp0ZkvXcacu2"}],
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
        const fromDataFormat = this.state.fromDate.getDate()+"/"+parseInt(this.state.fromDate.getMonth()+1)+"/"+this.state.fromDate.getFullYear()
        const toDateFormat = this.state.toDate.getDate()+"/"+parseInt(this.state.toDate.getMonth()+1)+"/"+this.state.toDate.getFullYear()
        const currentDateFormat = this.state.currentDate.getDate()+"/"+parseInt(this.state.currentDate.getMonth()+1)+"/"+this.state.currentDate.getFullYear()
        const data = {leave_type:this.state.dropDown,numberOfLeaves:this.state.NumberOfLeave,fromDate:fromDataFormat,toDate:toDateFormat,LeaveDecsp:this.state.leaveDecs,adminEmail:this.state.multidata,applyDate:currentDateFormat}
          userRef.push(data).then(res =>
              {
                  
                  this.props.history.push("/sidebar")
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
        console.log(users)
        let finaldata = []
       let events = selectedData.map((item) =>item.id)
     
          for (let i in users){
          
            events.map((item) =>{
            
              if (item == i){
                
                finaldata.push( users[i].email)
              }
          } ) 
        }
       
      this.setState({multidata:finaldata.toString()})
    })
  }
 
    render() {
   
        return (
       
         <div className="container" style={{ boxShadow:" 0px 14px 80px rgba(10,58, 5, 0.2)",padding:"10px",borderRadius:"15px"}}> 
                <Row><Col>
                <Form>
                {/* <h1 >welcome {this.state.userName}</h1> */}
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
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Number Of Leave</Form.Label>
                        <input type="number" value={this.state.NumberOfLeave} onChange = {this.onChangeHandle} name="NumberOfLeave" id="number" className="form-control" placeholder="Number of leave" />
                        <p style={{ color: 'red', fontSize: '12px' }}>{this.state.NumberOfLeaveErroe}</p>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                  <Form.Group>
                    <Form.Label>Admin</Form.Label>
                    {/* <div style={{backgroundColor:"white",borderRadius:"0.25rem"}}> */}
                    <Multiselect
                        options={this.state.options}
                        onSelect = {this.multiChange}
                        displayValue="name"
                       
                    />
                    {/* </div> */}
                </Form.Group>
                  </Col>
                </Row>
                <Form.Row>
                    <Form.Group as={Col} md={6}>
                      <Form.Label>
                        From
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
                          To
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
              
               
                
            </Form>
            <Button type="button" onClick ={this.onClickButton} style={{float:"right"}} to="/sidebar" >Apply</Button>
            </Col></Row>  
            </div>
            
           
  
        )
    }
}

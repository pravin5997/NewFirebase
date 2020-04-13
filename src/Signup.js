import React, { Component } from 'react'
import { Link } from "react-router-dom";
import fire from './config/Fire'
import { Form,Button } from 'react-bootstrap';
import NotificationSystem from 'react-notification-system';

const emailRegex = /^[a-zA-Z0-9.]+@+[a-zA-Z0-9]+.+[A-z]/;
export default class Signup extends Component {
    notificationSystem = React.createRef()
    constructor(props){
        super(props)
        this.state = {
            firstName:"",
            firstNameError:"",
            lastName:"",
            lastNameError:"",
            email:"",
            emailError:"",
            password:"",
            passwordError:"",
        }
    }
    onChangeHandel = (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleSignUp = (event) =>{
        this.valid();
        event.preventDefault();
        const notification = this.notificationSystem.current;
            notification.addNotification({
                message: 'signup successfull',
                level: 'success'
              })
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(response =>{
            const uid = response.user.uid
            const userRef = fire.database().ref("user/" +uid)
            const data = {uid:uid,firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email}
            userRef.set(data).then(res =>
                {
                    
                    this.props.history.push("/sidebar")
                })
        })
        .catch((error) => {
            console.log(error)
        })
       
    }
    valid() {
		if (this.state.firstName.length < 1) {
			this.setState({
				firstNameError: 'This field is required'
			});
		} else {
			this.setState({
				firstNameError: null
			});
		}
		if (this.state.lastName.length < 1) {
			this.setState({
				lastNameError: 'This field is required'
			});
		} else {
			this.setState({
				lastNameError: null
			});
		}
		if (this.state.password.length === 0) {
			this.setState({
				passwordError: 'This field is required'
			});
		} else {
			this.setState({
				passwordError: null
			});
		}
		if (this.state.email.length === 0) {
			this.setState({
				emailError: 'This field is required'
			});
		} else if (!emailRegex.test(this.state.email)) {
			this.setState({
				emailError: 'Invalid Email!'
			});
		} else {
			this.setState({
				emailError: null
			});
        }
    }

    render() {
        return (
            <div className="auth-wrapper" >
                <div className="auth-inner">
                <NotificationSystem ref={this.notificationSystem} />
               <div style={{height:"100%",width:"100%"}}>
                <Form>
                <h3>Sign Up</h3>

               
                <Form.Group>
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" onChange={this.onChangeHandel} value={this.state.firstName} name="firstName" id="firstName" placeholder="First name"/>
                    <p style={{ color: 'red', fontSize: '12px' }}>{this.state.firstNameError}</p>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" onChange={this.onChangeHandel} value={this.state.lastName} name="lastName" id="lastName" placeholder="Last name" />
                    <p style={{ color: 'red', fontSize: '12px' }}>{this.state.lastNameError}</p>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onChange={this.onChangeHandel} value={this.state.email} name = "email" id="email" placeholder="Enter email"/>
                    <p style={{ color: 'red', fontSize: '12px' }}>{this.state.emailError}</p>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={this.onChangeHandel} value={this.state.password} name ="password" id="password" className="form-control" placeholder="Enter password"/>
                    <p style={{ color: 'red', fontSize: '12px' }}>{this.state.passwordError}</p>
                </Form.Group>

                <Button type="submit" onClick = {this.handleSignUp} className="btn btn-primary btn-block">Sign Up</Button>
                <p className="singin-or-singup text-right">
                    Already registered <Link to="/sign-in" style={{textDecoration:"none",color:"blue"}}>sign in?</Link>
                </p>
            </Form>
            </div>
            </div>
            </div>
        )
    }
}

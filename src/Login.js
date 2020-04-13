import React, { Component } from 'react'
import fire from './config/Fire'
import { Link } from "react-router-dom";
import { Form,Button } from 'react-bootstrap';
import NotificationSystem from 'react-notification-system';

const emailRegex = /^[a-zA-Z0-9.]+@+[a-zA-Z0-9]+.+[A-z]/;
export default class Login extends Component {
    notificationSystem = React.createRef()
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:"",
            emailError: '',
            passwordError:''
        }
    }
    onChangeHandel = (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleLogin = (event) =>{
        this.valid();
        event.preventDefault();
       
       
        if(this.state.email =="hitesh123@gmail.com"){
         
            const notification = this.notificationSystem.current;
            notification.addNotification({
                message: 'Admin login successfull',
                level: 'success'
              })
            
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((res) =>{
            
            this.props.history.push("/admin")
            
        }).catch((error) => {
            console.log(error)
        })
    }else{
        
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((res) =>{
            this.props.history.push("/sidebar")
            
        }).catch((error) => {
            console.log(error)
        })
    }
    }
    valid() {
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
        if (this.state.password.length < 1) {
			this.setState({
				passwordError: 'This field is required'
			});
		} else {
			this.setState({
				passwordError: null
			});
		}
    }

    render() {
        
        return (
            <div className="auth-wrapper">
                <div className="auth-inner" >
                <NotificationSystem ref={this.notificationSystem} />
                 <Form>
                <h3>Sign In</h3>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={this.state.email} onChange={this.onChangeHandel} name="email" id="emailId" placeholder="Enter email" />
                    <p style={{ color: 'red', fontSize: '12px' }}>{this.state.emailError}</p>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={this.state.password} onChange={this.onChangeHandel}  name="password" id="password" placeholder="Enter password" />
                    <p style={{ color: 'red', fontSize: '12px' }}>{this.state.passwordError}</p>
                </Form.Group>

                <Button type="submit"  onClick={this.handleLogin} className="btn btn-primary btn-block">Login</Button>
                <p className="singin-or-singup text-right">
                Not Registered yet.Go to registration <Link to="/sign-up" style={{textDecoration:"none",color:"blue"}}>sign up?</Link>
                </p>
                
                
            </Form>
            </div>
            </div>
        )
    }
}

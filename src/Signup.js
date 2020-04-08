import React, { Component } from 'react'
import { Link } from "react-router-dom";
import fire from './config/Fire'

const emailRegex = /^[a-zA-Z0-9.]+@+[a-zA-Z0-9]+.+[A-z]/;
export default class Signup extends Component {
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
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(response =>{
            const uid = response.user.uid
            const userRef = fire.database().ref("user/" +uid)
            const data = {firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email,password:this.state.password,uid:uid}
            userRef.set(data).then(res =>
                {
                    
                    this.props.history.push("/mainhome")
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
            <div className="auth-wrapper">
                <div className="auth-inner">
                <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" onChange={this.onChangeHandel} value={this.state.firstName} name="firstName" id="firstName" className="form-control" placeholder="First name" />
                    <p style={{ color: 'red', fontSize: '12px' }}>{this.state.firstNameError}</p>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" onChange={this.onChangeHandel} value={this.state.lastName} name="lastName" id="lastName" className="form-control" placeholder="Last name" />
                    <p style={{ color: 'red', fontSize: '12px' }}>{this.state.lastNameError}</p>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange={this.onChangeHandel} value={this.state.email} name = "email" id="email" className="form-control" placeholder="Enter email" />
                    <p style={{ color: 'red', fontSize: '12px' }}>{this.state.emailError}</p>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={this.onChangeHandel} value={this.state.password} name ="password" id="password" className="form-control" placeholder="Enter password" />
                    <p style={{ color: 'red', fontSize: '12px' }}>{this.state.passwordError}</p>
                </div>

                <button type="submit" onClick = {this.handleSignUp} className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/sign-in">sign in?</Link>
                </p>
            </form>
            </div>
            </div>
        )
    }
}

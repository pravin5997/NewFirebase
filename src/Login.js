import React, { Component } from 'react'
import fire from './config/Fire'
import { Link } from "react-router-dom";

const emailRegex = /^[a-zA-Z0-9.]+@+[a-zA-Z0-9]+.+[A-z]/;
export default class Login extends Component {
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
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((res) =>{
            
            this.props.history.push("/mainhome")
            
        }).catch((error) => {
            console.log(error)
        })
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
                <div className="auth-inner">
                 <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeHandel} name="email" id="emailId" placeholder="Enter email" />
                    <p style={{ color: 'red', fontSize: '12px' }}>{this.state.emailError}</p>
                </div>
                
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={this.state.password} onChange={this.onChangeHandel}  name="password" id="password" placeholder="Enter password" />
                    <p style={{ color: 'red', fontSize: '12px' }}>{this.state.passwordError}</p>
                </div>
                

                <button type="submit"  onClick={this.handleLogin} className="btn btn-primary btn-block">Login</button>
                <p className="forgot-password text-right">
                Not Registered yet.Go to registration <Link to="/sign-up">sign up?</Link>
                </p>
                
                
            </form>
            </div>
            </div>
        )
    }
}

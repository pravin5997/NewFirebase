import React, { Component } from 'react';

import { Row, Col, Form, Button } from 'react-bootstrap';

import './formcss.css';
// import $ from 'jquery';

const emailRegex = /^[a-zA-Z0-9.]+@+[a-zA-Z0-9]+.+[A-z]/;

export default class MyDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			address: '',
			myPlace:"",
			addressError:'',
			myaddress: '',
			myData: [],
			myCity: [],
			myState: [],
			birthDate: new Date(),
			myImages: '',
			mySrcImage: '',
			FirstName: '',
			LastName: '',
			MobileNo: '',
			EmailId: '',
			State: '',
			ZipCode: '',
			number: '',
			myBirthDate: '',
			textInput: '',
			email: '',
			emailError: '',
			mobile: '',
			mobileError: '',
			firstName: '',
			firstNameError: '',
			lastName: '',
			lastNameError: '',
			someName: '',
			date:"",
			dateError:""
		};
	}
	handleClickForm = (event) => {
		this.valid();
		this.setState({
			MobileNo: document.getElementById('mobile').value,
			FirstName: document.getElementById('firstName').value,
			LastName: document.getElementById('lastName').value,
			EmailId: document.getElementById('email').value,
			
		});
	};
	onChangeErroHandle = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
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
		if (this.state.mobile.length === 0) {
			this.setState({
				mobileError: 'This field is required'
			});
		} else {
			this.setState({
				mobileError: 'This field is required'
			});
		}
		if (this.state.email.length === 0) {
			this.setState({
				emailError: 'This fiel is required'
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
			<div className="container register">
				<div className="row" style={{margin:"0px"}}>
					<div className="col-md-3 register-left">
						<img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
						<h3>Welcome</h3>
						
					</div>
					<div className="col-md-9 register-right">
						<div className="tab-content" id="myTabContent">
							<div
								className="tab-pane fade show active"
								id="home"
								role="tabpanel"
								aria-labelledby="home-tab"
							>
								<h3 className="register-heading">Sign Up</h3>
								<div className="row register-form" autocomplete="off">
									<div className="col-md-12">
										<div className="form-group">
											<label>
												First Name<span style={{ color: 'red' }}>*</span>
											</label>
											<input
												className="form-control"
												type="text"
												name="firstName"
												id="firstName"
												maxLength={15}
												placeholder="Your First Name *"
												onChange={this.onChangeErroHandle}
												required
											/>
											<p>{this.state.FirstName}</p>
											<p style={{ color: 'red', fontSize: '12px' }}>
												{this.state.firstNameError}
											</p>
										</div>
										<div className="form-group">
											<label>
												Last Name<span style={{ color: 'red' }}>*</span>
											</label>
											<input
												className="form-control"
												type="text"
												name="lastName"
												id="lastName"
												maxLength={15}
												placeholder="Your Last Name *"
												onChange={this.onChangeErroHandle}
												required
											/>
											<p>{this.state.LastName}</p>
											<p style={{ color: 'red', fontSize: '12px' }}>
												{this.state.lastNameError}
											</p>
										</div>
										<div className="form-group">
											<label>
												Mobile No.<span style={{ color: 'red' }}>*</span>
											</label>
											<input
												type="text"
												className="form-control"
												id="mobile"
												onChange={(event) => {
													if (isNaN(Number(event.target.value))) {
														return;
													} else {
														this.setState({ mobile: event.target.value });
													}
												}}
												maxLength={13}
												placeholder="Enter Mobile number*"
												value={this.state.mobile}
											/>
											<p>{this.state.MobileNo}</p>
											<p style={{ color: 'red', fontSize: '12px' }}>
												{this.state.mobileError}
											</p>
										</div>
										<div className="form-group">
											<label>
												Email Id<span style={{ color: 'red' }}>*</span>
											</label>
											<input
												className="form-control"
												type="text"
												name="email"
												id="email"
												placeholder="Your Email *"
												onChange={this.onChangeErroHandle}
												required
											/>
											<p>{this.state.EmailId}</p>
											<p style={{ color: 'red', fontSize: '12px' }}>
												{this.state.emailError}
											</p>
										</div>
                                        <Button
										type="button"
										className="btnRegister"
										onClick={this.handleClickForm}
									>
										Register
									</Button>
									</div>

									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

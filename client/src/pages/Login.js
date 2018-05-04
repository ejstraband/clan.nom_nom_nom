import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar_0";
import { Input, FormBtn } from "../components/Form";
import '../index.css'

class Login extends Component {
	state = {
		// user: [],
		email: "",
		password: "",
		message: "",
	};
	
	componentDidMount() {
		console.log("Component did mount")
	}
	
	handleInputChange = event => {
			const { name, value } = event.target;
			this.setState({
			[name]: value
			});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.email && this.state.password) {
			console.log("login submitted");
			this.setState({message: ''})
			// API.getUser(this.state.email)
			console.log(this.state);
			API.loginUser(
				{
					email: this.state.email.toLowerCase(),
					password: this.state.password,
					message: this.state.message,
				}
		)
			.then(res => {
				console.log("Login.js says, response from login is: ")
				console.log(res);
				if (res.data.status === 200){
					// success - email and password are valid
					localStorage.setItem("family", res.data.family);
					this.setState({message: 'Success!'});
					this.props.history.push("/recipes");
				} else if (res.data.status === 299) {
					// user exists but password is wrong
					this.setState({message: "Wrong password"})
				} else {
					// user not found
					this.setState({
						message: 'User not found',
					})
				}

			})
			.catch(err => {
				// we may never hit this now?
				console.log("Login.js says, User get " + err);
			});
		}
	};
	
	render(){
		return(
			<div>
				<Navbar />
				<div className='Login container col-5'>
					<h1 className="danger"> {this.state.message} </h1>
					<h1>Log in</h1>
					<form>
						<Input
							type="email"
							value={this.state.email}
							onChange={this.handleInputChange}
							name="email"
							placeholder="Email"
						/>
						<Input
							type="password"
							value={this.state.password}
							onChange={this.handleInputChange}
							name="password"
							placeholder="Password"
						/>
						<FormBtn
							disabled={!(this.state.email && this.state.password)}
							onClick={this.handleFormSubmit}
						>
							Log in
						</FormBtn>
					</form>
				</div>
			</div>
		)
	}
}

export default Login;
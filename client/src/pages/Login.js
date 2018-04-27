import React, { Component } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import '../index.css'

class Login extends Component {
	state = {
		user: [],
		email: "",
		password: "",
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
			API.getUser(this.state.email)
			.then(res => {
				console.log(res);
				if (res.body.email){
					this.props.history.push("/recipes");
				}
				else {
					this.setState({
						user: [],
						email: "",
						password: "",
					});
					this.props.history.push("/login");
				}
			})
			.catch(err => {
				console.log("Register.js says, User get " + err);
			});
		}
	};
	
	render(){
		return(
			<div className='Login container col-5'>
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
		)
	}
}

export default Login;
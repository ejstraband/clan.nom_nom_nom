import React, { Component } from "react";
import API from "../utils/API";
import { Input, FormBtn, TextArea } from "../components/Form";

class SignUp extends Component {
	state = {
		user: [],
		email: "",
		name: "",
		password: "",
		password2: "",
		linkTo: "",
		relationship: "",
		bio: "",
		status: ""
	};

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
		event.preventDefault();
    if (this.state.email && this.state.name && (this.state.password === this.state.password2)) {
			const user = {
        email: this.state.email,
				name: this.state.name,
				password: this.state.password,
				linkTo: this.state.linkTo,
				relationship: this.state.relationship,
				bio: this.state.bio,
				status: "active"
      };
      API.saveUser(user)
        .then(res => console.log(res))
				.catch(err => console.log("Register.js says, User save " + err));
			this.setState({
				user: [],
				email: "",
				name: "",
				password: "",
				password2: "",
				linkTo: "",
				relationship: "",
				bio: "",
				status: ""
		
			});
			this.props.history.push("/login");
    }
  };

	render(){
		return (
			<div className='container col-6'>
				<h1>Create an account</h1>
				<form>
					<Input
						value={this.state.email}
						onChange={this.handleInputChange}
						name="email"
						placeholder="Email (required)"
					/>
					<Input
						value={this.state.name}
						onChange={this.handleInputChange}
						name="name"
						placeholder="Full Name (required)"
					/>
					<Input
						type="password"
						value={this.state.password}
						onChange={this.handleInputChange}
						name="password"
						placeholder="Password (required)"
					/>
					<Input
						type="password"
						value={this.state.password2}
						onChange={this.handleInputChange}
						name="password2"
						placeholder="Repeat password"
					/>
					<TextArea
						value={this.state.bio}
						onChange={this.handleInputChange}
						name="bio"
						placeholder="Tell us something about yourself"
					/>
					<FormBtn
						disabled={!(this.state.email && this.state.password && this.state.password2 && (this.state.password === this.state.password2))}
						onClick={this.handleFormSubmit}
					>
						Submit
					</FormBtn>
				</form>
			</div>
		)
	}
}

export default SignUp;
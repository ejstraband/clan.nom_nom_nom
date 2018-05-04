import React, { Component } from "react";
import API from "../utils/API";
import { Input, FormBtn, TextArea } from "../components/Form";
import { Link } from "react-router-dom";
import axios from 'axios';

class SignUp extends Component {
	state = {
		families: [],
		users: [],
		family: "",
		email: "",
		name: "",
		password: "",
		password2: "",
		linkTo: "",
		relationship: "",
		bio: "",
		status: ""
	};

	componentDidMount() {
		let theseFamilies = [];
		axios.get("/api/families")
			.then(res => {
				theseFamilies = res.data.map((family) => {
					return family
				});
				console.log(theseFamilies);
				this.setState({
					families: theseFamilies,
				});
				console.log(this.state.families)
			});

		let theseUsers = [];
		axios.get("/api/users")
			.then(res => {
				theseUsers = res.data.map((user) => {
					return user
				});
				console.log(theseUsers);
				this.setState({
					users: theseUsers,
				});
				console.log(this.state.users)
			});
	};

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
	};
	
	// handleInputChange2 = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
	// 	});

	// 	let theseUsers = [];
	// 	axios.get("/api/users")
	// 		.then(res => {
	// 			theseUsers = res.data.map((user) => {
	// 				if (user.family === this.state.family) {
	// 					return user
	// 				}
	// 			});
	// 			console.log(theseUsers);
	// 			this.setState({
	// 				users: theseUsers,
	// 			});
	// 			console.log(this.state.users)
	// 		});

  // };

  handleFormSubmit = event => {
		event.preventDefault();
    if (this.state.email && this.state.name && (this.state.password === this.state.password2)) {
			const user = {
				family: this.state.family,
        email: this.state.email.toLowerCase().replace(" ", ""),
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
				families: [],
				family: "",
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
		let families = this.state.families;
		let optionFamily = families.map((family) =>
			<option key={family._id} value={family._id}>{family.familyName}</option>
		);

		let users = this.state.users;
		let optionUsers = users.map((user) =>
			<option key={user._id} value={user._id}>{user.name}</option>
		);

		return (
			<div className='container col-6'>
				<h1>Create an account</h1>
				<form>
					<label>Which family group do you want to join?</label>
					<select value={this.state.family} onChange={this.handleInputChange} name="family">	
						<option value="" ></option>
						{optionFamily}
					</select>
          <Link to="/family" className="nav-link">
            New Family
          </Link>
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
					<label>Pick a family member who is your parent, spouse or friend.</label>
					<select value={this.state.linkTo} onChange={this.handleInputChange} name="linkTo">	
						<option value="" ></option>
						{optionUsers}
					</select>
					<label>How are you related to that family member?</label>
					<select value={this.state.relationship} onChange={this.handleInputChange} name="relationship">
						<option value=""></option>		
						<option value="union">Marriage or similar</option>		
						<option value="parent">Parent</option>		
						<option value="other">Friend or other</option>			
					</select>
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
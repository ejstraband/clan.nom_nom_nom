import React, { Component } from "react";
import API from "../utils/API";
import { Input, FormBtn, TextArea } from "../components/Form";
import axios from 'axios';

class Ancestor extends Component {
	state = {
		users: [],
		email: "",
		name: "",
		linkTo: null,
		relationship: "",
		bio: "",
		status: "inactive",
	};

	populateUsers() {
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
	}

	componentDidMount() {
		this.populateUsers()
	};

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
		event.preventDefault();

    if (this.state.name) {
			const user = {
        email: this.state.name.replace(" ", "").toLowerCase() + "@ancestry.nom",
				name: this.state.name,
				password: "",
				linkTo: this.state.linkTo,
				relationship: this.state.relationship,
				bio: this.state.bio,
				status:	"inactive",
      };
      API.saveUser(user)
        .then(res => console.log(res))
				.catch(err => console.log("Ancestor.js says, User save " + err));
			this.populateUsers();	
			this.setState({
				name: "",
				linkTo: "",
				relationship: "",
				bio: "",
				status: "inactive",
			});
    }
  };

	render(){
		let users = this.state.users;
		let optionUsers = users.map((user) =>
			<option key={user._id} value={user._id}>{user.name}</option>
		);

		return (
			<div className='container col-6'>
				<h1>Add an Ancestor</h1>
				<form>
					<Input
						value={this.state.name}
						onChange={this.handleInputChange}
						name="name"
						placeholder="Full Name (required)"
					/>
					<label>Who is this ancestor related to?</label>
					<select value={this.state.linkTo} onChange={this.handleInputChange} name="linkTo">	
						<option value="" ></option>
						{optionUsers}
					</select>
					<label>What is that member's relationship to this new ancestor?</label>
					<select value={this.state.relationship} onChange={this.handleInputChange} name="relationship">
						<option value=""></option>		
						<option value="parent">Parent</option>		
						<option value="union">Marriage or similar</option>		
						<option value="other">Friend or other</option>	
						<option value="none">none</option>	
					</select>
					<TextArea
						value={this.state.bio}
						onChange={this.handleInputChange}
						name="bio"
						placeholder="Tell this person's story"
					/>
					<FormBtn
						disabled={!(this.state.name && this.state.relationship)}
						onClick={this.handleFormSubmit}
					>
						Add Ancestor
					</FormBtn>
				</form>
			</div>
		)
	}
}

export default Ancestor;
import React, { Component } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import axios from 'axios';

class NewFamily extends Component {
	state = {
		families: [],
		familyName: "",
	};

	// add 'that name is already taken' functionality	
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
	};

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
		event.preventDefault();
    if (this.state.familyName) {
			const family = {
				familyName: this.state.familyName,
      };
      API.saveFamily(family)
        .then(res => console.log(res))
				.catch(err => console.log("NewFamily.js says, Family save " + err));
			this.setState({
				name: "",
			});
			this.props.history.push("/register");
    }
  };

	render(){
		// let families = this.state.families;
		// let optionFamily = families.map((family) =>
		// 	<option key={family._id} value={family._id}>{family.familyName}</option>
		// );

		return (
			<div className='container col-6'>
				<h1>Create a family group</h1>
				<form>
					<label>What will you name your family group?</label>		
					<Input
						value={this.state.familyName}
						onChange={this.handleInputChange}
						name="familyName"
						placeholder="eg., 'The Williams Family'"
					/>					
					<FormBtn
						disabled={!(this.state.familyName)}
						onClick={this.handleFormSubmit}
					>
						Add Family Group
					</FormBtn>
				</form>
			</div>
		)
	}
}

export default NewFamily;
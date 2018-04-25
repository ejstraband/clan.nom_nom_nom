import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
console.log('api is ,', API)
class SignUp extends Component {
	state = {
		user: [],
		email: "",
		name: "",
		password: "",
		password2: "",
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
		console.log(event);
    if (this.state.email && this.state.name && (this.state.password === this.state.password2)) {
      API.saveUser({
        email: this.state.email,
				name: this.state.name,
        password: this.state.password,
      })
        .then(res => console.log(res))
        .catch(err => console.log("User save error: " + err));
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
						value={this.state.password}
						onChange={this.handleInputChange}
						name="password"
						placeholder="Password (required)"
					/>
					<Input
						value={this.state.password2}
						onChange={this.handleInputChange}
						name="password2"
						placeholder="Repeat password"
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
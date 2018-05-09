import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar_0";
import { Input, FormBtn, TextArea } from "../components/Form";
import { Link } from "react-router-dom";
import axios from "axios";

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
    favorites: [],
    status: ""
  };
  componentDidMount() {
    let theseFamilies = [];
    axios.get("/api/families").then(res => {
      theseFamilies = res.data.map(family => {
        return family;
      });
      console.log(theseFamilies);
      this.setState({
        families: theseFamilies
      });
      console.log(this.state.families);
    });

    let theseUsers = [];
    axios.get("/api/users").then(res => {
      theseUsers = res.data.map(user => {
        return user;
      });
      console.log(theseUsers);
      this.setState({
        users: theseUsers
      });
      console.log(this.state.users);
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.email &&
      this.state.name &&
      this.state.password === this.state.password2
    ) {
      const user = {
        family: this.state.family,
        email: this.state.email.toLowerCase().replace(" ", ""),
        name: this.state.name,
        password: this.state.password,
        linkTo: this.state.linkTo,
        relationship: this.state.relationship,
        bio: this.state.bio,
        favorites: this.state.favorites,
        status: "active"
      };
      API.saveUser(user)
        .then(res => console.log(res))
        .catch(err => console.log("Register.js says, User save " + err));
      this.setState({
        family: "",
        email: "",
        name: "",
        password: "",
        password2: "",
        linkTo: "",
        relationship: "",
        bio: "",
        favorites: [],
        status: ""
      });
      this.props.history.push("/login");
    }
  };

  render() {
    let families = this.state.families;
    let optionFamily = families.map(family => (
      <option key={family._id} value={family._id}>
        {family.familyName}
      </option>
    ));

    let users = this.state.users;
    let optionUsers = users.map(user => (
      <option key={user._id} value={user._id}>
        {user.name}
      </option>
    ));

    return (
      <div>
        <Navbar />
        <div className="container col-6 pt-3" style={{ marginTop: 20 }}>
          <h2>Create an account</h2>
          <form>
            <h6>Which family group do you want to join?</h6>
            <select
              className="form-control"
              value={this.state.family}
              onChange={this.handleInputChange}
              name="family"
            >
              <option value="" />
              {optionFamily}
            </select>
            <Link to="/family" className="nav-link">
              <h5>New Family</h5>
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
            <h6>Pick a family member who is your parent, spouse or friend.</h6>
            <select
              className="form-control"
              value={this.state.linkTo}
              onChange={this.handleInputChange}
              name="linkTo"
            >
              <option value="" />
              {optionUsers}
            </select>
            <h6>How are you related to that family member?</h6>
            <select
              className="form-control"
              value={this.state.relationship}
              onChange={this.handleInputChange}
              name="relationship"
            >
              <option value="" />
              <option value="union">Marriage or similar</option>
              <option value="parent">Parent</option>
              <option value="other">Friend or other</option>
            </select>
            <TextArea
              style={{ marginTop: 20 }}
              value={this.state.bio}
              onChange={this.handleInputChange}
              name="bio"
              placeholder="Tell us something about yourself"
            />
            <FormBtn
              disabled={
                !(
                  this.state.email &&
                  this.state.password &&
                  this.state.password2 &&
                  this.state.password === this.state.password2
                )
              }
              onClick={this.handleFormSubmit}
            >
              Submit
            </FormBtn>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;

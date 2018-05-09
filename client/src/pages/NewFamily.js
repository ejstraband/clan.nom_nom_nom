import React, { Component } from "react";
import API from "../utils/API";
import { Input} from "../components/Form";
import axios from "axios";

class NewFamily extends Component {
  state = {
    families: [],
    familyName: "",
    opened: true
  };

  componentWillUnmount() {
    document.body.classList.remove("modal-open");
  }

  // add 'that name is already taken' functionality
  componentDidMount() {
    document.body.classList.add("modal-open");
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
  }

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
        familyName: this.state.familyName
      };
      API.saveFamily(family)
        .then(res => console.log(res))
        .catch(err => console.log("NewFamily.js says, Family save " + err));
      this.setState({
        name: ""
      });
      this.props.history.push("/signup");
    }
  };

  render() {
    // let families = this.state.families;
    // let optionFamily = families.map((family) =>
    // 	<option key={family._id} value={family._id}>{family.familyName}</option>
    // );

    const close = () => {
      this.setState({
        opened: false
      });
      document.body.classList.remove("modal-open");
      this.props.history.push("/signup");
    };

    const style = { display: this.state.opened ? "block" : "none" };
    return (
      <div className="container col-6">
        <form
          className={"modal fade show "}
          tabIndex="-1"
          role="dialog"
          style={style}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create a family group</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={close}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{this.renderBody()}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  disabled={!this.state.familyName}
                  onClick={this.handleFormSubmit}
                >
                  Create Family
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={close}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }

  renderBody() {
    return (
      <React.Fragment>
        <label>What will you name your family group?</label>
        <Input
          value={this.state.familyName}
          onChange={this.handleInputChange}
          name="familyName"
          placeholder="eg., 'The Williams Family'"
        />
      </React.Fragment>
    );
  }
}

export default NewFamily;

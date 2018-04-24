import React, { Component } from "react";
import Nav from "./Nav";
import Home from "./pages/Home";
import Logon from "./pages/Logon";
import SignUp from "./pages/SignUp";

class Main extends Component {
  state = {
    currentPage: "Home"
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  }

  renderPage = () => {
    if (this.state.currentPage === 'SignUp') {
      return <SignUp />
    } else if (this.state.currentPage === 'Logon') {
      return <Logon />
    // } else if (this.state.currentPage === 'logout') {
    //   return <Logout />
    } else {
      return <Home />
    }
  };

  render() {
    return (
      <div>
        <Nav
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Main;
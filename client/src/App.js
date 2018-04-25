import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Register/Register";
import NewRecipe from "./pages/NewRecipe/NewRecipe";

class App extends Component {
  state = {
    currentPage: "Home"
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  }

  renderPage = () => {
    if (this.state.currentPage === 'SignUp') {
      return <SignUp />
    } else if (this.state.currentPage === 'Login') {
      return <Login />
    }
    else if (this.state.currentPage === 'NewRecipe') {
      return <NewRecipe />
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

export default App;
import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Register/Register";
import NewRecipe from "./pages/NewRecipe/NewRecipe";
import { Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/newrecipe" render={() => <NewRecipe />} />
        <Route path="/" exact render={() => <Home />} />
        <Nav />
      </div>
    );
  }
}

export default App;
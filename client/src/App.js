import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import Search from "./pages/Search";
import Ancestor from "./pages/Ancestor";
import Login from "./pages/Login";
import SignUp from "./pages/Register";
import NewRecipe from "./pages/NewRecipe";
import NewFamily from "./pages/NewFamily";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/newRecipe" component={NewRecipe} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/ancestor" component={Ancestor} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/family" component={NewFamily} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;

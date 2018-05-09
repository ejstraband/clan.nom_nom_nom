import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="NavBar navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/about_1">
      Ancestry.nom
    </Link>
    <ul className="navbar-nav mr-auto">
      <li
        className={
          window.location.pathname === "/about_1"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/about_1" className="nav-link">
          About
        </Link>
      </li>
      <li
        className={
          window.location.pathname === "/newRecipe"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/newRecipe" className="nav-link">
          Add a Recipe
        </Link>
      </li>
      <li
        className={
          window.location.pathname === "/recipes"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/recipes" className="nav-link">
          Recipes
        </Link>
      </li>
      {/* <li
        className={
          window.location.pathname === "/search"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/search" className="nav-link">
          Search
        </Link>
      </li> */}
    </ul>

    <ul className="navbar-nav ml-auto">
      <li>Search: 
        <select  name="search">		
          <option value=""></option>
          <option value="recent">Recently added</option>		
          <option value="favorites">My Favorites</option>		
          <option value="popular">Popular</option>	
          <option value="mine">My recipes</option>	
        </select>
      </li> 
      <li
        className={
          window.location.pathname === "/ancestor"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/ancestor" className="nav-link">
          Add Ancestors
        </Link>
      </li>
      {/* <li
        className={
          window.location.pathname === "/login" ? "nav-item active" : "nav-item"
        }
      >
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
      <li
        className={
          window.location.pathname === "/register"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/signup" className="nav-link">
          Register
        </Link>
      </li> */} 

      <li
        className={
          window.location.pathname === "/logout"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/about" className="nav-link">
          logout
        </Link>
      </li>

    </ul>
  </nav>
);

export default Navbar;

import React from "react";
import {Link} from 'react-router-dom'

const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">Clan.nom</a>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link
          to="/"
          className={
            props.currentPage === "Home" ? "nav-link active" : "nav-link"
          }
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/newrecipe"
          className={
            props.currentPage === "NewRecipe" ? "nav-link active" : "nav-link"
          }
        >
          Add Recipe
        </Link>
      </li>
    </ul>

    <ul className="navbar-nav ml-auto list-inline">  
      <li className="nav-item list-inline-item">
        <Link
          to="/login"
          className={
            props.currentPage === "Login" ? "nav-link active" : "nav-link"
          }
        >
          Login
        </Link>
      </li>
      <li className="nav-item list-inline-item">
        <Link
          to="/signup"
          className={
            props.currentPage === "SignUp" ? "nav-link active" : "nav-link"
          }
        >
          Register
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
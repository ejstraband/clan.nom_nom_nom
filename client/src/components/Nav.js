import React from "react";

const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">Clan.nom</a>
    {/* <div className="collapse navbar-collapse justify-copntent-between" id="navbarSupportedContent"> */}

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a
            onClick={() => props.handlePageChange("Home")}
            className={
              props.currentPage === "Home" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </a>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto list-inline">  
        <li className="nav-item list-inline-item">
          <a
            onClick={() => props.handlePageChange("Logon")}
            className={
              props.currentPage === "Logon" ? "nav-link active" : "nav-link"
            }
          >
            Log in
          </a>
        </li>
        <li className="nav-item list-inline-item">
          <a
            onClick={() => props.handlePageChange("SignUp")}
            className={
              props.currentPage === "SignUp" ? "nav-link active" : "nav-link"
            }
          >
            Register
          </a>
        </li>
      </ul>

    {/* </div> */}
  </nav>
);

export default Nav;
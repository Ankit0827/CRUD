import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-4 bg-dark">
        <Link className="navbar-brand text-white" to="#">
          CRUD
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-white" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-primary" to="/Adduser">Adduser</Link>
      </nav>
    </div>
  );
};

export default Navbar1;

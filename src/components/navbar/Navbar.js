import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar">
      <div className="navbar-top-bar">
        <div class="navbar-brand">
          <Link to="/">DEMO Streaming</Link>
        </div>
        <ul class="navbar-links">
          <li>
            Log in
          </li>
          <li>
            <button>Start your free trial</button>
          </li>
        </ul>
      </div>

      <div className="navbar-bottom-bar">
        <h2 className="popular-heading">Popular Titles</h2>
      </div>
    </nav>
  );
};

export default Navbar;

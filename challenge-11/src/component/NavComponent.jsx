import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavComponent.css';

const NavComponent = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;

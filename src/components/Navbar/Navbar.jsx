import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return <nav className='navbar'>
      <ul className='navbar-ul'>
      <NavLink to="/characters" className={({ isActive }) => (isActive ? "active" : "inactive")}>
      <FormattedMessage
            id="app.navbar.characters"
            defaultMessage="Edit the files and save to reload"
          />
      </NavLink>
      <NavLink to="/houses" className={({ isActive }) => (isActive ? "active" : "inactive")}>
      <FormattedMessage
            id="app.navbar.houses"
            defaultMessage="Edit the files and save to reload"
          />
      </NavLink>
      <NavLink to="/chronology" className={({ isActive }) => (isActive ? "active" : "inactive")}>
      <FormattedMessage
            id="app.navbar.chronology"
            defaultMessage="Edit the files and save to reload"
          />
      </NavLink>
      </ul>
  </nav>;
};

export default Navbar;



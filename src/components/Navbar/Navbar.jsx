import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({props}) => {
  return <nav className='navbar'>
      <ul className='navbar-ul'>
      <NavLink to="/characters" onClick={() => props.setSearch("")} className={({ isActive }) => (isActive ? "active" : "inactive")}>
      <FormattedMessage
            id="app.navbar.characters"
            defaultMessage="Edit the files and save to reload"
          />
      </NavLink>
      <NavLink to="/houses" onClick={() => props.setSearch("")} className={({ isActive }) => (isActive ? "active" : "inactive")}>
      <FormattedMessage
            id="app.navbar.houses"
            defaultMessage="Edit the files and save to reload"
          />
      </NavLink>
      <NavLink to="/chronology" onClick={() => props.setSearch("")} className={({ isActive }) => (isActive ? "active" : "inactive")}>
      <FormattedMessage
            id="app.navbar.chronology"
            defaultMessage="Edit the files and save to reload"
          />
      </NavLink>
      </ul>
  </nav>;
};

export default Navbar;



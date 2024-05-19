import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar_scn">
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/addscenario">Add Scenario</NavLink>
        </li>
        <li>
          <NavLink to="/allscenario">All Scenario</NavLink>
        </li>
        <li>
          <NavLink to="/addvehicle">Add Vehicle</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

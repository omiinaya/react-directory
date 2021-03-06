import React from "react";
import { switchName } from '../../index'
import { switchGender } from '../../index'
import { switchAge } from '../../index'
import "./style.css";

function Navbar() {
  return (
    <div className="Navbar">
      <a href="/">React Directory</a>
      <ul>
        <li><div id="switch-name-text" onClick={switchName}>Sort by Name ▲</div></li>
        <li><div id="switch-age-text" onClick={switchAge}>Sort by Age ▼</div></li>
      </ul>
      <ul className="nav-links">
        <li><div id="switch-gender-text" onClick={switchGender}>Filter by Gender ⚨</div></li>
      </ul>
    </div>
  );
}

export default Navbar;
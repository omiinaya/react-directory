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
        <li><div id="switch-name-text" onClick={switchName}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') switchName(); }}
          role="button"
          tabIndex={0}>Sort by Name ▲</div></li>
        <li><div id="switch-age-text" onClick={switchAge}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') switchAge(); }}
          role="button"
          tabIndex={0}>Sort by Age ▼</div></li>
      </ul>
      <ul className="nav-links">
        <li><div id="switch-gender-text" onClick={switchGender}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') switchGender(); }}
          role="button"
          tabIndex={0}>Filter by Gender ⚨</div></li>
      </ul>
    </div>
  );
}

export default Navbar;
import React from "react";
import { Link } from 'react-router-dom'
import { testing } from '../../index'
import { switchGender } from '../../index'
import { switchAge } from '../../index'
import "./style.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="/">Google Books</Link>
          <ul className="nav-links">
            <li><span onClick={switchGender}>Filter by Gender</span></li>
          </ul>
          <ul>
          <li><span onClick={testing}>Sort by Name</span></li>
            <li><span onClick={switchAge}>Sort by Age</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
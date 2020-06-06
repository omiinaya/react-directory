import React from "react";
import { Link } from 'react-router-dom'
import "./style.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="/">Google Books</Link>
          <ul class="nav-links">
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/saved">Saved</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
import React from "react";
import { find } from "../../index"
import "./style.css";

function Search() {

  find()

  return (
    <div className="Search">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <button onClick={find}>Search</button>
        </div>
        <div id="content"></div>
      </div>
    </div>
  );
}

export default Search;
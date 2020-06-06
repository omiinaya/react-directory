import React from "react";
import { find } from "../../index"
import { showMaleOnly } from "../../index"
import { showFemaleOnly } from "../../index"
import "./style.css";

function Search() {

  find()

  return (
    <div className="Search">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
        </div>
        <button onClick={showMaleOnly}>Male</button>
        <button onClick={showFemaleOnly}>Female</button>
        <div id="content"></div>
      </div>
    </div>
  );
}

export default Search;
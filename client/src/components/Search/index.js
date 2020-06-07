import React from "react";
import { find } from "../../index"
import { showMaleOnly } from "../../index"
import { showFemaleOnly } from "../../index"
import { showByLocation } from "../../index"
import { lessThanAge } from "../../index"
import { moreThanAge } from "../../index"
import "./style.css";

function Search() {

  find()

  return (
    <div className="Search">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
        </div>
        <input type="text" id="input-bar"></input>
        <button onClick={moreThanAge}>Older Than</button>
        <button onClick={lessThanAge}>Younger Than</button>
        <button onClick={showByLocation}>City</button>
        <button onClick={showMaleOnly}>Male</button>
        <button onClick={showFemaleOnly}>Female</button>
        <div id="content"></div>
      </div>
    </div>
  );
}

export default Search;
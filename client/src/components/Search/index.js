import React from "react";
import { find } from "../../index"
import { showMaleOnly } from "../../index"
import { showFemaleOnly } from "../../index"
import { showByLocation } from "../../index"
import { ageAscending } from "../../index"
import { ageDescending } from "../../index"
import { nameAscending } from "../../index"
import { nameDescending } from "../../index"
import "./style.css";

function Search() {

  find()

  return (
    <div className="Search">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
        </div>
        <input type="text" id="input-bar"></input>
        <button onClick={nameAscending}>Name Ascending</button>
        <button onClick={nameDescending}>Name Descending</button>
        <button onClick={ageAscending}>Age Ascending</button>
        <button onClick={ageDescending}>Age Descending</button>
        <button onClick={showByLocation}>City</button>
        <button onClick={showMaleOnly}>Male</button>
        <button onClick={showFemaleOnly}>Female</button>
        <div id="content"></div>
      </div>
    </div>
  );
}

export default Search;
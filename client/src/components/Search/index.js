import React from "react";
import { find } from "../../index"
import { showByLocation } from "../../index"
import { nameAscending } from "../../index"
import { nameDescending } from "../../index"
import { switchAge } from "../../index"
import "./style.css";

function Search() {

  find()

  return (
    <div className="Search">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
        </div>
        <input type="text" id="input-bar"></input>
        <button onClick={switchAge}>test</button>
        <button onClick={nameAscending}>Name Ascending</button>
        <button onClick={nameDescending}>Name Descending</button>
        <button onClick={showByLocation}>City</button>
        <div id="content"></div>
      </div>
    </div>
  );
}

export default Search;
import React from "react";
import { start } from "../../index"
import { showByLocation } from "../../index"
import "./style.css";

function Search() {
  start()
  return (
    <div className="Search">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <center>
            <div>Search By:</div>
            <div>
              <label><input type="radio" name="options" id="radio-city"></input>City</label>
              <label><input type="radio" name="options" id="radio-state"></input>State</label>
              <label><input type="radio" name="options" id="radio-postcode"></input>Postcode</label>
            </div>
            <input type="text" id="input-bar"></input>
            <button onClick={showByLocation}>Submit</button>
          </center>
          <div id="content"></div>
        </div>
      </div>
    </div>
  );
}

export default Search;
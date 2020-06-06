import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from 'axios'
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

var results;

export function find() {
    var queryURL = "https://randomuser.me/api/?results=200&nat=us";
    return axios
        .get(queryURL).then(response => {
            results = response.data.results
            console.log(results);
            newEmployeeRow()
            //return response.data;
        })
}

export function newEmployeeRow() {
    for (var i = 0; i < results.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="employee-`+i+`
            <p id="first-name-`+i+`">Name: `+results[i].name.first+" "+results[i].name.last+`</p>
            <p id="number-`+i+`">Cell: `+results[i].cell+`</p>
            <p id="email-`+i+`">Email: `+results[i].email+`</p>
            <img id="image-`+i+`" src="`+results[i].picture.thumbnail+`">
        </div>
        `;
        document.getElementById('content').appendChild(div);
    }
}
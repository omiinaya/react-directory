import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from 'axios'
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

var results;
var male = [];
var female = [];

export function find() {
    var queryURL = "https://randomuser.me/api/?results=20&nat=us";
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

export function showMaleOnly() {
    male = [];
    for (var i = 0; i < results.length; i++) {
        if (results[i].gender === "male") {
            male.push(results[i]);
        }
    }
    filteredMaleRow()
    console.log(male);
}

export function showFemaleOnly() {
    female = [];
    for (var i = 0; i < results.length; i++) {
        if (results[i].gender === "female") {
            female.push(results[i]);
        }
    }
    filteredFemaleRow()
    console.log(female);
}

export function filteredMaleRow() {
    document.getElementById('content').innerText = "";
    for (var i = 0; i < male.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="employee-`+i+`
            <p id="first-name-`+i+`">Name: `+male[i].name.first+" "+male[i].name.last+`</p>
            <p id="number-`+i+`">Cell: `+male[i].cell+`</p>
            <p id="email-`+i+`">Email: `+male[i].email+`</p>
            <img id="image-`+i+`" src="`+male[i].picture.thumbnail+`">
        </div>
        `;
        document.getElementById('content').appendChild(div);
    }
}

export function filteredFemaleRow() {
    document.getElementById('content').innerText = "";
    for (var i = 0; i < female.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="employee-`+i+`
            <p id="first-name-`+i+`">Name: `+female[i].name.first+" "+female[i].name.last+`</p>
            <p id="number-`+i+`">Cell: `+female[i].cell+`</p>
            <p id="email-`+i+`">Email: `+female[i].email+`</p>
            <img id="image-`+i+`" src="`+female[i].picture.thumbnail+`">
        </div>
        `;
        document.getElementById('content').appendChild(div);
    }
}
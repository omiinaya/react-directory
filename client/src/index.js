import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from 'axios'
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

var results;
var byGender = [];
var byCity = [];
var byAge = [];

export function find() {
    var queryURL = "https://randomuser.me/api/?results=50&nat=us";
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
    byGender = [];
    for (var i = 0; i < results.length; i++) {
        if (results[i].gender === "male") {
            byGender.push(results[i]);
        }
    }
    filteredMaleRow()
    console.log(byGender);
}

export function showFemaleOnly() {
    byGender = [];
    for (var i = 0; i < results.length; i++) {
        if (results[i].gender === "female") {
            byGender.push(results[i]);
        }
    }
    filteredFemaleRow()
    console.log(byGender);
}

export function filteredMaleRow() {
    document.getElementById('content').innerText = "";
    for (var i = 0; i < byGender.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="employee-`+i+`
            <p id="first-name-`+i+`">Name: `+byGender[i].name.first+" "+byGender[i].name.last+`</p>
            <p id="number-`+i+`">Cell: `+byGender[i].cell+`</p>
            <p id="email-`+i+`">Email: `+byGender[i].email+`</p>
            <img id="image-`+i+`" src="`+byGender[i].picture.thumbnail+`">
        </div>
        `;
        document.getElementById('content').appendChild(div);
    }
}

export function filteredFemaleRow() {
    document.getElementById('content').innerText = "";
    for (var i = 0; i < byGender.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="employee-`+i+`
            <p id="first-name-`+i+`">Name: `+byGender[i].name.first+" "+byGender[i].name.last+`</p>
            <p id="number-`+i+`">Cell: `+byGender[i].cell+`</p>
            <p id="email-`+i+`">Email: `+byGender[i].email+`</p>
            <img id="image-`+i+`" src="`+byGender[i].picture.thumbnail+`">
        </div>
        `;
        document.getElementById('content').appendChild(div);
    }
}

export function showByLocation() {
    byCity = [];
    var input = document.getElementById('input-bar').value;
    for (var i = 0; i < results.length; i++) {
        if (results[i].location.city === input) {
            byCity.push(results[i]);
        }
    }
    filteredByCity()
    console.log(byCity);
}

export function filteredByCity() {
    document.getElementById('content').innerText = "";
    for (var i = 0; i < byCity.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="employee-`+i+`
            <p id="first-name-`+i+`">Name: `+byCity[i].name.first+" "+byCity[i].name.last+`</p>
            <p id="number-`+i+`">Cell: `+byCity[i].cell+`</p>
            <p id="email-`+i+`">Email: `+byCity[i].email+`</p>
            <img id="image-`+i+`" src="`+byCity[i].picture.thumbnail+`">
        </div>
        `;
        document.getElementById('content').appendChild(div);
    }
}

export function lessThanAge() {
    byAge = [];
    var input = document.getElementById('input-bar').value;
    for (var i = 0; i < results.length; i++) {
        if (results[i].dob.age <= input) {
            byAge.push(results[i]);
        }
    }
    filteredLessThan()
    console.log(byAge);
}

export function filteredLessThan() {
    document.getElementById('content').innerText = "";
    for (var i = 0; i < byAge.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="employee-`+i+`
            <p id="first-name-`+i+`">Name: `+byAge[i].name.first+" "+byAge[i].name.last+`</p>
            <p id="number-`+i+`">Cell: `+byAge[i].cell+`</p>
            <p id="email-`+i+`">Email: `+byAge[i].email+`</p>
            <img id="image-`+i+`" src="`+byAge[i].picture.thumbnail+`">
        </div>
        `;
        document.getElementById('content').appendChild(div);
    }
}

export function moreThanAge() {
    byAge = [];
    var input = document.getElementById('input-bar').value;
    for (var i = 0; i < results.length; i++) {
        if (results[i].dob.age >= input) {
            byAge.push(results[i]);
        }
    }
    filteredMoreThan()
    console.log(byAge);
}

export function filteredMoreThan() {
    document.getElementById('content').innerText = "";
    for (var i = 0; i < byAge.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="employee-`+i+`
            <p id="first-name-`+i+`">Name: `+byAge[i].name.first+" "+byAge[i].name.last+`</p>
            <p id="number-`+i+`">Cell: `+byAge[i].cell+`</p>
            <p id="email-`+i+`">Email: `+byAge[i].email+`</p>
            <img id="image-`+i+`" src="`+byAge[i].picture.thumbnail+`">
        </div>
        `;
        document.getElementById('content').appendChild(div);
    }
}
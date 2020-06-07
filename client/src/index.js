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
            filteredBy(results)
        })
}

export function filteredBy(a) {
    document.getElementById('content').innerText = "";
    for (var i = 0; i < a.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="employee-`+i+`>   
            <p id="name-`+i+`">Name: `+a[i].name.first+" "+a[i].name.last+`</p>
            <p id="number-`+i+`">Cell: `+a[i].cell+`</p>
            <p id="email-`+i+`">Email: `+a[i].email+`</p>
            <img id="image-`+i+`" src="`+a[i].picture.thumbnail+`">
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
    filteredGenderRow()
    console.log(byGender);
}

export function showFemaleOnly() {
    byGender = [];
    for (var i = 0; i < results.length; i++) {
        if (results[i].gender === "female") {
            byGender.push(results[i]);
        }
    }
    filteredGenderRow()
    console.log(byGender);
}

export function filteredGenderRow() {
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
    filteredBy(byCity)
    console.log(byCity);
}

export function lessThanAge() {
    byAge = [];
    var input = document.getElementById('input-bar').value;
    for (var i = 0; i < results.length; i++) {
        if (results[i].dob.age <= input) {
            byAge.push(results[i]);
        }
    }
    filteredBy(byAge)
    console.log(byAge);
}

export function moreThanAge() {
    byAge = [];
    var input = document.getElementById('input-bar').value;
    for (var i = 0; i < results.length; i++) {
        if (results[i].dob.age >= input) {
            byAge.push(results[i]);
        }
    }
    filteredBy(byAge)
    console.log(byAge);
}

export function ageAscending() {
    results.sort(function(a,b){
        return parseFloat(a.dob.age) - parseFloat(b.dob.age);
    })
    filteredBy(results)
}

export function ageDescending() {
    results.sort(function(a,b){
        return parseFloat(b.dob.age) - parseFloat(a.dob.age);
    })
    filteredBy(results)
}

export function nameAscending() {
    results.sort(function(a,b){
        var textA = a.name.first;
        var textB = b.name.first;
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    filteredBy(results)
}

export function nameDescending() {
    results.sort(function(a,b){
        var textA = b.name.first;
        var textB = a.name.first;
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    filteredBy(results)
}
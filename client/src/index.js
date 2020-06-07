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
    filteredBy(byGender)
}

export function showFemaleOnly() {
    byGender = [];
    for (var i = 0; i < results.length; i++) {
        if (results[i].gender === "female") {
            byGender.push(results[i]);
        }
    }
    filteredBy(byGender)
}

export function switchGender() {
    if (byGender.length == 0) {
        showMaleOnly()
    }
    else if (byGender[0].gender === "male") {
        showFemaleOnly()
    }
    else if (byGender[0].gender === "female") {
        showMaleOnly()
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

export function switchAge() {
    if (results[0].dob.age < 30) {
        ageDescending()
        console.log(results[0].dob.age)
    }
    else if (results[0].dob.age > 30) {
        ageAscending()
        console.log(results[0].dob.age)
    }
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

export function testing() {
    console.log("testing")
}
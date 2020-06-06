import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from 'axios'
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

var results;
var count;

export function find() {
    var userInput = document.getElementById("search-bar").value;
    var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + userInput;
    return axios
        .get(queryURL).then(response => {
            results = response.data.items;
            count = results.length;
            console.log("number of books: " + count);
            console.log(results)
            newBookRow()
            //updateRowData()
            return response.data;
        })
}

export function newBookRow() {
    for (var i = 0; i < results.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="book-`+i+`
            <p id="title-`+i+`">Title: `+results[i].volumeInfo.title+`</p>
            <p id="author-`+i+`">Author: `+results[i].volumeInfo.authors[0]+`</p>
        </div>
        `;
        document.getElementById('content').appendChild(div);
    }
}

export function updateRowData() {
    document.getElementById("title-").innerText = results[0].volumeInfo.title;
}
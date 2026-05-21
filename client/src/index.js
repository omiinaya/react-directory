     1|import React from "react";
     2|import ReactDOM from "react-dom";
     3|import "./index.css";
     4|import App from "./App";
     5|import axios from "axios";
     6|import registerServiceWorker from "./registerServiceWorker";
     7|
     8|ReactDOM.render(<App />, document.getElementById("root"));
     9|registerServiceWorker();
    10|
    11|var results;
    12|var byGender = [];
    13|var byCity = [];
    14|var byState = [];
    15|var byPostcode = [];
    16|var isNameSorted = false;
    17|var isAgeSorted = false;
    18|
    19|export function start() {
    20|  var queryURL = "https://randomuser.me/api/?results=50&nat=us";
    21|  return axios.get(queryURL).then((response) => {
    22|    results = response.data.results;
    23|    filteredBy(results);
    24|  });
    25|}
    26|
    27|export function filteredBy(a) {
    28|  document.getElementById("content").innerText = "";
    29|  for (var i = 0; i < a.length; i++) {
    30|    const div = document.createElement("div");
    31|    //div.setAttribute("id", "employee-" + i + "")
    32|    div.setAttribute("class", "card");
    33|    div.innerHTML =
    34|      `
    35|            <img id="image-` +
    36|      i +
    37|      `" src="` +
    38|      a[i].picture.thumbnail +
    39|      `">  
    40|            <div id="name-` +
    41|      i +
    42|      `">Name: ` +
    43|      a[i].name.first +
    44|      " " +
    45|      a[i].name.last +
    46|      `</div>
    47|            <div id="number-` +
    48|      i +
    49|      `">Cell: ` +
    50|      a[i].cell +
    51|      `</div>
    52|            <div id="number-` +
    53|      i +
    54|      `">City: ` +
    55|      a[i].location.city +
    56|      `</div>
    57|            <div id="number-` +
    58|      i +
    59|      `">State: ` +
    60|      a[i].location.state +
    61|      `</div>
    62|            <div id="number-` +
    63|      i +
    64|      `">Age: ` +
    65|      a[i].dob.age +
    66|      `</div>
    67|            <div id="email-` +
    68|      i +
    69|      `">Email: ` +
    70|      a[i].email +
    71|      `</div>
    72|        `;
    73|    document.getElementById("content").appendChild(div);
    74|  }
    75|}
    76|
    77|export function showMaleOnly() {
    78|  byGender = [];
    79|  for (var i = 0; i < results.length; i++) {
    80|    if (results[i].gender === "male") {
    81|      byGender.push(results[i]);
    82|    }
    83|  }
    84|  filteredBy(byGender);
    85|  document.getElementById("switch-gender-text").innerText =
    86|    "Filter by Gender ⚩";
    87|}
    88|
    89|export function showFemaleOnly() {
    90|  byGender = [];
    91|  for (var i = 0; i < results.length; i++) {
    92|    if (results[i].gender === "female") {
    93|      byGender.push(results[i]);
    94|    }
    95|  }
    96|  filteredBy(byGender);
    97|  document.getElementById("switch-gender-text").innerText =
    98|    "Filter by Gender ⚨";
    99|}
   100|
   101|export function showByLocation() {
   102|  var cityRadio = document.getElementById("radio-city").checked;
   103|  var stateRadio = document.getElementById("radio-state").checked;
   104|  var postcodeRadio = document.getElementById("radio-postcode").checked;
   105|  if (cityRadio) {
   106|    searchByCity();
   107|  } else if (stateRadio) {
   108|    searchByState();
   109|  } else if (postcodeRadio) {
   110|    searchByPostcode();
   111|  } else {
   112|    document.getElementById("radio-city").checked = true;
   113|    searchByCity();
   114|  }
   115|}
   116|
   117|export function searchByCity() {
   118|  byCity = [];
   119|  var input = document.getElementById("input-bar").value;
   120|  for (var i = 0; i < results.length; i++) {
   121|    if (results[i].location.city === input) {
   122|      byCity.push(results[i]);
   123|    }
   124|  }
   125|  filteredBy(byCity);
   126|}
   127|
   128|export function searchByState() {
   129|  byState = [];
   130|  var input = document.getElementById("input-bar").value;
   131|  for (var i = 0; i < results.length; i++) {
   132|    if (results[i].location.state === input) {
   133|      byState.push(results[i]);
   134|    }
   135|  }
   136|  filteredBy(byState);
   137|}
   138|
   139|export function searchByPostcode() {
   140|  byPostcode = [];
   141|  var input = document.getElementById("input-bar").value;
   142|  for (var i = 0; i < results.length; i++) {
   143|    if (results[i].location.postcode == input) {
   144|      byPostcode.push(results[i]);
   145|    }
   146|  }
   147|  filteredBy(byPostcode);
   148|}
   149|
   150|export function ageAscending() {
   151|  isAgeSorted = true;
   152|  results.sort(function (a, b) {
   153|    return parseFloat(a.dob.age) - parseFloat(b.dob.age);
   154|  });
   155|  filteredBy(results);
   156|  document.getElementById("switch-age-text").innerText = "Sort by Age ▼";
   157|}
   158|
   159|export function ageDescending() {
   160|  isAgeSorted = true;
   161|  results.sort(function (a, b) {
   162|    return parseFloat(b.dob.age) - parseFloat(a.dob.age);
   163|  });
   164|  filteredBy(results);
   165|  document.getElementById("switch-age-text").innerText = "Sort by Age ▲";
   166|}
   167|
   168|export function nameAscending() {
   169|  isNameSorted = true;
   170|  results.sort(function (a, b) {
   171|    var textA = a.name.first;
   172|    var textB = b.name.first;
   173|    return textA < textB ? -1 : textA > textB ? 1 : 0;
   174|  });
   175|  filteredBy(results);
   176|  document.getElementById("switch-name-text").innerText = "Sort by Name ▼";
   177|}
   178|
   179|export function nameDescending() {
   180|  isNameSorted = true;
   181|  results.sort(function (a, b) {
   182|    var textA = b.name.first;
   183|    var textB = a.name.first;
   184|    return textA < textB ? -1 : textA > textB ? 1 : 0;
   185|  });
   186|  filteredBy(results);
   187|  document.getElementById("switch-name-text").innerText = "Sort by Name ▲";
   188|}
   189|
   190|export function switchGender() {
   191|  if (byGender.length === 0) {
   192|    showMaleOnly();
   193|  } else if (byGender[0].gender === "male") {
   194|    showFemaleOnly();
   195|  } else if (byGender[0].gender === "female") {
   196|    showMaleOnly();
   197|  }
   198|}
   199|
   200|export function switchAge() {
   201|  if (isAgeSorted === false) {
   202|    ageDescending();
   203|  } else if (isAgeSorted === true && results[0].dob.age < 30) {
   204|    ageDescending();
   205|  } else if (isAgeSorted === true && results[0].dob.age > 30) {
   206|    ageAscending();
   207|  }
   208|}
   209|
   210|export function switchName() {
   211|  var currentFirst = results[0].name.first;
   212|  if (isNameSorted === false) {
   213|    nameAscending();
   214|  } else if (isNameSorted === true && currentFirst.charAt(0) === "A") {
   215|    nameDescending();
   216|  } else if (isNameSorted === true && !(currentFirst.charAt(0) === "A")) {
   217|    nameAscending();
   218|  }
   219|}
   220|
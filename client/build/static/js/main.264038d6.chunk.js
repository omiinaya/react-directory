(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(58)},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(22),o=n.n(i),c=(n(31),n(23)),l=n(1);n(32),n(33);var d=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},r.a.createElement("p",null,"Copyright \xa9 2019 Omar Minaya. All rights reserved."))))};n(34);var u=function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("a",{href:"/"},"React Directory"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{id:"switch-name-text",onClick:j},"Sort by Name \u25b2")),r.a.createElement("li",null,r.a.createElement("div",{id:"switch-age-text",onClick:M},"Sort by Age \u25bc"))),r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",null,r.a.createElement("div",{id:"switch-gender-text",onClick:D},"Filter by Gender \u26a8"))))};n(35);var s=function(){return k(),r.a.createElement("div",{className:"Search"},r.a.createElement("center",null,r.a.createElement("div",null,"Search By:"),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"options",id:"radio-city"}),"City"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"options",id:"radio-state"}),"State"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"options",id:"radio-postcode"}),"Postcode")),r.a.createElement("input",{type:"text",id:"input-bar"}),r.a.createElement("button",{onClick:S},"Submit")),r.a.createElement("div",{id:"content"}))};var m,f=function(){return r.a.createElement(c.a,null,r.a.createElement(u,null),r.a.createElement(l.a,{exact:!0,path:"/",component:s}),r.a.createElement(l.a,{exact:!0,path:"/search",component:s}),r.a.createElement(d,null))},g=n(25),h=n.n(g),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n.d(t,"start",function(){return k}),n.d(t,"filteredBy",function(){return I}),n.d(t,"showMaleOnly",function(){return A}),n.d(t,"showFemaleOnly",function(){return N}),n.d(t,"showByLocation",function(){return S}),n.d(t,"searchByCity",function(){return C}),n.d(t,"searchByState",function(){return F}),n.d(t,"searchByPostcode",function(){return T}),n.d(t,"ageAscending",function(){return G}),n.d(t,"ageDescending",function(){return L}),n.d(t,"nameAscending",function(){return O}),n.d(t,"nameDescending",function(){return W}),n.d(t,"switchGender",function(){return D}),n.d(t,"switchAge",function(){return M}),n.d(t,"switchName",function(){return j}),o.a.render(r.a.createElement(f,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");v?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):E(e)})}}();var p=[],y=[],w=[],b=[],B=!1,x=!1;function k(){return h.a.get("https://randomuser.me/api/?results=50&nat=us").then(function(e){I(m=e.data.results)})}function I(e){document.getElementById("content").innerText="";for(var t=0;t<e.length;t++){var n=document.createElement("div");n.setAttribute("class","card"),n.innerHTML='\n            <img id="image-'+t+'" src="'+e[t].picture.thumbnail+'">  \n            <div id="name-'+t+'">Name: '+e[t].name.first+" "+e[t].name.last+'</div>\n            <div id="number-'+t+'">Cell: '+e[t].cell+'</div>\n            <div id="number-'+t+'">City: '+e[t].location.city+'</div>\n            <div id="number-'+t+'">State: '+e[t].location.state+'</div>\n            <div id="number-'+t+'">Age: '+e[t].dob.age+'</div>\n            <div id="email-'+t+'">Email: '+e[t].email+"</div>\n        ",document.getElementById("content").appendChild(n)}}function A(){p=[];for(var e=0;e<m.length;e++)"male"===m[e].gender&&p.push(m[e]);I(p),document.getElementById("switch-gender-text").innerText="Filter by Gender \u26a9"}function N(){p=[];for(var e=0;e<m.length;e++)"female"===m[e].gender&&p.push(m[e]);I(p),document.getElementById("switch-gender-text").innerText="Filter by Gender \u26a8"}function S(){var e=document.getElementById("radio-city").checked,t=document.getElementById("radio-state").checked,n=document.getElementById("radio-postcode").checked;e?C():t?F():n?T():(document.getElementById("radio-city").checked=!0,C())}function C(){y=[];for(var e=document.getElementById("input-bar").value,t=0;t<m.length;t++)m[t].location.city===e&&y.push(m[t]);I(y)}function F(){w=[];for(var e=document.getElementById("input-bar").value,t=0;t<m.length;t++)m[t].location.state===e&&w.push(m[t]);I(w)}function T(){b=[];for(var e=document.getElementById("input-bar").value,t=0;t<m.length;t++)m[t].location.postcode==e&&b.push(m[t]);I(b)}function G(){x=!0,m.sort(function(e,t){return parseFloat(e.dob.age)-parseFloat(t.dob.age)}),I(m),document.getElementById("switch-age-text").innerText="Sort by Age \u25bc"}function L(){x=!0,m.sort(function(e,t){return parseFloat(t.dob.age)-parseFloat(e.dob.age)}),I(m),document.getElementById("switch-age-text").innerText="Sort by Age \u25b2"}function O(){B=!0,m.sort(function(e,t){var n=e.name.first,a=t.name.first;return n<a?-1:n>a?1:0}),I(m),document.getElementById("switch-name-text").innerText="Sort by Name \u25bc"}function W(){B=!0,m.sort(function(e,t){var n=t.name.first,a=e.name.first;return n<a?-1:n>a?1:0}),I(m),document.getElementById("switch-name-text").innerText="Sort by Name \u25b2"}function D(){0===p.length?A():"male"===p[0].gender?N():"female"===p[0].gender&&A()}function M(){!1===x?L():!0===x&&m[0].dob.age<30?L():!0===x&&m[0].dob.age>30&&G()}function j(){var e=m[0].name.first;!1===B?O():!0===B&&"A"===e.charAt(0)?W():!0===B&&"A"!==e.charAt(0)&&O()}}},[[26,1,2]]]);
//# sourceMappingURL=main.264038d6.chunk.js.map
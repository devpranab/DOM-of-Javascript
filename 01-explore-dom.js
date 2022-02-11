//DOM - Document Object Model - which communicate with Html dom(tree of Nodes)
//The HTML DOM Tree of Objects
//DOM methods are actions
//DOM properties are values

/*
let val;
val = this;
val = window;
val = window.document;
val = document.all;
val = document.all[0];
val = document.all[1];
val = document.all[2];
val = document.all[3];
val = document.all.length;
val = document.title;
val = document.head;
val = document.body;
val = document.doctype;
val = document.URL;
val = document.domain;
val = document.characterSet;
val = document.contentType;
val = document.forms;
val = document.forms[0];
val = document.forms[1];
val = document.forms[0].method;
val = document.forms[0].action;
val = document.links;
val = document.links[0];
val = document.links[1];
val = document.links[2];
val = document.links[0].href;
val = document.links[0].className;
val = document.links[0].classList;
val = document.images;
val = document.scripts;
val = document.scripts[0];
val = document.scripts[1];
val = document.scripts[2];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute("src");
val = document.scri;
val = document.readyState;
val = document.referrer;
console.log(val);

//iteration of document.links
// first convert array because of forEach f() works with array only
links = document.links;
let linkArray = Array.from(links);
linkArray.forEach(function(link){
console.log(link);
});
console.log(links);
*/

/*
Changing HTML Elements
Property	Description
element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
element.style.property = new style	Change the style of an HTML element
Method	Description
element.setAttribute(attribute, value)	Change the attribute value of an HTML element
*/

/*
Adding and Deleting Elements
Method	Description
document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(new, old)	Replace an HTML element
document.write(text)	Write into the HTML output stream
*/

/*
document.getElementById(id).onclick = function(){code}	Adding event handler code to an onclick event
*/
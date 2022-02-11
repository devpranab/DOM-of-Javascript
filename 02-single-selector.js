//document.getElementsById()
let val;
let val = document.getElementsById("doc-title");
let val = document.getElementsById("doc-title").id;
console.log(val);


//changing style
val = document.getElementsById("doc-title").style.background = "#333";
val = document.getElementsById("doc-title").style.color = "#fff";
val = document.getElementsById("doc-title").style.padding = "5px";


//changing content
val = document.getElementsById("doc-title").textContent = "New";
val = document.getElementsById("doc-title").innerText = "Again text";
val = document.getElementsById("doc-title").innerHTML = "<i>Again text</i>";
console.log(val);


//changing content-shortcut
val = document.getElementsById("doc-title");
val.textContent = "New text"


// document.querySelector()
val = document.querySelector("#doc-title");
val = document.querySelectorAll("p.intro");
val = document.querySelector(".topic");
val = document.querySelector("h3");
val = document.querySelector("ol");
val = document.querySelector("li"); //or
val = document.querySelector(" ol li");
val.style.background = "red";
val.style.color = "white";

val = document.querySelector("ol li:last-child");
val = document.querySelector("ol li:nth-child(1)");
val = document.querySelector("ol li:nth-child(2)");
val = document.querySelector("ol li:nth-child(2)").innerText = "innerOk";
console.log(val);


//Don`t run these code , use for notes with reference
//Add
//create the element
/*
let olItem = document.createElement("li");
olItem.className = "new-li";
olItem.setAttribute("title", "title to new li");
olItem.appendChild(document.createTextNode("JS"));
console.log(olIem);
*/


/*
//Replace
let newHeading = document.createElement("h1");
newHeading.appendChild(document.createTextNode("New Heading"));
newHeading.className = "simple-class";

let oldHeading = document.querySelector("h3");
let parent = document.querySelector(".container");

//parent = oldHeading, parentElement
parent.replaceChild(newHeading, oldHeading);

console.log(newHeading);
console.log(oldHeading);
console.log(parent);
*/

/*
//Remove
let listItems = document.querySelectorAll("li");
let lists = document.querySelector("ul");

listItems[0].remove();
listItems[1].remove();
listItems[4].remove();
*/

//removeChild
/*
lists.removeChild(listItem[4])
//new add no overwrite
lists.classList.add("add-class-new")

lists.classList.remove("simple-class");

console.log(lists);
console.log(listItem);
*/

//check attribute
/*
let val = list.hasAttribute("title"); //return true or false
console.log(val);
*/
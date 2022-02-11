//multi selector DOM
//document.getElementsByClassName()
//Note: don`t work with full array, works with single
/*
let lists = document.getElementsByClassName("topic");
console.log(lists);
lists[0].style.background = "blue";
lists[0].style.color = "white";
console.log(lists[0]);
*/

/*
//document.getElementsByTagName()
let lists = document.getElementsByTagName("li");
console.log(lists);
console.log(lists[0]);
console.log(lists[1]);
console.log(lists[2]);
*/

/*
//iterating li, but first covert into array
lists = document.querySelector("ol").getElementsByTagName("li");

let lis = Array.from(lists);
lis.forEach(function(item){
    console.log(item);
});
console.log(list);
*/

/*
//id - #
//class - .
// document.querySelectorAll()
lists = document.querySelectorAll(".topic");
lists = document.querySelectorAll(".ol li");
console.log(lists);

//apply forEach
lists.forEach(function(item){
    console.log(item);
});
console.log(list);
*/


liodd = document.querySelectorAll("li:nth-child(odd)");
console.log(lists);
lieven = document.querySelectorAll("li:nth-child(even)");
console.log(lists);
//apply forEach
liodd.forEach(function(item){
    console.log(item);
    item.style.background = "green";
});
console.log(list);
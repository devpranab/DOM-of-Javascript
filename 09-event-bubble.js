//Event bubbling
document.getElementById("first").addEventListener("click", function (){
console.log("first item clicked");

event.stopPropagation();
//event.stopImmediatePropagation
});

document.getElementById("mid-content").addEventListener("click", function (){
console.log("container clicked");
});

document.getElementById("myList").addEventListener("click", function (){
    console.log("ul clicked");
});
    


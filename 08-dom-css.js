//as dynamic all class

let authors = document.getElementsByClassName("author");
for(let i = 0; i < authors.length; i++){
    let element = authors[i];
    console.log(element);
    console.log(element.innerHTML);

    element.style.color = "blue";
    element.style.background = "lightblue";
    element.innerHTML = "Lekhok-" + i;
}
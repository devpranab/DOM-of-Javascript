//more event bubble
//why we learnt event bubble concepts

//target and remove
/*
let items = document.getElementsByClassName("item");

for(let i = 0; i<items.length; i++){
    let item = items[i];
    item.addEventListener("click", function(e){
        //console.log(this, e.target.innerText);
        //console.log(this, e.target.parentNode);
        e.target.parentNode.removeChild(e.target);

    })
}
*/
//use trick of event bubble
document.getElementById("myList").addEventListener("click", function(e){
    //console.log(this, e.target);
    e.target.parentNode.removeChild(e.target);

})

//add new item
document.getElementById("addbtn").addEventListener("click", function(e){
    let itemsParent = document.getElementById("myList");
    let newItem = document.createElement("li");
    newItem.innerText = "Brand new item";
    itemsParent.appendChild(newItem);
});



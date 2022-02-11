//More events
/*
document.querySelector(".container1").addEventListener("click", smsClick);
document.querySelector(".container1").style.background = "red";

function smsClick(e){
    let val = 0;
    val = e.target; //this - same indication
    val = e.target.id;
    val = e.type;
    val = e.timeStamp;
    val = e.clientY;
    val = e.clientX;
    val = e.offset;
    val = e.offsetX;
    val = e.offsetY;
    val = this;
    this.style.background = `#${e.offsetX}`

    console.log(val);
}

//We can use event also div, not only button
*/
document.querySelector("#name").addEventListener("focus", test);
document.querySelector("#name").addEventListener("keyup", test2);

function test(e){
    console.log("focus done");
    this.style.background = "pink";
}

function test2(e){
    console.log(this.value);
    document.getElementById("demo").innerText = this.value;
}
//Events of Javascript

function message(){
    console.log("mouseover button");
}

//use of eventlistener - no need set in html dom onclick
//step 01: select
//step 02: addeventlistener
//step 03: define function
document.getElementById("smsBtn").addEventListener("click", smsClick);

function smsClick(){
    console.log("sms cliked");
}
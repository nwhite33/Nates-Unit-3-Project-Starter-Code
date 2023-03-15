/* Declare variables below to save the different sections (divs) of your story*/
let optionOne=document.querySelector(".option-one");
let optionTwo=document.querySelector(".option-two");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneEndScreen= document.querySelector(".option-one-end");
let optionTwoEndScreen= document.querySelector(".option-two-end");
optionOne.onclick = function() {
    optionOneScreen.style.display = "block";
};
optionOneScreen.onclick = function() {
    optionOneEndScreen.style.display = "block";
};


optionTwo.onclick=function(){
 optionTwoScreen.style.display = "block";
    optionTwoEndScreen.style.display = "none";
};

optionTwoScreen.onclick = function() {
    optionTwoEndScreen.style.display = "block";
};

/*
INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/



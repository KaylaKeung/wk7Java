// // we'll be commenting our code, creating directions for someone else
// // comment

// console.log("Hello World")


// // variables, are ingredients

// //strings
// var myName = "Kayla";

// //numbers
// let myNumber = 10;

// //booleans
// let isItDarkOutside = false;
// let isItLightOutside = true;




// //conditions
// if (itIsDarkOutside){
//     // change the website to the dark mode
// }else{
//     // change the website to light mode
// }



// //funtions
// function myRecipe(){
//     // instructions for what to do
// }
// myRecipe();



// when someone clicks on the red circle, we want the background to turn red

// define our first variable, the red circle
let redCircle = document.querySelector(".red-circle");

// what happens when sb interacts with the red circle
function turnRed() {
    document.body.style.background = "red";
    document.body.style.color = "white";
}

// add an event listener
// when someone clicks on the red circle, change the background red

redCircle.addEventListener("click", turnRed);



//copy for blue click
let blueCircle = document.querySelector(".blue-circle");

function turnBlue() {
    document.body.style.background = "blue";
    document.body.style.color = "pink";
}
blueCircle.addEventListener("click", turnBlue);



//white
let whiteCircle = document.querySelector(".white-circle");

function turnWhite() {
    document.body.style.background = "white";
    document.body.style.color= "black";
}

whiteCircle.addEventListener("click", turnWhite);



//black
let blackCircle = document.querySelector(".black-circle");

function turnBlack() {
    document.body.style.background = "black";
    document.body.style.color = "white";

}

blackCircle.addEventListener("click", turnBlack);



//images
// when users hover on cornor, cat appears
let flyingCat = document.querySelector(".cat")
let hoverCorner = document.querySelector(".show-cat")

hoverCorner.addEventListener("mouseover", function(){
    flyingCat.classList.add("active");
})

// when users hovers off, it disappers 

hoverCorner.addEventListener("mouseout", hideCat)
function hideCat(){
    flyingCat.classList.remove("active")
}

let dogs = document.querySelector(".dogs")
let increaseDogImage = document.querySelector(".bigger-dogs")

increaseDogImage.addEventListener("mouseover", function(){
    dogs.classList.add("active");
})

// when users hovers off, it disappers 

increaseDogImage.addEventListener("mouseout", smallDogs)
function smallDogs(){
    dogs.classList.remove("active")
}


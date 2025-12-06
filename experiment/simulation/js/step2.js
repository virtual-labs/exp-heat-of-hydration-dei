// STEP 2 

// const nextToStep2 = document.querySelector("#nextToStep2");

const step2 = document.querySelector("#step2");
const instructionsStep2 = document.querySelector("#instructionsStep2");

// images of step2
const png1Step2 = document.querySelector("#png1Step2");
const png2Step2 = document.querySelector("#png2Step2");
const png3Step2 = document.querySelector("#png3Step2");
const png4Step2 = document.querySelector("#png4Step2");
const png5Step2 = document.querySelector("#png5Step2");
const png6Step2 = document.querySelector("#png6Step2");

// gifs of step2
const gif1Step2 = document.querySelector("#gif1Step2");
const gif2Step2 = document.querySelector("#gif2Step2");
const gif3Step2 = document.querySelector("#gif3Step2");
const gif4Step2 = document.querySelector("#gif4Step2");

// arrows of step2
const arrNext = document.querySelector(".arr-next");
const arr1Step2 = document.querySelector("#arr1Step2");
const arr2Step2 = document.querySelector("#arr2Step2");
const arr3Step2 = document.querySelector("#arr3Step2");
const arr4Step2 = document.querySelector("#arr4Step2");
const arr5Step2 = document.querySelector("#arr5Step2");
const arr6Step2 = document.querySelector("#arr6Step2");

// transboxes of step2
const trans1Step2 = document.querySelector("#trans1Step2");
const trans2Step2 = document.querySelector("#trans2Step2");
const trans3Step2 = document.querySelector("#trans3Step2");
const trans4Step2 = document.querySelector("#trans4Step2");
const trans5Step2 = document.querySelector("#trans5Step2");
const trans6Step2 = document.querySelector("#trans6Step2");

// buttons of step 2
const nextToStep3 = document.querySelector("#nextToStep3");

addEventListener("DOMContentLoaded", (evt) => {
    step2.style.visibility = "visible";
    instructionsStep2.textContent = "For each determination, about 7.0 g of ignited oxide shall again be heated to 900 to 950°C for 5 minutes.";
    
    png1Step2.style.visibility = "visible";
    trans1Step2.style.visibility = "visible";
    arr1Step2.style.visibility = "visible";
});

trans1Step2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step2.style.visibility = "hidden";
    png1Step2.style.visibility = "hidden";

    png2Step2.style.visibility = "visible";

    setTimeout(()=>{
        png2Step2.style.visibility = "visible";
        arr2Step2.style.visibility = "visible";
        trans2Step2.style.visibility = "visible";
    }, 10);
});

trans2Step2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step2.style.visibility = "hidden";
    png2Step2.style.visibility = "hidden";

    gif1Step2.style.visibility = "visible";

    setTimeout(() => {
        gif1Step2.style.visibility = "hidden";
        png3Step2.style.visibility = "visible";
        arr3Step2.style.visibility = "visible";
        trans3Step2.style.visibility = "visible";
    }, 3700); //3700
});

trans3Step2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step2.style.visibility = "hidden";
    png3Step2.style.visibility = "hidden";

    png4Step2.style.visibility = "visible";

    setTimeout(() => {
        arr4Step2.style.visibility = "visible";
        trans4Step2.style.visibility = "visible";
    }, 10);
});

trans4Step2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step2.style.visibility = "hidden";
    png4Step2.style.visibility = "hidden";

    gif2Step2.style.visibility = "visible";

    setTimeout(() => {
        gif2Step2.style.visibility = "hidden";
        png5Step2.style.visibility = "visible";
        arr5Step2.style.visibility = "visible";
        trans5Step2.style.visibility = "visible";
    }, 10500); //10500
});

trans5Step2.addEventListener("click", (evt) =>{
    evt.target.style.visibility = "hidden";
    arr5Step2.style.visibility = "hidden";
    png5Step2.style.visibility = "hidden";

    gif3Step2.style.visibility = "visible";

    setTimeout(()=>{
        gif3Step2.style.visibility = "hidden";
        png6Step2.style.visibility = "visible";
        instructionsStep2.textContent = "Cool it in a desiccator containing anhydrous calcium chloride for 2.5 to 5 hours.";
        arr6Step2.style.visibility = "visible";
        trans6Step2.style.visibility = "visible";
    }, 1700); //1700
});

trans6Step2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr6Step2.style.visibility = "hidden";
    png6Step2.style.visibility = "hidden"

    gif4Step2.style.visibility = "visible";

    setTimeout(() => {
        nextToStep3.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 12000); //12000
});

nextToStep3.addEventListener("click", (evt) => {
    window.location.href = "./step3.html";
});
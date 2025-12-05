// STEP 4

const step4 = document.querySelector("#step4");
const instructionsStep4 = document.querySelector("#instructionsStep4");

// images of step4
const png1Step4 = document.querySelector("#png1Step4");
const png2Step4 = document.querySelector("#png2Step4");
const png3Step4 = document.querySelector("#png3Step4");
const png4Step4 = document.querySelector("#png4Step4");
const png5Step4 = document.querySelector("#png5Step4");
const png6Step4 = document.querySelector("#png6Step4");
const png7Step4 = document.querySelector("#png7Step4");

// gifs of step4
const gif1Step4 = document.querySelector("#gif1Step4");
const gif2Step4 = document.querySelector("#gif2Step4");
const gif3Step4 = document.querySelector("#gif3Step4");
const gif4Step4 = document.querySelector("#gif4Step4");
const gif5Step4 = document.querySelector("#gif5Step4");
const gif6Step4 = document.querySelector("#gif6Step4");
const gif7Step4 = document.querySelector("#gif7Step4");
const gif8Step4 = document.querySelector("#gif8Step4");

// arrows of step4
const arrNext = document.querySelector(".arr-next");
const arr1Step4 = document.querySelector("#arr1Step4");
const arr2Step4 = document.querySelector("#arr2Step4");
const arr3Step4 = document.querySelector("#arr3Step4");
const arr4Step4 = document.querySelector("#arr4Step4");
const arr5Step4 = document.querySelector("#arr5Step4");
const arr6Step4 = document.querySelector("#arr6Step4");
const arr7Step4 = document.querySelector("#arr7Step4");

// transboxes of step4
const trans1Step4 = document.querySelector("#trans1Step4");
const trans2Step4 = document.querySelector("#trans2Step4");
const trans3Step4 = document.querySelector("#trans3Step4");
const trans4Step4 = document.querySelector("#trans4Step4");
const trans5Step4 = document.querySelector("#trans5Step4");
const trans6Step4 = document.querySelector("#trans6Step4");
const trans7Step4 = document.querySelector("#trans7Step4");

// next to step5
const nextToStep5 = document.querySelector("#nextToStep5");

addEventListener("DOMContentLoaded", (evt) => {
    step4.style.visibility = "visible";
    instructionsStep4.textContent = "Tare the weighing balance and Weigh 60 g of cement accurately."
    png1Step4.style.visibility = "visible";
    trans1Step4.style.visibility = "visible";
    arr1Step4.style.visibility = "visible";
});

trans1Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step4.style.visibility = "hidden";
    png1Step4.style.visibility = "hidden";

    png2Step4.style.visibility = "visible";
    trans2Step4.style.visibility = "visible";
    arr2Step4.style.visibility = "visible";
});

trans2Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step4.style.visibility = "hidden";
    png2Step4.style.visibility = "hidden";

    gif1Step4.style.visibility = "visible";

    setTimeout(()=>{
        instructionsStep4.textContent = "Measure 24 ml of distilled water into the cement and mix thoroughly to a uniform consistency."
        gif1Step4.style.visibility = "hidden";
        png3Step4.style.visibility = "visible";
        trans3Step4.style.visibility = "visible";
        arr3Step4.style.visibility = "visible";
    }, 100); //4500
});

trans3Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step4.style.visibility = "hidden";
    gif1Step4.style.visibility = "hidden";

    gif2Step4.style.visibility = "visible";

    setTimeout(()=>{
        trans4Step4.style.visibility = "visible";
        arr4Step4.style.visibility = "visible";
    }, 16250);
});

trans4Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step4.style.visibility = "hidden";
    gif3Step4.style.visibility = "hidden";

    gif4Step4.style.visibility = "visible";

    setTimeout(()=>{
        trans5Step4.style.visibility = "visible";
        arr5Step4.style.visibility = "visible";
    }, 6000);
});

trans5Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step4.style.visibility = "hidden";
    gif4Step4.style.visibility = "hidden";

    gif5Step4.style.visibility = "visible";

    setTimeout(()=>{
        trans6Step4.style.visibility = "visible";
        arr6Step4.style.visibility = "visible";
    }, 4500);
});

trans6Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr6Step4.style.visibility = "hidden";
    gif5Step4.style.visibility = "hidden";

    gif6Step4.style.visibility = "visible";

    setTimeout(()=>{
        gif6Step4.style.visibility = "hidden";
        gif7Step4.style.visibility = "visible";
     }, 6000);
 
     setTimeout(() => {
         gif7Step4.style.visibility = "hidden";

         instructionsStep4.visibility = "Weigh the aggregates that have passed through the 20-16mm slot in flakiness gauge."
         png2Step4.style.visibility = "visible";
         trans7Step4.style.visibility = "visible";
         arr7Step4.style.visibility = "visible";
     }, 8500);
});

trans7Step4.addEventListener("click", (evt) =>{
    evt.target.style.visibility = "hidden";
    arr7Step4.style.visibility = "hidden";
    png2Step4.style.visibility = "hidden";

    gif8Step4.style.visibility = "visible";

    setTimeout(() => {
        nextToStep5.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 3000);
});

nextToStep5.addEventListener("click", (evt) => {
    window.location.href = "./step5.html";
});
// mainStep
const startBtn = document.querySelector("#nextToStep1");
const mainStep = document.querySelector("#mainStep");

// STEP 1 

const step1 = document.querySelector("#step1");
const instructionsStep1 = document.querySelector("#instructionsStep1");

// images of step1
const png1Step1 = document.querySelector("#png1Step1");
const png2Step1 = document.querySelector("#png2Step1");
const png3Step1 = document.querySelector("#png3Step1");
const png4Step1 = document.querySelector("#png4Step1");
const png5Step1 = document.querySelector("#png5Step1");
const png6Step1 = document.querySelector("#png6Step1");
const png7Step1 = document.querySelector("#png7Step1");
const png8Step1 = document.querySelector("#png8Step1");
const png9Step1 = document.querySelector("#png9Step1");

// gifs of step1
const gif1Step1 = document.querySelector("#gif1Step1");
const gif2Step1 = document.querySelector("#gif2Step1");
const gif3Step1 = document.querySelector("#gif3Step1");
const gif4Step1 = document.querySelector("#gif4Step1");
const gif5Step1 = document.querySelector("#gif5Step1");
const gif6Step1 = document.querySelector("#gif6Step1");
const gif7Step1 = document.querySelector("#gif7Step1");
const gif8Step1 = document.querySelector("#gif8Step1");

// arrows of step1
const arr1Step1 = document.querySelector("#arr1Step1");
const arr2Step1 = document.querySelector("#arr2Step1");
const arr3Step1 = document.querySelector("#arr3Step1");
const arr4Step1 = document.querySelector("#arr4Step1");
const arr5Step1 = document.querySelector("#arr5Step1");
const arr6Step1 = document.querySelector("#arr6Step1");
const arr7Step1 = document.querySelector("#arr7Step1");
const arr8Step1 = document.querySelector("#arr8Step1");
const arr9Step1 = document.querySelector("#arr9Step1");

// transboxes of step1
const trans1Step1 = document.querySelector("#trans1Step1");
const trans2Step1 = document.querySelector("#trans2Step1");
const trans3Step1 = document.querySelector("#trans3Step1");
const trans4Step1 = document.querySelector("#trans4Step1");
const trans5Step1 = document.querySelector("#trans5Step1");
const trans6Step1 = document.querySelector("#trans6Step1");
const trans7Step1 = document.querySelector("#trans7Step1");
const trans8Step1 = document.querySelector("#trans8Step1");
const trans9Step1 = document.querySelector("#trans9Step1");

// next to step2
const nextToStep2 = document.querySelector("#nextToStep2")
const arrNext = document.querySelector(".arr-next");

//#########################################################################

addEventListener("DOMContentLoaded", (evt) => {
    startBtn.style.visibility = "visible";
});

// step1 

startBtn.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    mainStep.style.visibility = "hidden";

    step1.style.visibility = "visible";
    png1Step1.style.visibility = "visible";
    arr1Step1.style.visibility = "visible";
    trans1Step1.style.visibility = "visible";
    instructionsStep1.innerText = "Inspect the wax lining of the calorimeter for any faults.";
});

trans1Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step1.style.visibility = "hidden";
    png1Step1.style.visibility = "hidden";

    gif1Step1.style.visibility = "visible";

    setTimeout(()=>{
        instructionsStep1.innerText = "Measure 9.6 ± 0.1 ml of hydrofluoric acid into the calorimeter.";
        gif1Step1.style.visibility = "hidden";
        png2Step1.style.visibility = "visible";

        arr2Step1.style.visibility = "visible";
        trans2Step1.style.visibility = "visible";
    }, 4000); //4000
});

trans2Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step1.style.visibility = "hidden";
    gif1Step1.style.visibility = "hidden";

    gif2Step1.style.visibility = "visible";
    
    setTimeout(()=>{
        instructionsStep1.innerText = "Measure 388.0 ± 0.1 ml of 2.0 N nitric acid  into the calorimeter.";        
        gif2Step1.style.visibility = "hidden";

        arr3Step1.style.visibility = "visible";
        trans3Step1.style.visibility = "visible";
        png3Step1.style.visibility = "visible";
    }, 13000); //13000
});

trans3Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step1.style.visibility = "hidden";
    png3Step1.style.visibility = "hidden";

    gif3Step1.style.visibility = "visible";

    setTimeout(()=>{
        instructionsStep1.innerText = "Take a quantity of zinc oxide sufficient for about six determinations. Ignite the zinc oxide for one hour at 900 to 950°C in a muffle furnace.";
        gif3Step1.style.visibility = "hidden";
        png4Step1.style.visibility = "visible";

        arr4Step1.style.visibility = "visible";
        trans4Step1.style.visibility = "visible";
    }, 10500); //10500
});

trans4Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step1.style.visibility = "hidden";
    gif3Step1.style.visibility = "hidden";

    gif4Step1.style.visibility = "visible";
    
    setTimeout(()=>{
        gif4Step1.style.visibility = "hidden";

        arr5Step1.style.visibility = "visible";
        trans5Step1.style.visibility = "visible";
        png5Step1.style.visibility = "visible";
    }, 4000); //4000
});

trans5Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step1.style.visibility = "hidden";
    png5Step1.style.visibility = "hidden";

    png6Step1.style.visibility = "visible";

    setTimeout(()=>{
        png6Step1.style.visibility = "visible";

        arr6Step1.style.visibility = "visible";
        trans6Step1.style.visibility = "visible";
    }, 10); //10
});

trans6Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr6Step1.style.visibility = "hidden";
    png6Step1.style.visibility = "hidden";

    gif5Step1.style.visibility = "visible";
    
    setTimeout(()=>{     
        gif5Step1.style.visibility = "hidden";

        arr7Step1.style.visibility = "visible";
        trans7Step1.style.visibility = "visible";
        png7Step1.style.visibility = "visible";
    }, 2500); //2500
});

trans7Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr7Step1.style.visibility = "hidden";
    png7Step1.style.visibility = "hidden";

    gif6Step1.style.visibility = "visible";

    setTimeout(()=>{
        gif6Step1.style.visibility = "hidden";
        png8Step1.style.visibility = "visible";

        arr8Step1.style.visibility = "visible";
        trans8Step1.style.visibility = "visible";
    }, 9500); //9500
});

trans8Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr8Step1.style.visibility = "hidden";
    gif6Step1.style.visibility = "hidden";

    gif7Step1.style.visibility = "visible";
    
    setTimeout(()=>{
        instructionsStep1.innerText = "Cool the ignited zinc oxide in a desiccator containing anhydrous calcium chloride.";        
        gif7Step1.style.visibility = "hidden";

        arr9Step1.style.visibility = "visible";
        trans9Step1.style.visibility = "visible";
        png9Step1.style.visibility = "visible";
    }, 2000); //2000
});

trans9Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr9Step1.style.visibility = "hidden";
    png9Step1.style.visibility = "hidden";

    gif8Step1.style.visibility = "visible";

    setTimeout(()=>{
        nextToStep2.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 13250); //13250
});

nextToStep2.addEventListener("click", (evt) => {
    window.location.href = "./steps-files/step2.html";
})
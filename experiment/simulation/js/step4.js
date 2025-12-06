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
const png8Step4 = document.querySelector("#png8Step4");
const png9Step4 = document.querySelector("#png9Step4");
const png10Step4 = document.querySelector("#png10Step4");
const png11Step4 = document.querySelector("#png11Step4");
const png12Step4 = document.querySelector("#png12Step4");
const png13Step4 = document.querySelector("#png13Step4");
const png14Step4 = document.querySelector("#png14Step4");
const png15Step4 = document.querySelector("#png15Step4");
const png16Step4 = document.querySelector("#png16Step4");
const png17Step4 = document.querySelector("#png17Step4");
const png18Step4 = document.querySelector("#png18Step4");

// gifs of step4
const gif1Step4 = document.querySelector("#gif1Step4");
const gif2Step4 = document.querySelector("#gif2Step4");
const gif3Step4 = document.querySelector("#gif3Step4");
const gif4Step4 = document.querySelector("#gif4Step4");
const gif5Step4 = document.querySelector("#gif5Step4");
const gif6Step4 = document.querySelector("#gif6Step4");
const gif7Step4 = document.querySelector("#gif7Step4");
const gif8Step4 = document.querySelector("#gif8Step4");
const gif9Step4 = document.querySelector("#gif9Step4");

// arrows of step4
const arrNext = document.querySelector(".arr-next");
const arr1Step4 = document.querySelector("#arr1Step4");
const arr2Step4 = document.querySelector("#arr2Step4");
const arr3Step4 = document.querySelector("#arr3Step4");
const arr4Step4 = document.querySelector("#arr4Step4");
const arr5Step4 = document.querySelector("#arr5Step4");
const arr6Step4 = document.querySelector("#arr6Step4");
const arr7Step4 = document.querySelector("#arr7Step4");
const arr8Step4 = document.querySelector("#arr8Step4");
const arr9Step4 = document.querySelector("#arr9Step4");
const arr10Step4 = document.querySelector("#arr10Step4");
const arr11Step4 = document.querySelector("#arr11Step4");
const arr12Step4 = document.querySelector("#arr12Step4");
const arr13Step4 = document.querySelector("#arr13Step4");

// transboxes of step4
const trans1Step4 = document.querySelector("#trans1Step4");
const trans2Step4 = document.querySelector("#trans2Step4");
const trans3Step4 = document.querySelector("#trans3Step4");
const trans4Step4 = document.querySelector("#trans4Step4");
const trans5Step4 = document.querySelector("#trans5Step4");
const trans6Step4 = document.querySelector("#trans6Step4");
const trans7Step4 = document.querySelector("#trans7Step4");
const trans8Step4 = document.querySelector("#trans8Step4");
const trans9Step4 = document.querySelector("#trans9Step4");
const trans10Step4 = document.querySelector("#trans10Step4");
const trans11Step4 = document.querySelector("#trans11Step4");
const trans12Step4 = document.querySelector("#trans12Step4");
const trans13Step4 = document.querySelector("#trans13Step4");

// next to step5
const nextToStep5 = document.querySelector("#nextToStep5");
const next1 = document.querySelector("#next1");
const next2 = document.querySelector("#next2");
const next3 = document.querySelector("#next3");
const next4 = document.querySelector("#next4");
const next5 = document.querySelector("#next5");
const next6 = document.querySelector("#next6");
const next7 = document.querySelector("#next7");
const next8 = document.querySelector("#next8");


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
    }, 4500); //4500
});

trans3Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step4.style.visibility = "hidden";
    png3Step4.style.visibility = "hidden";

    gif2Step4.style.visibility = "visible";

    setTimeout(()=>{
        instructionsStep4.textContent = "Immediately fill the mixture into three glass or plastic vials. Cork the vials, seal them with wax and store vertically at 27 ± 2°C until testing."
        png4Step4.style.visibility = "visible";
        gif2Step4.style.visibility = "hidden";
        next1.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 16250); //16250
});

next1.addEventListener("click", (evt) => {
    instructionsStep4.textContent = "Weigh a cement sample of about 3.0 g (accurate to ±0.001 g) for the heat of solution test."
    next1.style.visibility = "hidden";
    arrNext.style.visibility = "hidden";
    png4Step4.style.visibility = "hidden";
    png5Step4.style.visibility = "visible";
    trans5Step4.style.visibility = "visible";
    arr5Step4.style.visibility = "visible";
});

trans5Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step4.style.visibility = "hidden";
    png5Step4.style.visibility = "hidden";

    png6Step4.style.visibility = "visible";
    trans6Step4.style.visibility = "visible";
    arr6Step4.style.visibility = "visible";
});


trans6Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr6Step4.style.visibility = "hidden";
    png6Step4.style.visibility = "hidden";

    gif3Step4.style.visibility = "visible";

    setTimeout(()=>{
        instructionsStep4.textContent = "Weigh an additional sample of approximately 7.0 g for determining the loss on ignition."
        gif3Step4.style.visibility = "hidden";
        png7Step4.style.visibility = "visible";
        trans7Step4.style.visibility = "visible";
        arr7Step4.style.visibility = "visible";
     }, 4000); //4000
});

trans7Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr7Step4.style.visibility = "hidden";
    png7Step4.style.visibility = "hidden";

    gif4Step4.style.visibility = "visible";

    setTimeout(()=>{
        instructionsStep4.textContent = "Carry out the temperature-rise determination exactly as described in Step 3 for zinc oxide (using the same calorimeter and correction procedure)."
        gif4Step4.style.visibility = "hidden";
        png8Step4.style.visibility = "visible";
        trans8Step4.style.visibility = "visible";
        arr8Step4.style.visibility = "visible";
     }, 4000); //4000
});

trans8Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr8Step4.style.visibility = "hidden";
    png8Step4.style.visibility = "hidden";

    gif5Step4.style.visibility = "visible";

    setTimeout(()=>{
        gif5Step4.style.visibility = "hidden";
        png9Step4.style.visibility = "visible";
        next2.style.visibility = "visible";
        arrNext.style.visibility = "visible";
     }, 4000); //4000
});

next2.addEventListener("click", (evt) => {
    next2.style.visibility = "hidden";
    arrNext.style.visibility = "hidden";
    png9Step4.style.visibility = "hidden";
    png10Step4.style.visibility = "visible";
    next3.style.visibility = "visible";
    arrNext.style.visibility = "visible";
});

next3.addEventListener("click", (evt) => {
    next3.style.visibility = "hidden";
    arrNext.style.visibility = "hidden";
    png10Step4.style.visibility = "hidden";
    png11Step4.style.visibility = "visible";
    next4.style.visibility = "visible";
    arrNext.style.visibility = "visible";
});

next4.addEventListener("click", (evt) => {
    instructionsStep4.textContent = "Place the cement sample (used for heat of solution) in a muffle furnace and heat it at 900°C for 3-4 hours."
    next4.style.visibility = "hidden";
    arrNext.style.visibility = "hidden";
    png11Step4.style.visibility = "hidden";
    png12Step4.style.visibility = "visible";
    trans9Step4.style.visibility = "visible";
    arr9Step4.style.visibility = "visible";
});

trans9Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr9Step4.style.visibility = "hidden";
    png12Step4.style.visibility = "hidden";

    gif6Step4.style.visibility = "visible";

    setTimeout(()=>{
        gif6Step4.style.visibility = "hidden";
        png13Step4.style.visibility = "visible";
        trans10Step4.style.visibility = "visible";
        arr10Step4.style.visibility = "visible";
     }, 4500); //4500
});

trans10Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr10Step4.style.visibility = "hidden";
    png13Step4.style.visibility = "hidden";

    gif7Step4.style.visibility = "visible";

    setTimeout(()=>{
        instructionsStep4.textContent = "Cool the sample in a desiccator containing anhydrous calcium chloride."
        gif7Step4.style.visibility = "hidden";
        png14Step4.style.visibility = "visible";
        trans11Step4.style.visibility = "visible";
        arr11Step4.style.visibility = "visible";
     }, 2000); //2000
});

trans11Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr11Step4.style.visibility = "hidden";
    png14Step4.style.visibility = "hidden";

    gif8Step4.style.visibility = "visible";

    setTimeout(()=>{
        instructionsStep4.textContent = "Weigh the sample (accurate to the nearest milligram)"        
        gif8Step4.style.visibility = "hidden";
        png15Step4.style.visibility = "visible";
        trans12Step4.style.visibility = "visible";
        arr12Step4.style.visibility = "visible";
     }, 6000); //6000
});

trans12Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr12Step4.style.visibility = "hidden";
    png15Step4.style.visibility = "hidden";

    png16Step4.style.visibility = "visible";
    trans13Step4.style.visibility = "visible";
    arr13Step4.style.visibility = "visible";
});

trans13Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr13Step4.style.visibility = "hidden";
    png16Step4.style.visibility = "hidden";

    gif9Step4.style.visibility = "visible";

    setTimeout(()=>{
        instructionsStep4.textContent = "Calculate the loss of ignition of the cement sample using the formula provided."         
        gif9Step4.style.visibility = "hidden";
        png17Step4.style.visibility = "visible";
        next5.style.visibility = "visible"; 
        arrNext.style.visibility = "visible";   
     }, 3500); //3500
});

next5.addEventListener("click", (evt) => {
    instructionsStep4.textContent = "Calculate the heat of hydration of the cement sample using the formula provided."
    next5.style.visibility = "hidden";
    png17Step4.style.visibility = "hidden";
    png18Step4.style.visibility = "visible";
    nextToStep5.style.visibility = "visible";
});

nextToStep5.addEventListener("click", (evt) => {
    window.location.href = "https://virtual-labs.github.io/exp-heat-of-hydration-dei/posttest.html";
});
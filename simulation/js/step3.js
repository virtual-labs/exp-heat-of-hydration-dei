// STEP 3

const step3 = document.querySelector("#step3");
const instructionsStep3 = document.querySelector("#instructionsStep3");

// images of step3
const png1Step3 = document.querySelector("#png1Step3");
const png2Step3 = document.querySelector("#png2Step3");
const png3Step3 = document.querySelector("#png3Step3");
const png4Step3 = document.querySelector("#png4Step3");
const png5Step3 = document.querySelector("#png5Step3");

// gifs of step3
const gif1Step3 = document.querySelector("#gif1Step3");
const gif2Step3 = document.querySelector("#gif2Step3");


// arrows of step3
const arrNext = document.querySelector(".arr-next");
const arr1Step3 = document.querySelector("#arr1Step3");
const arr2Step3 = document.querySelector("#arr2Step3");

// transboxes of step3
const trans1Step3 = document.querySelector("#trans1Step3");
const trans2Step3 = document.querySelector("#trans2Step3");


// Buttons
const nextToStep4 = document.querySelector("#nextToStep4");
const next1 = document.querySelector("#next1");
const next2 = document.querySelector("#next2");

addEventListener("DOMContentLoaded", (evt) => {
    step3.style.visibility = "visible";
    instructionsStep3.textContent = "Assemble the calorimeter and run its stirrer for at least 5 minutes to obtain a uniform temperature.Record the temperature (to 0.001°C) at one-minute intervals for 5 minutes to determine the initial heating or cooling correction."
    png1Step3.style.visibility = "visible";
    arr1Step3.style.visibility = "visible";
    trans1Step3.style.visibility = "visible";
});

trans1Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png1Step3.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";

    gif1Step3.style.visibility = "visible";

    setTimeout(() => {
        instructionsStep3.textContent = "Introduce the zinc oxide steadily from a funnel over 1–2 minutes and brush the funnel clean with a camel-hair brush."

        trans2Step3.style.visibility = "visible";
        arr2Step3.style.visibility = "visible";
        gif1Step3.style.visibility = "hidden";
        png2Step3.style.visibility = "visible";
    }, 10500); //10500
});

trans2Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step3.style.visibility = "hidden";
    gif1Step3.style.visibility = "hidden";

    gif2Step3.style.visibility = "visible";

    setTimeout(() => {
        instructionsStep3.textContent = "Continue taking temperature readings every minute until the solution period is completed as indicated by a steady rate of heating of cooling of the calorimeter. The solution period shall not exceed 20 minutes."
    }, 6000); //6000

        setTimeout(() => {
        instructionsStep3.textContent = "After the solution is complete, continue readings for an additional 5 minutes to determine the final correction."
    }, 13000); //13000

        setTimeout(() => {
        instructionsStep3.textContent = "Plot initial and final heating or cooling rates against the corresponding calorimeter temperature, namely the Beckmann readings at the beginning of the solution period and at the end, respectively."
        next1.style.visibility = "visible";
        arrNext.style.visibility = "visible";
        gif2Step3.style.visibility = "hidden";
        png3Step3.style.visibility = "visible";
    }, 19000); //19000
});

next1.addEventListener("click", (evt) => {
    instructionsStep3.textContent = "These corrections shall be summed and the total added or subtracted as appropriate to the observed temperature-rise."
    next2.style.visibility = "visible";
    png3Step3.style.visibility = "hidden";
    png4Step3.style.visibility = "visible";
});

next2.addEventListener("click", (evt) => {
    instructionsStep3.textContent = "Calculate the heat capacity of the calorimeter (in J/°C) using the given formula."
    png4Step3.style.visibility = "hidden";
    png5Step3.style.visibility = "visible";
    nextToStep4.style.visibility = "visible";
});

nextToStep4.addEventListener("click", (evt) => {
    window.location.href = "./step4.html";
});

let typewriter = new Typewriter("#poem", {
    strings: "Ma Il Cuore Non Ascolti Le Ragioni",
    autoStart: true,
    delay: 1,
    cursor: "",
});


let instructionsElement = document.querySelector(".instructions");

instructionsElement.addEventListener("focus", () => {
    typewriter.stop();
});

instructionsElement.addEventListener("blur", () => {
    typewriter.start();
});
function generatePoem(event) {
    event.preventDefault();

    let instructionsElement = document.querySelector(".instructions");
    let poemElement = document.querySelector("#poem");

    
    let userInstructions = instructionsElement.value;
    poemElement.innerHTML = userInstructions;

   
    typewriter.start();
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

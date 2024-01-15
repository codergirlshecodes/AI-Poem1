let typewriter; 

function displayPoem(response) {
    console.log("poem generated");

    let poemElement = document.querySelector("#poem");
    poemElement.innerHTML = response.data.answer;
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsElement = document.querySelector("#user-instructions");
    let userInstructions = instructionsElement.value;

    let apikey = "1at61ad039d332fc00c4boee9e4a24c4";
    let prompt = `Generate a poem in any language ${userInstructions}`;
    let context = "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML. If they only write topic make poem in English only. Make sure to follow user instructions";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiURL).then(displayPoem);
}

let instructionsElement = document.querySelector("#user-instructions");

instructionsElement.addEventListener("focus", () => {
    if (typewriter) {
        typewriter.stop();
    }
});

instructionsElement.addEventListener("blur", () => {
    if (typewriter) {
        typewriter.start();
    }
});

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('poem-generator-form');
    const instructionsInput = document.getElementById('user-instructions');
    const poemContainer = document.getElementById('poem');

    // Other containers
    const aiPoemContainer = document.getElementById('ai-poem');
    const aiQuotesContainer = document.getElementById('ai-quotes');
    const aiJokeContainer = document.getElementById('ai-joke');
    const aiRecipeContainer = document.getElementById('ai-recipe');
    const aiTravelContainer = document.getElementById('ai-travel');
    const aiBabyNamesContainer = document.getElementById('ai-babynames');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    let typewriter;

    function displayContent(response, containerId) {
        console.log(`AI-generated content for ${containerId}`);
        let aiContentElement = document.querySelector(`#${containerId}`);
        aiContentElement.innerHTML = response.data.answer;
    }

    function generateContent(contentType, userInstructions, containerId) {
        let apikey = "1at61ad039d332fc00c4boee9e4a24c4";
        let aiPrompt = `Generate ${contentType} on ${userInstructions} using AI`;
        let aiContext = `You are an AI-powered model generating ${contentType} based on user instructions.`;
        let aiApiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${aiPrompt}&context=${aiContext}&key=${apikey}`;

        console.log(`Generating AI ${contentType}`);
        console.log(`Prompt: ${aiPrompt}`);
        console.log(`Context: ${aiContext}`);

        axios.get(aiApiURL).then((response) => displayContent(response, containerId));
    }

    let instructionsElement = document.querySelector("#user-instructions");
    instructionsInput.focus();

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

    document.getElementById("poem-generator-form").addEventListener("submit", function (event) {
        event.preventDefault();
        let userInstructions = instructionsElement.value;

        // Use a variable to store the container ID based on the content type
        let containerId;

        // Determine which container to update based on the content type being searched
        switch (userInstructions.toLowerCase()) {
            case "poem":
                containerId = "ai-poem";
                break;
            case "quotes":
                containerId = "ai-quotes";
                break;
            case "joke":
                containerId = "ai-joke";
                break;
            case "recipe":
                containerId = "ai-recipe";
                break;
            case "travel":
                containerId = "ai-travel";
                break;
            case "babynames":
                containerId = "ai-babynames";
                break;
            default:
                // Use a default container if no specific content type is matched
                containerId = "ai-poem";
                break;
        }

        // Call the function with the determined container ID
        generateContent(userInstructions, userInstructions, containerId);
    });

    let submitButton = document.querySelector(".submit-button");

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        let userInstructions = instructionsElement.value;

        // Use a variable to store the container ID based on the content type
        let containerId;

        // Determine which container to update based on the content type being searched
        switch (userInstructions.toLowerCase()) {
            case "poem":
                containerId = "ai-poem";
                break;
            case "quotes":
                containerId = "ai-quotes";
                break;
            case "joke":
                containerId = "ai-joke";
                break;
            case "recipe":
                containerId = "ai-recipe";
                break;
            case "travel":
                containerId = "ai-travel";
                break;
            case "babynames":
                containerId = "ai-babynames";
                break;
            default:
                // Use a default container if no specific content type is matched
                containerId = "ai-poem";
                break;
        }

        // Call the function with the determined container ID
        generateContent(userInstructions, userInstructions, containerId);
    });
});

function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "08245o634da0cf8cebb4c8f9c9141at9";
  let prompt = `User instructions: Generate a healthy recipe about ${instructionsInput.value}`;
  let context =
    "You are a healthy cooking expert and love to write short and delicious recipes.Your mission is to generate a recipe in basic HTML.  Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳Generating the recipe ...</div>`;

  axios.get(apiUrl).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);

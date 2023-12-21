function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings:
      "These fluffy cinnamon vanilla cookies are a guilt-free treat with less sugar and calories.",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);

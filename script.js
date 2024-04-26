const recipesDiv = document.getElementById("recipes");
const buttonContainer = document.querySelector(".button-container");
const buttons = Array.from(buttonContainer.children);
let currentIndex = 0;

document.getElementById("italian").addEventListener("click", () => {
  fetchRecipes("italian");
});

document.getElementById("mexican").addEventListener("click", () => {
  fetchRecipes("mexican");
});

document.getElementById("indian").addEventListener("click", () => {
  fetchRecipes("indian");
});

const fetchRecipes = async (cuisine) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=YOUR_API_KEY&cuisine=${cuisine}`);
  const data = await response.json();
  recipesDiv.innerHTML = "";
  data.results.forEach((recipe) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.innerHTML = `
      <h2>${recipe.title}</h2>
      <img src="${recipe.image}" alt="${recipe.title}" />
      <p>${recipe.summary.replace(/<[^>]*>?/gm, "")}</p>
    `;
    recipesDiv.appendChild(recipeDiv);
  });
};
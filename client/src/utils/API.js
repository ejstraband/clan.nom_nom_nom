import axios from "axios";

const API = {
  // USERS
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    console.log("user data is: ", userData);
    return axios.post("/api/users", userData);
  },
  // RECIPES
  // Gets all recipes
  getRecipes: function() {
    return axios.get("/api/recipes");
  },
  // Gets the recipe with the given id
  getRecipe: function(id) {
    return axios.get("/api/recipes/" + id);
  },
  // Deletes the recipe with the given id
  deleteRecipe: function(id) {
    return axios.delete("/api/recipes/" + id);
  },
  // Saves a recipe to the database
  saveRecipe: function(recipeData) {
    return axios.post("/api/recipes", recipeData);
  },
  
  // NEW RECIPES Routes
  // These may not be needed as the information could be saved via the routes above.
  getNewRecipes: function() {
    return axios.get("/api/newRecipes");
  },
  // get the new recipe by ID
  getNewRecipe: function(id) {
    return axios.get("/api/newRecipes" + id)
  },
  // Delete the recipe with the given id
  deleteNewRecipe: function(id) {
    return axios.delete("/api/newRecipes" + id);
  },
  // Save the recipe data to the DB.
  saveNewRecipe: function(newRecipeData) {
    console.log("New Recipe data is: ", newRecipeData);
    return axios.post("/api/newRecipes" + newRecipeData);
  }
};

// I just expose on the window object so I can play with it from the console
window.api = API;

export default API;

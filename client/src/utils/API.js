import axios from "axios";

const API = {
  // USERS

  // SESSION
  // used by login
  loginUser: function(credentials) {
    return axios.post("/api/session/new", credentials);
  },

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
    return axios.post("/api/users", userData);
  },
  // Saves a user to the database
  updateUser: function(id, userData) {
    // console.log("User id is ", id, "user data is: ", userData);
    return axios.put("/api/users/:id", id, userData);
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
  searchRecipes: function(searchText, by) {
    return axios.get("/api/search?text=" + searchText + "&by=" + by); //TODO implement this
  },
  // Deletes the recipe with the given id
  deleteRecipe: function(id) {
    return axios.delete("/api/recipes/" + id);
  },
  // Saves a recipe to the database
  saveRecipe: function(recipeData) {
    console.log("New Recipe data is: ", recipeData);
    return axios.post("/api/recipes", recipeData);
  },
  // FAMILIES
  // save a new family
  saveFamily: function(familyData) {
    return axios.post("/api/families", familyData);
  }
};

// I just expose on the window object so I can play with it from the console
window.api = API;

export default API;

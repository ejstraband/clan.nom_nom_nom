const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/clannomnom",
);

const recipeSeed = [
  {
    title: "Peanut Butter and Jelly",
    author: "Agnus",
    ingredients: "peanut butter, jelly, bread",
    instructions: "Spread peanut butter evenly across a slice of bread. Repeat this process with jelly and another slice of bread. Apply the two smeared bread slices and cut in half.",
    prep_time: "10 secs",
    cook_time: "20 secs"
  },
  {
    title: "Ham and Cheese Sandwich",
    author: "Phyllis",
    ingredients: "ham, cheese, bread, mayonaise",
    instructions: "Place ham, cheese, and mayonaise between two slices of bread in whichever way you deem appetizing.",
    prep_time: "20 secs",
    cook_time: "20 secs"
  },
  {
    title: "Scrambled eggs",
    author: "Stanley",
    ingredients: "eggs, milk, butter, salt",
    instructions: "Beat eggs and milk together. Heat butter in pan before adding egg mixture. Cook on medium heat, stirring occasionally, for 1 1/2 minutes, or until eggs appear to be cooked.",
    prep_time: "1 min",
    cook_time: "1 min 30 secs"
  },
  {
    title: "Toast",
    author: "Bets",
    ingredients: "Bread",
    instructions: "Bread goes in toaster. Voila.",
    prep_time: "10 secs",
    cook_time: "1 min"
  },
  {
    title: "Spaghetti",
    author: "Janette",
    ingredients: "Spaghetti, water, salt, a jar of sauce",
    instructions: "Read the instructions on the package. Jeez.",
    prep_time: "10 mins",
    cook_time: "Assembly"
  },
];

db.Recipe
  .remove({})
  .then(() => db.Recipe.collection.insertMany(recipeSeed))
  .then(data => {

    console.log(data.insertedIds.length,  " records inserted!");

    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);

  });


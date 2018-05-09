const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  "mongodb://localhost/clannomnom",
);

const recipeSeed = [
  {
    family: "",
    title: "Peanut Butter and Jelly",
    rating: 0,
    prep_time: "10 secs",
    cook_time: "20 secs",
    difficulty: "easy",
    source: "",
    author: "Agnus",
    poster: "",
    servings: "1",
    short_desc: "",
    categories: "Sandwiches",
    ingredients: "peanut butter, jelly, bread",
    directions: "Spread peanut butter evenly across a slice of bread. Repeat this process with jelly and another slice of bread. Apply the two smeared bread slices and cut in half.",
    story: "",
    notes: "",
    image: "https://images.eatthismuch.com/site_media/img/33482_Mirkatt_572cebe5-c1b7-441e-af28-0530524b3039.png",
    date: {},
  },
  {
    family: "",
    title: "Ham and Cheese Sandwich",
    rating: 0,
    prep_time: "20 secs",
    cook_time: "20 secs",
    difficulty: "easy",
    source: "",
    author: "",
    poster: "",
    servings: "1",
    short_desc: "",
    categories: "Sandwiches",
    ingredients: "ham, cheese, bread, mayonaise",
    directions: "Place ham, cheese, and mayonaise between two slices of bread in whichever way you deem appetizing.",
    story: "",
    notes: "",
    image: "http://assets.kraftfoods.com/recipe_images/opendeploy/53460_SGS_%20K2304%20V0_OR1_FO_640x428.jpg",
    date: {},
  },
  {
    family: "",
    title: "Scrambled Eggs",
    rating: 0,
    prep_time: "1 minute",
    cook_time: "10 minutes",
    difficulty: "easy",
    source: "",
    author: "",
    poster: "",
    servings: "3",
    short_desc: "",
    categories: "Breakfast",
    ingredients: "eggs, milk, butter, salt",
    directions: "Beat eggs and milk together. Heat butter in pan before adding egg mixture. Cook on medium heat, stirring occasionally, for 1 1/2 minutes, or until eggs appear to be cooked.",
    story: "",
    notes: "",
    image: "https://fthmb.tqn.com/ujjQLYss60G3-CsEDOdL8uV_B30=/2500x1667/filters:no_upscale():max_bytes(150000):strip_icc()/scrambled-eggs-2500-56a210c65f9b58b7d0c63169.jpg",
    date: {},
  },
  {
    family: "",
    title: "Toast",
    rating: 0,
    prep_time: "10 secs",
    cook_time: "1 minute",
    difficulty: "easy",
    source: "",
    author: "",
    poster: "",
    servings: "1",
    short_desc: "",
    categories: "Sandwiches",
    ingredients: "peanut butter, jelly, bread",
    directions: "Spread peanut butter evenly across a slice of bread. Repeat this process with jelly and another slice of bread. Apply the two smeared bread slices and cut in half.",
    story: "",
    notes: "",
    image: "https://i.stack.imgur.com/BPOGM.jpg",
    date: {},
  },
  {
    family: "",
    title: "Spaghetti",
    rating: 0,
    prep_time: "10 minutes",
    cook_time: "20 minutes",
    difficulty: "easy",
    source: "",
    author: "",
    poster: "",
    servings: "",
    short_desc: "",
    categories: "Pasta",
    ingredients: "Spaghetti, water, salt, a jar of sauce",
    directions: "Read the instructions on the package. Jeez.",
    story: "",
    notes: "",
    image: "https://cdn3.tmbi.com/secure/RMS/attachments/37/300x300/Stamp-of-Approval-Spaghetti-Sauce_EXPS_MTCBBZ17_39564_D02_24_2b.jpg",
    date: {},
  },
];

const familiesSeed = [
  {
    familyName: "Clan McCloud"
  },
  {
    familyName: "The Skywalkers"
  },
  {
    familyName: "The Flinstones"
  },
  {
    familyName: "The Simpsons"
  },
  {
    familyName: "The Bensons"
  }
]

db.recipe
  .remove({})
  .then(() => db.recipe.collection.insertMany(recipeSeed))
  .then(data => {

    console.log(data.insertedIds.length + " records inserted!");

    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);

  });

  db.family
  .remove({})
  .then(() => db.family.collection.insertMany(familiesSeed))
  .then(data => {

    console.log(data.insertedIds.length + " records inserted!");

    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);

  });
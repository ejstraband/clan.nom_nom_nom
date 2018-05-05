const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  "mongodb://localhost/clannomnom",
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

const userSeed = [
  {
    "_id": "5aedd0be9765674b7c2eeff8",
    "family": "5aebacaf5b1ea8d2fc5c8b77",
    "email": "jsbach@gmail.com",
    "name": "Johann Sebastien Bach",
    "password": "$2a$10$YTNrr9FItduLlY2Ja5PV3epHtqzUGZ.FMUyXSz3mNE8M9khjfJaRu",
    "linkTo": "",
    "relationship": "",
    "bio": "I'm Bach.",
    "status": "active",
    "__v": 0,
    "date": "2018-05-05T15:41:50.864Z",
    "favorites": {
      "recipes": []
    }
  },
  {
    "_id": "5aedd06f9765674b7c2eeff7",
    "family": "5ae91f66c7901f181032ec14",
    "email": "msimpson@gmail.com",
    "name": "Marge Simpson",
    "password": "$2a$10$GZRm4Mr2QkRthTv0v8Z8bupStLMGefzn92MXLvqyqCoypj6k72.g2",
    "linkTo": "",
    "relationship": "",
    "bio": "Wife and mother.",
    "status": "active",
    "__v": 0,
    "date": "2018-05-05T15:40:31.785Z",
    "favorites": {
      "recipes": []
    }
  },
  {
    "_id": "5aedd0209765674b7c2eeff6",
    "family": "5ae91f66c7901f181032ec14",
    "email": "hsimpson@gmail.com",
    "name": "Homer Simpson",
    "password": "$2a$10$RAoKTjPYRjELFbsNM27J3.PFbWBsOCSO9uQ2N.dk6S1DSkIyqGbfO",
    "linkTo": "",
    "relationship": "",
    "bio": "\"Just because I don't care doesn't mean I don't understand!\"\n",
    "status": "active",
    "__v": 0,
    "date": "2018-05-05T15:39:12.316Z",
    "favorites": {
      "recipes": []
    }
  },
  {
    "_id": "5aedcf989765674b7c2eeff5",
    "family": "5ae91f66c7901f181032ec13",
    "email": "sflinstrone@gmail.com",
    "name": "Selma Flinstone",
    "password": "$2a$10$K2K7dzj2PTlr6oc5lZ22z.isGRaASvFeIKoRNHx1Zfz/oLrUWc5z2",
    "linkTo": "",
    "relationship": "",
    "bio": "yoobadappadingdong.",
    "status": "active",
    "__v": 0,
    "date": "2018-05-05T15:36:56.814Z",
    "favorites": {
      "recipes": []
    }
  },
  {
    "_id": "5aedcf269765674b7c2eeff4",
    "family": "5ae91f66c7901f181032ec13",
    "email": "fflinstone@gmail.com",
    "name": "Fred Flinstone",
    "password": "$2a$10$zjG5bpnnbZdAmzQ7gEiUxeSUmcr57An.NJOcx2UwHq/PdFMYvko3W",
    "linkTo": "",
    "relationship": "",
    "bio": "Yabadadoo.",
    "status": "active",
    "__v": 0,
    "date": "2018-05-05T15:35:02.597Z",
    "favorites": {
      "recipes": []
    }
  },
  {
    "_id": "5aedcef69765674b7c2eeff3",
    "family": "5ae91f66c7901f181032ec12",
    "email": "bobbyskywalker@gmail.com",
    "name": "Bobby Skywalker",
    "password": "$2a$10$OIVquTNED.uF0FHEI.iqKueDB1cvUNhq5xcoej7hAORsnDHVZPzVK",
    "linkTo": "",
    "relationship": "",
    "bio": "The Force is not so with me.",
    "status": "active",
    "__v": 0,
    "date": "2018-05-05T15:34:14.040Z",
    "favorites": {
      "recipes": []
    }
  },
  {
    "_id": "5aedcebd9765674b7c2eeff2",
    "family": "5ae91f66c7901f181032ec12",
    "email": "askywalker@gmail.com",
    "name": "Anakin Skywalker",
    "password": "$2a$10$FzbqfROexikbCADPvhSuPOdrfqJrrXD6gICqe3IgBgZmxMjVx4fQq",
    "linkTo": "",
    "relationship": "",
    "bio": "I find your ignorance disturbing.",
    "status": "active",
    "__v": 0,
    "date": "2018-05-05T15:33:17.208Z",
    "favorites": {
      "recipes": []
    }
  },
  {
    "_id": "5aedce669765674b7c2eeff1",
    "family": "5ae91f66c7901f181032ec11",
    "email": "sally@gmail.com",
    "name": "Sally",
    "password": "$2a$10$N8qW0aXEqvZoItm3okR4meigDHwRktpQiCgakRl6ZuBVNdE2Cr0uK",
    "linkTo": "",
    "relationship": "",
    "bio": "Sally am I.",
    "status": "active",
    "__v": 0,
    "date": "2018-05-05T15:31:50.573Z",
    "favorites": {
      "recipes": []
    }
  },
  {
    "_id": "5aedce0e9765674b7c2eeff0",
    "family": "5ae91f66c7901f181032ec11",
    "email": "ian@gmail.com",
    "name": "Ian McCloud",
    "password": "$2a$10$ZmLGtpNunaSyEl5.2NDFjub5Tv4NBqKZogkQAGurMkKfX.sXedsBa",
    "linkTo": "",
    "relationship": "",
    "bio": "I am Ian.",
    "status": "active",
    "__v": 0,
    "date": "2018-05-05T15:30:22.464Z",
    "favorites": {
      "recipes": []
    }
  },
  {
    "_id": "5aebae50185cbb1d3ca9ea41",
    "family": "5aebae0a185cbb1d3ca9ea40",
    "email": "jonmoore510@gmail.com",
    "name": "Jon",
    "password": "$2a$10$QhugWZCC9xzqNGDkO1zzjegEDGNHTCJfLkMQYvzittFcGzCI5WCP.",
    "bio": "",
    "linkTo": "5aea303e4dfd64073c1adeff",
    "relationship": "union",
    "status": "active",
    "__v": 0,
    "date": "2018-05-04T00:50:24.930Z",
    "favorites": {
      "recipes": []
    }
  }
]

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
    familyName: "The Adams Family"
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

db.user
.remove({})
.then(() => db.user.collection.insertMany(userSeed))
.then(data => {

  console.log(data.insertedIds.length + " records inserted!");

  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);

});
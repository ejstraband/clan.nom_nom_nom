import React from "react";

import RecipeCard from "../RecipeCard";
import "./index.css";

const RecipeList = ({ recipes }) => {
  return (
    <div className="RecipeList">
      {recipes.map(recipe => {
        return <RecipeCard key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
};

export default RecipeList;

import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

import heartEmpty from "./heart-empty";
import heartFull from "./heart-full";

import CardBtn from "../CardBtn";

class RecipeCard extends React.Component {
  state = {
    favorite: false,
    upvoted: false,
    more: false
  };

  setFavorite(favorite) {
    this.setState({
      favorite: !this.state.favorite
    });
    /**
     * api.favoriteRecipe(this.props.recipe.id)
     */
  }

  onUpvoteClick = () => {
    /**
     * api.upvoteRecipe(this.props.recipe.id)
     */
    this.setState({
      upvoted: !this.state.upvoted
    });
  };
  render() {
    const { props } = this;
    const { recipe } = props;

    const onHeartClick = () => {
      this.setFavorite(!this.state.favorite);
    };
    return (
      <div className="RecipeCard">
        <img style={{ width: "100%" }} src={recipe.image} />
        {this.renderTitle()}

        <div className="RecipeCard__description">
          {recipe.summary || "Lorem"}
        </div>
        <div style={{ flex: 1 }} />
        <div className="RecipeCard__buttons">
          <button
            style={{ marginRight: 10 }}
            className="btn"
            onClick={this.onUpvoteClick}
          >
            {this.state.upvoted ? "Remove upvote" : "Upvote"}
          </button>

          <button className="btn" onClick={() => onHeartClick()}>
            {this.state.favorite ? heartFull : heartEmpty}{" "}
            {this.state.favorite ? "Unfavorite" : "Favorite"}
          </button>
        </div>

        <div className="RecipeCard__buttons">
          <button
            className="btn"
            onClick={() => {
              this.setState({
                more: !this.state.more
              });
            }}
          >
            {this.state.more ? "Hide more" : "Show more"}
          </button>
        </div>

        {this.renderMore()}
      </div>
    );
  }

  renderMore() {
    if (!this.state.more) {
      return null;
    }

    return (
      <div className="RecipeCard__more">
        <p>Author: ...</p>
        <p>Ingredients: ...</p>
        {this.props.recipe.description || "Description comes here"}
      </div>
    );
  }

  renderTitle() {
    const { recipe } = this.props;
    return (
      <div className="RecipeCard__title">
        <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>{" "}
      </div>
    );
  }
}

export default RecipeCard;

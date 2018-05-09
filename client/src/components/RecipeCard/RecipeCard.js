import React from "react";
// import { Link } from "react-router-dom";
import Row from "../Row";
import Col from "../Col";
import "./index.css";
import heartEmpty from "./heart-empty";
import heartFull from "./heart-full";

import API from "../../utils/API";
// import axios from 'axios';

class RecipeCard extends React.Component {
  
  state = {
    favorite: false,
    upvoted: false,
    more: false,
    family_id: localStorage.getItem("family"),
    user_id: localStorage.getItem("user"),
    user_favorites: [],
    recipe_id: "",
    author_id: "",
    author_name: "",
    poster_name: "",
    rating: 0 
  };
  
  componentDidMount(){
    let recipe = this.props.recipe;
    // console.log("props:recipe is ",this.props.recipe)
    
    this.setState({
      recipe_id: recipe._id,
      rating: recipe.rating,
      author_id: recipe.author,      
    });
    // get user favorites
    API.getUser(this.state.user_id)
    .then(res => {
      this.setState({
        user_favorites: res.data.favorites
      });
      // console.log("favorites in state is ", this.state.user_favorites);
    })
    .catch(err => console.log("recipe card says, user find " + err));
    // get author name
    API.getUser(this.props.recipe.author)
    .then(res => {      
      this.setState({
        author_name: res.data.name
      });
      // console.log("author name in state is ", this.state.author_name);
    })
    .catch(err => console.log("recipe card says, author find " + err));
    // get poster name
    API.getUser(this.props.recipe.poster)
    .then(res => {
      this.setState({
        poster_name: res.data.name
      });
      // console.log("poster name in state is ", this.state.poster_name);
    })
    .catch(err => console.log("recipe card says, user find " + err));
  }

  setFavorite(favorite){
    let recipe = this.props.recipe;
    // console.log("recipe is: ", recipe);
    // console.log("state is", this.state)
    this.setState({
      favorite: !this.state.favorite
    });
    let favs = [];
    favs = this.state.user_favorites;
    // console.log("recipe id is ", recipe._id);
    favs.push(recipe._id);
    // console.log("user is ", this.state.user_id)
    // console.log("favs is ", favs)
    API.updateUser(this.state.user_id, {favorites: favs})
    .then(res => console.log(res))
    .catch(err => console.log("RecipeCard.js says, User update " + err));

  }

  onUpvoteClick = () => {
    /**
     update recipe file with incremented rating
     */
    console.log('vote was clicked')
    console.log(this.state.rating)
    this.setState({
      rating: this.state.rating + 1
    });
  };

  getUserName = (id) => {

  }

  render() {
    const { props } = this;
    const { recipe } = props;
    const onHeartClick = () => {
      this.setFavorite(!this.state.favorite);
    };
    console.log("recipe is: ", recipe);
    return (
      <div className="RecipeCard">
        <Row className="titleRow">
          {this.renderTitle()}
        </Row>
        <Row className="userInfoRow">
          <Col size="md-12">Author: { this.state.author_name }</Col>
          <Col size="md-12">Posted by: { this.state.poster_name }</Col>
        </Row>
        <Row className="descriptionRow">
          <Col size="md-1"></Col>
          <Col size="md-11">
            <div className="RecipeCard__description">
              {recipe.short_desc}
            </div>
          </Col>
        </Row>
        <Row className="imageRow" style={{ paddingTop: 50, paddingBottom: 40, paddingLeft: 60, paddingRight: 60  }}>
          <img className="recipeCard_Image" style={{ width: "100%" }} src={recipe.image} alt="" />
        </Row>
        <Row className="storyRow">
          <Col size="md-1"></Col>
          <Col size="md-10">
            <div className="RecipeCard__story">
              {recipe.story}
            </div>
          </Col>
        </Row>
        <div style={{ flex: 1 }} />
        <div className="RecipeCard__buttons">
          {/* Show/hide recipe toggle */}
          <div className="RecipeCard__buttons mr-auto">
            <button
              className="btn"
              onClick={() => {
                this.setState({
                  more: !this.state.more
                });
              }}
            >
              {this.state.more ? "Hide" : "Show Recipe"}
            </button>
          </div>

          {/* increment rating */}
          <button className="btn thumbsUp" onClick={this.onUpvoteClick}>
          </button> 
          {/* toggle favorite */}
          <button className="btn" onClick={() => onHeartClick()}>
            {this.state.favorite ? heartFull : heartEmpty}{" "}
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

    // let ingredients = this.props.recipe.ingredients.split(", ")

    return (
      <div className="RecipeCard__more">
        {this.props.recipe.ingredients}
        {/* {ingredients} */}
        <hr/>
        {this.props.recipe.directions}
      </div>
    );
  }

  renderTitle() {
    const { recipe } = this.props;
    return (
      <div className="RecipeCard__title">
        {/* <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>{" "} */}
        {recipe.title}
      </div>
    );
  }
}

export default RecipeCard;

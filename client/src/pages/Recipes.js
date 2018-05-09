import React from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Navbar from "../components/Navbar_1";
import Row from "../components/Row";
import Col from "../components/Col";
import RecipeList from "../components/RecipeList";

class Recipes extends React.Component {
  
  state = {
    family: localStorage.getItem("family"),
    recipes: []
  };

  componentDidMount() {
    API.getRecipes().then(data => {
      let Recipes = data.data;
      let filteredRecipes = [];
      for (let i=0; i<Recipes.length; i++){
        console.log("inner recipes: ", Recipes[i].family);
        if (Recipes[i].family === this.state.family) {
          filteredRecipes.push(Recipes[i])
        }
      }
      console.log("data: ", filteredRecipes);

      this.setState({
        recipes: filteredRecipes
      })
      // console.log("Recipes.js says, my recipes on page load are: ", this.state.recipes);
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Hero     backgroundImage="http://slatkisvijet.com/images/2016/09/savjeti-i-trikovi-za-pecenje-kolaca.jpeg">
          <h1>Ancestry*dot*Nom</h1>
          <h2>Where families meet to share recipes</h2>
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col className="searchType" size="col-12">
              <h2>Newest Recipes</h2>
            </Col>
          </Row>
          <Row>  
            {/* <Col size="md-"></Col> */}
            <Col className="recipeList" size="md-12">
              <RecipeList recipes={this.state.recipes} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Recipes;
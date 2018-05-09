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
    recipes: []
  };

  componentDidMount() {
    API.getRecipes().then(data => {
      console.log("data: ", data)
      this.setState({
        recipes: data.data
      })
      console.log("Recipes.js says, my recipes on page load are: ", this.state.recipes);
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Hero backgroundImage="http://slatkisvijet.com/images/2016/09/savjeti-i-trikovi-za-pecenje-kolaca.jpeg">
          <h2>Ancestry*dot*Nom</h2>
          <h6>Where families meet to share recipes</h6>
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h2>Newest Recipes</h2>
              <RecipeList recipes={this.state.recipes} />

              {/* <Link to="/newRecipe">New Recipe</Link> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Recipes;
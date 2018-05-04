import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Navbar from "../components/Navbar_1";
import Row from "../components/Row";
import Col from "../components/Col";
import RecipeList from "../components/RecipeList";

// import api from "../utils/API";
class Recipes extends React.Component {
  state = {
    recipes: []
  };
  componentDidMount() {
    /*
    api.getRecipes().then(data => {
      this.setState({
        recipes: data.recipes
      })
    })*/
    setTimeout(() => {
      // TODO these have to come from the API???
      const beer = require("../images/beer.jpg");
      const roma = require("../images/roma.jpg");
      const soup = require("../images/soup.jpg");

      const recipes = [
        {
          title: "Beer",
          time: "20 minutes",
          id: 1,
          user: "robert",
          image: beer,
          summary:
            "Aliqua velit proident id minim commodo in cupidatat excepteur pariatur proident. Proident minim magna anim consequat exercitation ut aliqua irure elit id sit officia Lorem. Tempor amet labore ex ad."
        },
        {
          title: "Tomato",
          time: "40 minutes",
          image: roma,
          id: 2,
          user: "john",
          summary:
            "lorem Labore quis cupidatat ullamco laboris ipsum Lorem. Cillum ex ut laboris nulla. Excepteur ullamco enim veniam incididunt Lorem mollit non laborum ad nisi amet. Veniam sit eu tempor labore ad cillum adipisicing deserunt et consequat ad."
        },
        {
          id: 3,
          title: "Soup",
          time: "50 minutes",
          image: soup,
          summary:
            "Enim do tempor ex sint consequat commodo cillum ullamco Lorem. Minim duis consectetur in dolor non sunt do dolor proident pariatur proident. Anim dolor voluptate elit irure sint aute officia aliqua incididunt officia laborum consectetur minim proident. Amet sint reprehenderit non quis ut. Duis deserunt ex veniam eiusmod ullamco."
        },
        {
          id: 4,
          title: "Peperoni",
          user: "marry",
          summary:
            "Anim nulla deserunt minim labore. Ea non consequat officia deserunt est dolor deserunt consectetur quis nostrud ut nisi. Cupidatat proident ad veniam ut adipisicing velit."
        }
      ];

      this.setState({
        recipes
      });
    }, 100); //delete above
  }
  render() {
    return (
      <div>
        <Navbar />
        <Hero backgroundImage="http://slatkisvijet.com/images/2016/09/savjeti-i-trikovi-za-pecenje-kolaca.jpeg">
          <h1>Ancestry*dot*Nom</h1>
          <h2>Where families meet to share recipes</h2>
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>DISPLAY RECIPE BLOG HERE</h1>
              <RecipeList recipes={this.state.recipes} />

              <Link to="/newRecipe">New Recipe</Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Recipes;

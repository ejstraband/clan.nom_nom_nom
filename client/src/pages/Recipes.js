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
      // const beer = require("../images/beer.jpg");
      // const roma = require("../images/roma.jpg");
      // const soup = require("../images/soup.jpg");

      const recipes = [
        {
          family: "5aea3ca2485885201880f5bb",
          title: "Alfredo Sauce",
          rating: 10,
          prep_time: "5 mins",
          cook_time: "20 mins",
          difficulty: "easy",
          source: "Food.com",
          author: "5aecba9728c6b42fc0cc2d5b",
          poster: "5aecba9728c6b42fc0cc2d5b",
          servings: 6,
          short_desc: "A classic white sauce",
          categories: ["Sauces", "Italian", "Pasta"],
          ingredients: [
            {
              quantity: 3,
              measure: "tablespoons",
              item: "sweet butter"
            },
            {
              quantity: 2,
              measure: "tablespoons",
              item: "olive oil"
            },
            {
              quantity: 2,
              measure: "cloves",
              item: "garlic, minced"
            },
            {
              quantity: 2,
              measure: "cups",
              item: "heavy cream"
            },
            {
              quantity: 3,
              measure: "tablespoons",
              item: "sweet butter"
            },
            {
              quantity: 0.25,
              measure: "teaspoons",
              item: "white pepper"
            },
            {
              quantity: 0.5,
              measure: "cup",
              item: "parmesan cheese, grated"
            },
            {
              quantity: 0.75,
              measure: "cup",
              item: "mozzarella cheese, grated"
            }
          ],
          directions:
            "1 Melt butter in medium saucepan with olive oil over medium/low heat.  2 Add the garlic, cream, white pepper and bring mixture to a simmer.  3 Stir often.  4 Add the Parmesan cheese and simmer sauce for 8-10 minutes or until sauce has thickened and is smooth.  5 When sauce has thickened add the Mozzarella cheese and stir until smooth. STIR FREQUENTLY.  6 While the sauce cooks, boil noodles for 3-5 minutes.",
          notes: [{ note: "This recipe was given to me by my niece Alissa." }],
          image:
            "https://www.bunsinmyoven.com/wp-content/uploads/2018/03/authentic-alfredo-sauce.jpg"
        }
      ];

      this.setState({
        recipes
      });
    }, 100);
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

import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Recipes = () => (
  <div>
    <Hero backgroundImage="http://slatkisvijet.com/images/2016/09/savjeti-i-trikovi-za-pecenje-kolaca.jpeg">
      <h1>Ancestry*dot*Nom</h1>
      <h2>Where families meet to share recipes</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>DISPLAY RECIPE BLOG HERE</h1>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Recipes;
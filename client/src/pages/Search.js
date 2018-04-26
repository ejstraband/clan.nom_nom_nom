import React, { Component } from "react";
// import API from "../utils/API";
// import Container from "../components/Container";
import Hero from "../components/Hero";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import Alert from "../components/Alert";

class Search extends Component {
  // state = {
  //   search: "",
  //   breeds: [],
  //   results: [],
  //   error: ""
  // };

  // // When the component mounts, get a list of all available base breeds and update this.state.breeds
  // componentDidMount() {
  //   API.getBaseBreedsList()
  //     .then(res => this.setState({ breeds: res.data.message }))
  //     .catch(err => console.log(err));
  // }

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getDogsOfBreed(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };
  render() {
    return (
      <div>
        <Hero backgroundImage="https://cdn-images-1.medium.com/max/2000/1*U-gzyoHPmuGXc8veJ6-PoQ.jpeg">
          <h1>Ancestry*dot*Nom</h1>
          <h2>ADD SEARCH HERE</h2>
        </Hero>
      </div>
    );
  }
}

export default Search;

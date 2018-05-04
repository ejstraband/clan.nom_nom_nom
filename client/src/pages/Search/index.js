import React, { cloneElement } from "react";
// import Container from "../components/Container";
import Hero from "../../components/Hero";
import API from "../../utils/API";
// import SearchForm from "../../components/SearchForm";
// import SearchResults from "../../components/SearchResults";
// import Alert from "../../components/Alert";

import searchIcon from "./searchIcon";
import "./index.css";

class Search extends React.Component {
  state = {
    search: "",
    author: [],
    recipe: [],
    rating: 0,
    categories: [],
    error: "",
    searchBy: "author"
  };

  // // When the component mounts, get a list of all available search recipe and update this.state.
  componentDidMount() {
    API.getRecipes()
      .then(res => this.setState({ author: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };
  /*

  handleFormSubmit = event => {
    event.preventDefault();
    API.getRecipes(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };*/
  // componentDidMount() {
  //   API.getRecipes().then(res =>
  //     this.setState({
  //       results: res.data // TODO check the shape of the result
  //     })
  //   );
  // }
  onSubmit = event => {
    event.preventDefault();

    //TODO added the searchBy check  if we have a search api
    API.searchRecipes(this.state.search, this.state.searchBy).then(res => {});
  };
  render() {
    return (
      <div className="Alert Search">
        {/* <Hero backgroundImage="https://cdn-images-1.medium.com/max/2000/1*U-gzyoHPmuGXc8veJ6-PoQ.jpeg"> */}
        <Hero backgroundImage="https://www.pexels.com/photo/food-health-plate-preparation-414553/">
          <h1>Ancestry*dot*Nom</h1>

          <form className="Search__box" onSubmit={this.onSubmit}>
            <div style={{ position: "relative" }}>
              <input
                placeholder={"Search by " + this.state.searchBy}
                className="form-control"
                type="text"
                onChange={this.handleInputChange}
              />

              {cloneElement(searchIcon, {
                onClick: e => this.onSubmit(e),
                style: {
                  position: "absolute",
                  right: 4,
                  top: 8,
                  fill: "gray",
                  cursor: "pointer"
                }
              })}
            </div>
            <select
              className="form-control"
              style={{ width: "auto" }}
              value={this.state.searchBy}
              onChange={event => {
                this.setState({
                  searchBy: event.target.value
                });
              }}
            >
              <option value="author">By author</option>
              <option value="rating">By rating</option>
              <option value="category">By category</option>
              <option value="poster">entered by</option>
              <option value="ingredients">By ingredients</option>
            </select>
          </form>
        </Hero>
      </div>
    );
  }
}

export default Search;

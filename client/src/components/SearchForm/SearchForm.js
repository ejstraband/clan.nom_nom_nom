import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="recipe_search"></label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="recipe"
        list="recipes"
        type="text"
        className="form-control"
        placeholder="Search for recipes"
        id="recipe_search"
      />
      {/* <datalist id="breeds">
        {props.breeds.map(breed => <option value={breed} key={breed} />)}
      </datalist> */}
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;

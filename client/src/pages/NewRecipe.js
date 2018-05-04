import React, { Component } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";

class NewRecipe extends Component {
  state = {
    recipe: [],
    title: "",
    rating: 0,
    prep_time: "", // Need control statement for # input.
    cook_time: "", // Need control statement for # input.
    difficulty: "",
    source: "",
    author: "",
    poster: "",
    servings: 0, // this needs a control statement to insure that it's a #.
    short_desc: "",
    categories: [],
    ingredients: [],
    directions: [],
    notes: []
  };

  componentDidMount() {
    console.log("Component did mount");
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.title && this.state.categories && this.state.ingredients && this.state.directions && this.state.notes) {
	  const newRecipe = {
		title: this.state.title,
        rating: 0,
        prep_time: this.state.prep_time,
        cook_time: this.state.cook_time,
        difficulty: this.state.difficulty,
        source: this.state.source,
        author: this.state.author,
        poster: this.state.poster || "unknown",
        servings: this.state.servings || 0,
        short_desc: this.state.short_desc,
        categories: this.state.categories,
        ingredients: this.state.ingredients,
        directions: this.state.directions,
        notes: this.state.notes, 
	  };
	  	API.saveRecipe(newRecipe)
        	.then(res => {
				console.log('Recipe Saved ' + res)
				this.setState({ // set the states of the information back to blank if the push worked.
					title: "",
					rating: 0,
					prep_time: "",
					cook_time: "",
					difficulty: "",
					source: "",
					author: "",
					poster: "",
					servings: 0,
					short_desc: "",
					categories: [],
					ingredients: [],
					directions: [],
					notes: [],   
				})
			}) // log out the information submitted as a check
			.catch(err => console.log('NewRecipe.js says, New Recipe safe ' + err));
    }
  };

	render() {
		return (
			<div className='container col-10 col-md-6'>
				<div className='row'>
					<div className='col-2 float-left'>
						logo location
					</div>
					<div className="col-10 text-center">
						<h1>Create a Recipe</h1>
					</div>
				</div>
				<div className='row'>
					<div className='col-6'>
					Title:
					<Input
						value={this.state.title}
						onChange={this.handleInputChange}
						name="title"
						placeholder="Name of recipe"
						title="What is the title of this recipe?"
					/>
					Author:
					<Input
						value={this.state.prep_time}
						onChange={this.handleInputChange}
						name="prep_time"
						type="number" //control method to handle insuring only #'s are entered.
						pattern="[0-9]*"
						inputmode="numeric"
						placeholder="Recipe's Prep time"
						title="Please enter the prep time of this recipe in minutes."
						//this will later be changed to a dropdown
					/>
					</div>
					<div className='col-6'>
					</div>
				</div>
				<div className='row'>
					Final Row Location
				</div>
			</div>
		)
	}
}

export default NewRecipe;

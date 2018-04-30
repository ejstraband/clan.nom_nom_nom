import React, { Component } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";

class NewRecipe extends Component {
	state = {
    recipe: [],
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
	};

	componentDidMount() {
		console.log("Component did mount")
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
	  const recipe = {
		title: this.state.title,
        rating: 0,
        prep_time: this.state.prep_time,
        cook_time: this.state.cook_time,
        difficulty: this.state.difficulty,
        source: this.state.source,
        author: this.state.author,
        poster: this.state.poster,
        servings: this.state.servings || 0,
        short_desc: this.state.short_desc,
        categories: this.state.categories,
        ingredients: this.state.ingredients,
        directions: this.state.directions,
        notes: this.state.notes, 
	  };
	  	API.saveRecipe(recipe)
        	.then(res => {
				console.log('Recipe Saved ' + res);
				this.setState({ // set the states of the information back to blank if the push worked.
					recipe: [],
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

	render(){
		return (
			<div className='container col-10 col-md-6'>
				<h1>Create a Recipe</h1>
				<form>
					<Input
						value={this.state.title}
						onChange={this.handleInputChange}
						name="title"
						placeholder="Name of recipe"
						title="What is the title of this recipe?"
					/>
					<Input
						value={this.state.prep_time}
						onChange={this.handleInputChange}
						name="prep_time"
						placeholder="Prep time in minutes ie 30 = 30 min's"
						title="How long would preperation take in minutes?"
					/>
         			<Input
						value={this.state.cook_time}
						onChange={this.handleInputChange}
						name="cook_time"
						placeholder="Cook time"
					/>
					<Input
						value={this.state.difficulty}
						onChange={this.handleInputChange}
						name="difficulty"
						placeholder="Difficulty"
					/>
					<Input
						value={this.state.source}
						onChange={this.handleInputChange}
						name="source"
						placeholder="Source of recipe if a cookbook or website"
					/>
					<Input
						value={this.state.author}
						onChange={this.handleInputChange}
						name="author"
						placeholder="Whose recipe is this?"
					/>
          			<Input
						value={this.state.servings}
						onChange={this.handleInputChange}
						name="servings"
						placeholder="Servings"
						title="Please enter the serving size"
					/>
					<Input
						value={this.state.short_desc}
						onChange={this.handleInputChange}
						name="short_desc"
						placeholder="Short description"
					/>
					<Input
						value={this.state.categories}
						onChange={this.handleInputChange}
						name="categories"
						placeholder="Choose all that apply"
					/>
					<Input
						value={this.state.ingredients}
						onChange={this.handleInputChange}
						name="ingredients"
						placeholder="Ingredients"
					/>
          			<Input
						value={this.state.directions}
						onChange={this.handleInputChange}
						name="directions"
						placeholder="Steps to make this recipe"
					/>
					<Input
						value={this.state.notes}
						onChange={this.handleInputChange}
						name="notes"
						placeholder="Say something about this recipe"
					/>
					<FormBtn
						disabled={!(this.state.title && this.state.categories && this.state.ingredients && this.state.directions && this.state.notes)}
						onClick={this.handleFormSubmit}
					>
						Submit
					</FormBtn>
				</form>
			</div>
		)
	}
}

export default NewRecipe;
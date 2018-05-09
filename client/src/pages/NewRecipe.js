import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar_1";
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
      family: localStorage.getItem("family"),
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
      <div>
        <Navbar />
        <div className='container col-10 col-md-6'>
          <div>
            <div className="col-12 text-center">
              <h1>Create a Recipe</h1>
            </div>
          </div>
          <form>
<<<<<<< HEAD
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
              placeholder="Recipe's Prep time"
              title="Please enter the prep time of this recipe in minutes."
              //this will later be changed to a dropdown
            />
                <Input
              value={this.state.cook_time}
              onChange={this.handleInputChange}
              name="cook_time"
              placeholder="Cook time"
              title="Please enter the cook time in minutes."
              //this will later be changed to a dropdown
            />
            <Input
              value={this.state.difficulty}
              onChange={this.handleInputChange}
              name="difficulty"
              placeholder="Difficulty"
              title="Please enter the difficulty on a scale of Easy/Moderate/Hard/Very Hard."
              //this will later be changed to a dropdown
            />
            <Input
              value={this.state.source}
              onChange={this.handleInputChange}
              name="source"
              placeholder="Source of recipe if a cookbook or website"
              title="Please supply the source of this cookbook and/or website if any."
            />
            <Input
              value={this.state.author}
              onChange={this.handleInputChange}
              name="author"
              placeholder="Whose recipe is this?"
              title="Please supply the author of this recipe."
            />
            <Input
              value={this.state.servings}
              onChange={this.handleInputChange}
              name="servings"
              placeholder="Servings"
              title="Please enter the serving size"
              //this will later be changed to a dropdown
            />
            <Input
              value={this.state.short_desc}
              onChange={this.handleInputChange}
              name="short_desc"
              placeholder="Short description"
              title="Please supply a short 1-2 paragraph description of this recipe."
            />
            <Input
              value={this.state.categories}
              onChange={this.handleInputChange}
              name="categories"
              placeholder="Choose all that apply"
              title="Please supply which category this recipe belongs to."
              //this will later be changed to a dropdown
            />
=======
            <div>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                className="form-control form-control-sm"
                type="text"
                name="title"
                placeholder="Name of recipe"
                title="What is the title of this recipe?"
                tabindex="1"
              />
            </div>
            <div>
              <Input
                value={this.state.prep_time}
                onChange={this.handleInputChange}
                className="form-control form-control-sm"
                name="prep_time"
                type="text" //control method to handle insuring only #'s are entered
                placeholder="Recipe's Prep time in minutes"
                title="Please enter the prep time of this recipe in minutes."
                tabindex="2"
              />
            </div>
            <div>
              <Input
                value={this.state.cook_time}
                onChange={this.handleInputChange}
                className="form-control form-control-sm"
                name="cook_time"
                placeholder="Cook time"
                title="Please enter the cook time in minutes."
                tabindex="3"
                //this will later be changed to a dropdown
              />
            </div>
            <div>
              <select 
                className='custom-select form-control form-control-sm'
                value={this.state.difficulty}
                onChange={this.handleInputChange}
                tabindex='4'
                name='difficulty'>
                  <option selected="">Select Difficulty</option>
                  <option value='easy'>Easy</option>
                  <option value='moderate'>Moderate</option>
                  <option value='hard'>Hard</option>
              </select>
            </div>
            <br/>
            <div>
              <Input
                value={this.state.source}
                onChange={this.handleInputChange}
                className="form-control form-control-sm"
                type="text"
                name="source"
                placeholder="Source of recipe if a cookbook or website"
                title="Please supply the source of this cookbook and/or website if any."
                tabindex="5"
              />
            </div>
            <div>	
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                className="form-control form-control-sm"
                type="text"
                name="author"
                placeholder="Whose recipe is this?"
                title="Please supply the author of this recipe."
                tabindex="6"
              />
            </div>
            <div>
              <Input
                value={this.state.servings}
                onChange={this.handleInputChange}
                className="form-control form-control-sm"
                name="servings"
                type="number" //control method to handle insuring only #'s are entered.
                min="0"
                step="1"
                inputmode="numeric"
                placeholder="Servings"
                title="Please enter the serving size"
                tabindex='7'
                //this will later be changed to a dropdown
              />
            </div>
            <div>
              <Input
                value={this.state.short_desc}
                onChange={this.handleInputChange}
                className="form-control form-control-sm"
                name="short_desc"
                placeholder="Short description"
                title="Please supply a short 1-2 paragraph description of this recipe."
                tabindex='8'
              />
            </div>
            <div>
              <select 
                className='custom-select form-control form-control-sm'
                value={this.state.categories}
                onChange={this.handleInputChange}
                tabIndex='9'
                name='categories'>
                  <option selected="">Select Type of Recipe</option>
                  <option value='appetizers'>Appetizers</option>
                  <option value='baking'>Baking</option>
                  <option value='beverages'>Beverages</option>
                  <option value='cassarole'>Cassarole</option>
                  <option value='entrees'>Entrees</option>
                  <option value='fish'>Fish</option>
                  <option value='pasta'>Pasta</option>
                  <option value='pies'>Pies</option>
                  <option value='salad'>Salad</option>
                  <option value='sauces'>Sauces</option>
                  <option value='soup'>Soup</option>
                  <option value='vegetarian'>Vegetarian</option>
              </select>
            </div>
            <br/>
>>>>>>> 9e97e57bd265a9dfa009ae69faf0328b00a91223
            <Input
              value={this.state.ingredients}
              onChange={this.handleInputChange}
              className="form-control form-control-sm"
              name="ingredients"
              placeholder="Ingredients"
              title="Please supply the ingredients and amounts on this line."
              tabindex='10'
              //this will later be changed to a dropdown or multi-select
            />
            <Input
              value={this.state.directions}
              onChange={this.handleInputChange}
              className="form-control form-control-sm"
              name="directions"
              placeholder="Steps to make this recipe"
              title="Please supply the steps to create this recipe."
              tabindex='11'
            />
            <Input
              value={this.state.notes}
              onChange={this.handleInputChange}
              className="form-control form-control-sm"
              name="notes"
              placeholder="Say something about this recipe"
              title="Please supply any additional comments on this recipe."
              tabindex='12'
            />
            <FormBtn
              tabindex='13'
              disabled={!(this.state.title && this.state.categories && this.state.ingredients && this.state.directions && this.state.notes)}
              onClick={this.handleFormSubmit}
            >
              Submit
            </FormBtn>
          </form>
        </div>
      </div>
		)
	}
}

export default NewRecipe;

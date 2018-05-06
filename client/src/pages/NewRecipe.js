import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar_1";
import { Input, FormBtn } from "../components/Form";
import Row from "../components/Row";

class NewRecipe extends Component {
  state = {
    recipe: [],
    title: "",
    rating: 0,
    prep_time: "", // Need control statement for # input.
    cook_time: "", // Need control statement for # input.
    difficulty: "",
    source: "",
    story: "",
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
        story: this.state.story,
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
          story: "",
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
		<div className='container'>
				<Row>
					<div className='col-2 float-left'>
            <img src="..." class="rounded" alt="..."/>
					</div>
					<div className="col-10 text-center">
						<h1>Create a Recipe</h1>
					</div>
				</Row>
        <div className='section mb-0'>
          <Row>
            <div className='col-6'>
              <div>
                  <label 
                    className="col-form-label col-form-label-sm" 
                    for="inputSmall">
                    Title:
                  </label>
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
                <label
                  className="col-form-label col-form-label-sm" 
                  for="inputSmall">
                  Author:	
                </label>		
                <Input
                  value={this.state.author}
                  onChange={this.handleInputChange}
                  className="form-control form-control-sm"
                  type="text"
                  name="author"
                  placeholder="Whose recipe is this?"
                  title="Please supply the author of this recipe."
                  tabindex="2"
                />
              </div>
              <div>
                <label 
                  className="col-form-label col-form-label-sm" 
                  for="inputSmall">
                  Categories:
                </label>
                <Input
                  value={this.state.categories}
                  onChange={this.handleInputChange}
                  className="form-control form-control-sm"
                  type="text"
                  name="categories"
                  placeholder="Choose all that apply"
                  title="Please supply which category this recipe belongs to."
                  tabindex="3"
                //this will later be changed to a dropdown
                />
              </div>
              <div>
                <label 
                  className="col-form-label col-form-label-sm" 
                  for="inputSmall">
                  Prep Time:
                </label>
                <Input
                  value={this.state.prep_time}
                  onChange={this.handleInputChange}
                  className="form-control form-control-sm"
                  name="prep_time"
                  type="text" //control method to handle insuring only #'s are entered
                  placeholder="Recipe's Prep time in minutes"
                  title="Please enter the prep time of this recipe in minutes."
                  tabindex="4"
                  //this will later be changed to a dropdown
                />
              </div>
              <div>
                <label 
                  className="col-form-label col-form-label-sm" 
                  for="inputSmall">
                  Cook Time:
                </label>
                <Input
                  value={this.state.cook_time}
                  onChange={this.handleInputChange}
                  className="form-control form-control-sm"
                  name="cook_time"
                  placeholder="Recipe's Prep time in minutes."
                  placeholder="Cook time"
                  title="Please enter the cook time in minutes."
                  tabindex="5"
                  //this will later be changed to a dropdown
                />
              </div>
              <div>
                <label 
                  className="col-form-label col-form-label-sm" 
                  for="inputSmall">
                  Yield:
                </label>			
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
                  tabindex="6"
                  //this will later be changed to a dropdown
                />
              </div>
            </div>
            <div className='col-6'>
              <div className='row'> 
                <div className='col-12 text-center'>
                  <img src="..." class="rounded" alt="..."/>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <button type="button" class="btn btn-secondary" tabindex="10">Choose Image</button>
                </div>
                <div className='col-md-4 col-sm-12'>
                  <button type="button" class="btn btn-dark" tabindex="11">Upload Image</button>
                </div>
              </div>
            </div>
          </Row>
        </div>
        <div className='section mt-0'>
          <div className='row'>
            <div className="col-12 col-md-12 form-group">
              <label 
                for="shortDesc">
                Short Description:
              </label>
              <textarea 
                // value={this.state.short_desc} //not sure why value={this.state.short_desc} is preventing any text.
                value={this.state.short_descx}
                onChange={this.handleInputChange}
                className="form-control" 
                id="short_descTxtA" 
                rows="9"
                cols='50'
                title="Plase enter a short description of this recipe."
                tabindex="7"
                placeholder='What is the description of this recipe?'
              />
              </div>
          </div>
          <div className='row'>
            <div className="col-12 col-md-12 form-group">
              <label 
                for="story">
                Story:
              </label>
              <textarea 
                onChange={this.handleInputChange} //not sure why value={this.state.story} is preventing any text.
                className="form-control" 
                id="short_descTxtA" 
                rows="9"
                cols='50'
                title='Please supply the story surrounding this recipe.'
                tabindex="8"
                placeholder='What is your story?'
              />
            </div>
          </div>
          <div className='row'>
            <div className="col-12 col-md-12 form-group">
              <label 
                for="directions">
                Directions:
              </label>
              <textarea 
                onChange={this.handleInputChange} //not sure why value={this.state.story} is preventing any text.
                className="form-control" 
                id="short_descTxtA" 
                rows="9"
                cols='50'
                title='Please write out the directions to create your recipe.'
                tabindex="9"
                placeholder='List out the direction steps to create this recipe'
              />
              </div>
          </div>
          <div>
        </div>
          <FormBtn
            
						disabled={!(this.state.title && this.state.categories && this.state.ingredients && this.state.directions && this.state.notes)}
						onClick={this.handleFormSubmit}
					>
						Submit
					</FormBtn>
        </div>
			</div>
		</div> 
		)
	}
}

export default NewRecipe;

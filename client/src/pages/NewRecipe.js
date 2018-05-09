import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar_1";
import { Input, FormBtn } from "../components/Form";
import axios from "axios";

class NewRecipe extends Component {
  state = {
    users: [],
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
    notes: [],
    image: "",
  };

  componentDidMount() {
    // get users for author drop down
    let theseUsers = [];
    axios.get("/api/users").then(res => {
      theseUsers = res.data.map(user => {
        return user;
      });
      console.log(theseUsers);
      this.setState({
        users: theseUsers
      });
      console.log(this.state.users);
    });
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
      author: this.state.author || localStorage.getItem("user"),
      poster: localStorage.getItem("user"),
      servings: this.state.servings || 0,
      short_desc: this.state.short_desc,
      categories: this.state.categories,
      ingredients: this.state.ingredients,
      directions: this.state.directions,
      story: this.state.story,
      notes: this.state.notes,
      image: this.state.image || "", 
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
          story: "",
          notes: [],
          image: "", 
				})
			}) // log out the information submitted as a check
			.catch(err => console.log('NewRecipe.js says, New Recipe save ' + err));
    }
  };

  render() {
    
    let users = this.state.users;
    let optionUsers = users.map(user => (
      <option key={user._id} value={user._id}>
        {user.name}
      </option>
    ));

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

              <select
                className="form-control"
                value={this.state.author}
                onChange={this.handleInputChange}
                tabindex="6"
                name="author"
              >
                <option selected="">Whose recipe is this?</option>
                {optionUsers}
              </select>              
            </div><br />
            <div>
              <select 
                className='custom-select form-control form-control-sm'
                value={this.state.servings}
                onChange={this.handleInputChange}
                tabIndex='7'
                name='servings'>
                  <option selected="">Number of servings</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                  <option value='11'>11</option>
                  <option value='12'>12</option>
                  <option value='many'>Many</option>
              </select>
            </div><br />
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
              value={this.state.story}
              onChange={this.handleInputChange}
              className="form-control form-control-sm"
              name="story"
              placeholder="Say something about this recipe"
              title="Please supply any additional comments on this recipe."
              tabindex='12'
            />
            {/* <Input
              value={this.state.notes}
              onChange={this.handleInputChange}
              className="form-control form-control-sm"
              name="notes"
              placeholder="Say something about this recipe"
              title="Please supply any additional comments on this recipe."
              tabindex='12'
            /> */}
            <Input
              value={this.state.image}
              onChange={this.handleInputChange}
              className="form-control form-control-sm"
              name="image"
              placeholder="URL of image for this recipe"
              title="Image"
              tabindex='13'
            />
            <FormBtn
              tabindex='14'
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

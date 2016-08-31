import React, {Component} from 'react'
import axios from 'axios'
import Router from 'react-router'
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Example from './RecipeinformationModal.jsx'


class ShowRecipe extends React.Component {
    constructor(props) {
    super(props);
    this.state = {

    };
    console.log(this.props)


  }

   handleClick(obj, event){
    console.log(obj)
    axios.get("https://crossorigin.me/http://food2fork.com/api/get?key=2fc55b81d38f69fa79fa74a05a1718b0&rId=" + obj.recipe_id)
    .then(response => this.setState({roy:response, reciped: obj}));
    console.log(this.state.roy)
  }

  handleClick2(obj, event){
    event.preventDefault();
    // save here
    console.log(obj)
  }



  render(){

    if (this.props.recipe == '') {
         return(
          <div>
        <section className="content-padding recipes">
        <div className="row">
          <div className="large-12 medium-12 small-12 columns text-center">
            <div className="head align-center">
              <h2 className="margin0">Great Recipes</h2>
              <h6 className="fontsans big"><strong>Find A Meal You Can Enjoy!</strong></h6>
            </div>
          </div>
        </div>

        <div className="wow bounceInUp" data-wow-offset="250">
            <center><h2>Go ahead Search!.....</h2></center>
        </div>
      </section>
    </div>
  );

    }else{
      console.log(this.props.recipe == '')
      console.log(this.props.recipe)
      var recipe = this.props.recipe

      var recipes = this.props.recipe.map(function(recipe, index){

    return(
    <div key={index}>

     <div className="large-3 medium-6 small-12 columns" data-equalizer-watch>
            <div className="recipe text-center">
              <div className="recipe-cover">
                <a onClick={this.handleClick.bind(this, recipe)} className="like"><i className="fa fa-plus"></i> More info</a>
                <a href="recipe.html" className="type">{recipe.Category}</a>

                 <img src={recipe.image_url} alt="" />
              </div>
              <h6 className="fontsans margin0"><a href="recipe.html">{recipe.Title}</a></h6>
            </div>
          </div>
          </div>

  );
    }.bind(this))
if(this.state.reciped == undefined){

       return(
      <div>
        <section className="content-padding recipes">
        <div className="row">
          <div className="large-12 medium-12 small-12 columns text-center">
            <div className="head align-center">
              <h2 className="margin0">Great Recipes</h2>
              <h6 className="fontsans big"><strong>Find A Meal You Can Enjoy!</strong></h6>
            </div>
          </div>
        </div>

        <div className="wow bounceInUp" data-wow-offset="250">
          <div className="row" data-equalizer>
            {recipes}
          </div>
        </div>
      </section>
    </div>

        );
     }else{
      return(
      <div>
        <section className="content-padding recipes">
        <div className="row">
          <div className="large-12 medium-12 small-12 columns text-center">
            <div className="head align-center">
              <h2 className="margin0">Great Recipes</h2>
              <h6 className="fontsans big"><strong>Find A Meal You Can Enjoy!</strong></h6>
            </div>
          </div>
        </div>

        <div className="wow bounceInUp" data-wow-offset="250">
          <div className="row" data-equalizer>
            {recipes}
             <Example recipe={this.state.reciped} roy={this.state.roy}/>
          </div>
        </div>
      </section>
    </div>

        );


     }


  }


  }

}

export default ShowRecipe

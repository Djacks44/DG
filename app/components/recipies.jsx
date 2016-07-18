import React, {Component} from 'react'
import axios from 'axios'


class ShowRecipe extends React.Component {
    constructor(props) {
    super(props);

    console.log(this.props)
   
    
  }

  handleClick2(obj, event){
    event.preventDefault();
    // console.log(this)
    console.log(obj)

    
  
  }



  render(){

    if (this.props.recipe == '') {
      console.log('nothing')
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
      var recipe = this.props.recipe 

      var recipes = this.props.recipe.map(function(recipe, index){

    return(
    <div key={index}>
     <div className="large-3 medium-6 small-12 columns" data-equalizer-watch>
            <div className="recipe text-center">
              <div className="recipe-cover">
                <a onClick={this.handleClick2.bind(this, recipe)} className="like"><i className="fa fa-heart-o"></i> save</a>
                <a href="recipe.html" className="type">{recipe.Category}</a>
                <a className="recipe-link" href="recipe.html"></a>
                 <img src={recipe.PhotoUrl} alt="" />
              </div>
              <h6 className="fontsans margin0"><a href="recipe.html">{recipe.Title}</a></h6>
            </div>
          </div>
          </div>

  );
    }.bind(this))

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


  }


  }

}

export default ShowRecipe

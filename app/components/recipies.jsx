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
     <div className="large-3 medium-6 small-12 columns" data-equalizer-watch>
            <div className="recipe text-center">
              <div className="recipe-cover">
                <a href="" className="like"><i className="fa fa-heart-o"></i> 2054</a>
                <a href="recipe.html" className="type">yes</a>
                <a className="recipe-link" href="recipe.html"></a>
                 <img src='https://photos.bigoven.com/avatar/photo/riceselect=45c7a1.jpg' alt="" />
              </div>
              <h6 className="fontsans margin0"><a href="recipe.html">Lemon Chicken & Orzo Soup</a></h6>
            </div>
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
                <a href="" className="like"><i className="fa fa-heart-o"></i> 2054</a>
                <a href="recipe.html" className="type">{recipe.Category}</a>
                <a className="recipe-link" href="recipe.html"></a>
                 <img src={recipe.PhotoUrl} alt="" />
              </div>
              <h6 className="fontsans margin0"><a href="recipe.html">{recipe.Title}</a></h6>
              <button onClick={this.handleClick2.bind(this, recipe)}>Save</button>
            </div>
          </div>
          </div>

  );
    }.bind(this))

       return(<div>{recipes}</div>);


  }


  }

}

export default ShowRecipe

import React, {Component} from 'react'
import axios from 'axios'


class ShowRecipe extends React.Component {
    constructor(props) {
    super(props);

   
    
  }

  handleClick(event){
    event.preventDefault();
    
  
  }



  render(){
    return(
     <div className="large-3 medium-6 small-12 columns" data-equalizer-watch>
            <div className="recipe text-center">
              <div className="recipe-cover">
                <a href="" className="like"><i className="fa fa-heart-o"></i> 2054</a>
                <a href="recipe.html" className="type">{recipe[0].Category}</a>
                <a className="recipe-link" href="recipe.html"></a>
                 <img src='https://photos.bigoven.com/avatar/photo/riceselect=45c7a1.jpg' alt="" />
              </div>
              <h6 className="fontsans margin0"><a href="recipe.html">Lemon Chicken & Orzo Soup</a></h6>
            </div>
          </div>
  );
  }
}

export default ShowRecipe

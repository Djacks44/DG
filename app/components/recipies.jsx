import React, {Component} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Example from './RecipeinformationModal.jsx'


class ShowRecipe extends React.Component {
    constructor(props) {
    super(props);
    this.state = {showModal: false };
    console.log(this.props)
   
    
  }

  handleClick2(obj, event){
    event.preventDefault();
    // console.log(this)
    console.log(obj)
    
  

    
  
  }

  close(event) {
    this.setState({ showModal: false });
  }

  open(obj, event) {
    console.log(obj)
    this.setState({ obj: obj });
    cosole.log(this.state.showModal)
    cosole.log(this.state.hey)
    this.setState({ showModal: true });
  }
  save(event) {
    console.log(this.state.obj)
    
 
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
      console.log(this.props.children)
      var recipe = this.props.recipe 

      var recipes = this.props.recipe.map(function(recipe, index){

    return(
    <div key={index}>
    
     <div className="large-3 medium-6 small-12 columns" data-equalizer-watch>
            <div className="recipe text-center">
              <div onClick={this.open.bind(this, recipe)} className="recipe-cover">
                <a onClick={this.handleClick2.bind(this, recipe)} className="like"><i className="fa fa-heart-o"></i> save</a>
                <a href="recipe.html" className="type">{recipe.Category}</a>
                 <img src={recipe.PhotoUrl} alt="" />
                 <a className="recipe-link"></a>
              </div>
              <h6 className="fontsans margin0"><a href="recipe.html">{recipe.Title}</a></h6>
            </div>
          </div>
          </div>

  );
    }.bind(this))

      if (this.state.obj == undefined) {
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

      <div>
        <Modal show={this.state.showModal==true} onHide={this.state.showModal==false}>

          <Modal.Header>
            <Modal.Title>{this.state.obj.Title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Add Recipes Here</p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.Save.bind(this)}>Save</Button>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>

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

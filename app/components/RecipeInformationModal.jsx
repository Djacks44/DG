import React, {Component} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

const Example = React.createClass({

  getInitialState() {
    return {
      showModal: false,
      selectedRecipe: { data: {
        Description: "",
        Instructions: ""
      }
        }
      };

  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },
  save() {
    //save here
  },

    handleClick(event){
    event.preventDefault();
    console.log("here is the handleclick to axios for RID");

    axios.get("http://api2.bigoven.com/recipe/" + this.props.recipe.RecipeID + "?api_key=3r23I5wV7rQo5zv899t13KaKjFpJW40K")
         .then(response => this.setState({selectedRecipe:response}));
         console.log(this.state.selectedRecipe);

    //load axios here using this.props to get the object ID



 this.setState({ showModal: true });



  },

  render() {
    // console.log(this.props.recipe)
    // console.log(this)



    return (
      <div>
      <a className="recipe-link" onClick={this.handleClick}></a>


        <Modal show={this.state.showModal} onHide={this.close}>

          <Modal.Header closeButton>
            <Modal.Title>{this.props.recipe.Title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <h4>{this.state.selectedRecipe.data.Description}</h4>
            <p>{ this.state.selectedRecipe.data.Instructions}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.save}>Save</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});


module.exports = Example;

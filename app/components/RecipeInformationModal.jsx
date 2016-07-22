import React, {Component} from 'react'
import axios from 'axios'
import Router from 'react-router'
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const Example = React.createClass({

  getInitialState() {
    console.log(this.props.roy)
    return {
      showModal: true,
      selectedRecipe: this.props.roy,
      
      };

  },

  componentWillReceiveProps: function(nextProps, prevProps) {
    console.log(prevProps,'loooook')
    console.log(nextProps,'hey')
  this.setState({selectedRecipe:nextProps.roy, showModal: true});
},

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },
  save(obj, events) {
    console.log(obj);
    //save here
  },

    handleClick(event){
    event.preventDefault();
    console.log("here is the handleclick to axios for RID");

    axios.get("http://api2.bigoven.com/recipe/" + this.props.recipe.RecipeID + "?api_key=3r23I5wV7rQo5zv899t13KaKjFpJW40K")
         .then(response => this.setState({selectedRecipe:response}));
         console.log(this.state.selectedRecipe);

    this.setState({ showModal: true });

  },


  render() {

      var plans = [{
        title: "Plan1",
        planedRecipes: [
          {Recipe:"name1",Description:"DX",ingredients:"Yummy"},
          {Recipe:"name2",Description:"FX",ingredients:"Tummy"},
          {Recipe:"name3",Description:"DZX",ingredients:"Lummy"}
          ]
      },
      {
        title: "Plan2",
        planedRecipes: [
          {Recipe:"name4",Description:"DX",ingredients:"Yummy"},
          {Recipe:"name5",Description:"FX",ingredients:"Tummy"},
          {Recipe:"name6",Description:"DZX",ingredients:"Lummy"}
          ]
      }];

        var addRecipetoMenu = plans.map(function(plans,index){
          return(
          <MenuItem onClick="">{plans.title}</MenuItem>
      )}.bind(this));

    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>

          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedRecipe.data.Title}</Modal.Title>

            </Modal.Header>

            <Modal.Body>
            <h4>Rating: {Math.round(this.state.selectedRecipe.data.StarRating)}</h4>
            <DropdownButton title="Save to Plan" id="bg-vertical-dropdown-3" >
              <MenuItem onClick={this.save} > + Create New Plan </MenuItem>
              {addRecipetoMenu}
            </DropdownButton>
            <br />
            <strong>Description</strong>
            <p>{this.state.selectedRecipe.data.Description}</p>
            <br />
            <strong>Instructions</strong>
            <p>{ this.state.selectedRecipe.data.Instructions}</p>
          </Modal.Body>

          <Modal.Footer>

            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },

});


module.exports = Example;

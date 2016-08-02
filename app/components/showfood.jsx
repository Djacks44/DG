import React, {Component} from 'react'
import axios from 'axios'
import Router from 'react-router'
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const Showfood = React.createClass({

  getInitialState() {
    console.log(this.props.pool)
    console.log('lol')
    return {
      selectedRecipe: this.props.pool,
      };

  },

  componentWillReceiveProps: function(nextProps, prevProps) {
    console.log(prevProps,'loooook')
    console.log(nextProps,'hey')
      axios.get("/api/show")
         .then(response => this.setState({plans:response}));
         console.log(this.state.plans);
},



  //   handleClick(event){
  //   event.preventDefault();
  //   console.log("here is the handleclick to axios for RID");

  //   axios.get("http://api2.bigoven.com/recipe/" + this.props.recipe.RecipeID + "?api_key=3r23I5wV7rQo5zv899t13KaKjFpJW40K")
  //        .then(response => this.setState({selectedRecipe:response}));
  //        console.log(this.state.selectedRecipe);

  //   this.setState({ showModal: true });

  // },


  render() {
    console.log(this.props.pool)
    console.log(this.state.plans)

if(this.props.pool == undefined){

  return (
        <div>lol</div>

      );




}else{
             var red = this.props.pool.data[0].res.map(function(l,index){
              console.log(l)
              console.log(index)
              return(
               <img id="sick" src={l.image} alt="" />
              )}.bind(this));
   

    return (
        <div>{red}</div>

      );
  }
  },

});


module.exports = Showfood;
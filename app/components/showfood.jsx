import React, {Component} from 'react'
import axios from 'axios'
import Router from 'react-router'
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const Showfood = React.createClass({

  getInitialState() {


    return {
      pool: this.props.pool,
      };

  },


  handleClick(event){
    // axios.get("/api/show")
    //   .then(response => this.setState({pool:response}));
    //     console.log(this.state.res);

  },


  render() {
    // console.log(this.props.pool)
    // console.log(this.state.plans)

  if(this.props.pool == undefined){

  return (
        <div>
          <h2>
            Start Saving.....
          </h2>
        </div>
        );




}else{
             var foods = this.props.pool.data[0].res.map(function(food,index){
              return(
               <img id="sick" src={food.image} alt="" />
              )}.bind(this));
   

    return (
        <div>{foods}</div>

      );
  }
  },

});


module.exports = Showfood;
import React, {Component} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

const Example = React.createClass({

  getInitialState() {
    return { showModal: false };

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
    console.log(this)
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
            <h4>add recipe here</h4>
            <p>and stuff</p>
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
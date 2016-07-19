import React, {Component} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

const Example = React.createClass({

  getInitialState() {
    return { showModal: false };
  },
    componentDidUpdate: function(nextProps, prevState, nextState){
      console.log(nextProps, prevState, nextState)
      console.log('yes')

    
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

    handleClick(event){
    event.preventDefault();
    console.log(this)
 this.setState({ showModal: true });

    
  
  },

  render() {
    // console.log(this.props.recipe)
    // console.log(this)

 

    return (
      <div>
        
      <a className="recipe-link"  onClick={this.handleClick.bind(this)}></a>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.recipe.Title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
     <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermt eros.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});


module.exports = Example;
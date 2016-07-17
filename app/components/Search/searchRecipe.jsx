import React, {Component} from 'react'
import axios from 'axios'


class SearchRecipe extends React.Component {
    constructor() {
    super();
    this.state = {
      search:[],
      sTerm:""
    };
  }

  handleClick(){
   var x = this.refs.searchTerm;
   console.log(x);
   axios.get("http://api2.bigoven.com/recipes?pg=1&rpp=25&title_kw=chicken&api_key=3r23I5wV7rQo5zv899t13KaKjFpJW40K")
   .then(function(response){console.log(response)});
  }

  render(){
    return(
    <div>
      <form className="new-resolution" onSubmit = {this.handleClick.bind(this)}>
        <input type="text" ref="searchTerm" placeholder="What do you want to Eat?" />
        <button onClick={this.handleClick}>Submit</button>
     </form>
    </div>
  );
  }
}

React.render(<SearchRecipe />, document.getElementById("container"))

export default SearchRecipe

import React, {Component} from 'react'
import axios from 'axios'

class SearchRecipe extends Component {
  constructor() {
    super();
    this.state = {
      search:[],
      sTerm:""
    }

  handleClick: function(){
    let sTerm = this.ref.searchterm
    console.log(sTerm);
    axios.get("http://api2.bigoven.com/recipes?pg=1&rpp=25&title_kw=chicken&api_key=3r23I5wV7rQo5zv899t13KaKjFpJW40K")
    .then(function(response){console.log(response)});
  )
  }

  render: function(){
    <div>

    <form className="new-resolution" onSubmit={this.search.bind(this)}>
      <input type="text" ref="searchTerm" placeholder="What do you want to Eat?" />
      <button onClick={this.handleClick}>Submit</button>
    </form>

    </div>
  }


  }


}

export default SearchRecipe

import React, {Component} from 'react'
import axios from 'axios'
import ShowRecipe from './recipies.jsx'


class SearchRecipe extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      search:[],
    };
  }

  handleClick(event){
    event.preventDefault();
   var x = this.refs.lol.value.trim();

   axios.get("http://api2.bigoven.com/recipes?pg=1&rpp=25&title_kw="+x+"&api_key=3r23I5wV7rQo5zv899t13KaKjFpJW40K")
     .then(response => this.setState({ search: response.data.Results}));
  }



  render(){
    return(
    <div>
    <div>
      <form className="new-resolution" onSubmit={this.handleClick.bind(this)}>
        <input type="text" ref="lol" placeholder="What do you want to Eat?" />
        <button onClick={this.handleClick.bind(this)}>Submit</button>
     </form>
    </div>

      <div>
        <ShowRecipe recipe={this.state.search}/>
      </div>

</div>



  );
  }
}

export default SearchRecipe

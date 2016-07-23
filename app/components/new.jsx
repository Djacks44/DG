import React, {Component} from 'react'
import axios from 'axios'
import ShowRecipe from './recipies.jsx'


class SearchRecipe extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      search:[],
      loggedin: false
    }
  }

  componentDidMount() {
    axios.get('/users/userlogedin')
         .then(req => this.setState({ loggedin: req.data.logged_in}));
  }

  handleClick(event){
    event.preventDefault();
   var x = this.refs.lol.value.trim();

   axios.get("http://api2.bigoven.com/recipes?pg=1&rpp=8&any_kw="+x+"&photos=true&api_key=3r23I5wV7rQo5zv899t13KaKjFpJW40K")
     .then(response => this.setState({ search: response.data.Results}));
  }


  render(){
    // return(
    //    <div>
    //       <header id="header">
    //   <nav className="wow fadeInDown">
    //     <div className="row">
    //       <div className="large-3 medium-12 small-12 columns">
    //         <img src='assets/img/dailygrub.png' className="img-responsive logo"/>
    //       </div>
    //       <div className="large-9 medium-12 small-12 columns">
    //         <span id="showmobilemenu" className="hide-for-large-up">Menu</span>
    //         <ul id="mainnav">
    //           <li><a href="/" className="active">Home</a></li>
    //           <li><a href="/Profile">Profile</a></li>
    //           <li><a href="/MyRecipes">My Recipes</a></li>
    //           <li><a href="views/blog.html">About Us</a></li>
    //           <li role="presentation"><a href="#" data-toggle="modal" data-target="#sign-in" class="whtText">Sign In</a></li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // )

    if (this.state.loggedin) {
      return(
        <h1>FUCK YOU!!!!!!!!</h1>
      )}else{
        return(
          <div>
          <header>
          <section id="header-content">
          <img src='assets/img/dailygrub.png'  className="wow fadeInDown img-responsive logo"/>
          <div>
          <form onSubmit={this.handleClick.bind(this)}>
          <input id="bti" type="text" ref="lol" placeholder="What do you want to Eat?" />
          <button id="bt" onClick={this.handleClick.bind(this)}>Submit</button>
          </form>
          </div>
          <br />
          <h6 className="big fontsans">The best recipes for tasty dishes</h6>

          </section>
          </header>


          <div>
          <ShowRecipe recipe={this.state.search} loggedin={this.state.loggedin}/>
          </div>

          </div>
        );
      }
    }
  }


export default SearchRecipe

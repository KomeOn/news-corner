import React from 'react';
import { Parameter } from  './restricedCode.js';
import './search.css';

class SearchFeed extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        search: "",
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
  

    handleSubmit = async (event) => {
      //TODO  Add date-time filter
      event.preventDefault();
      let resp = await fetch(`https://webhose.io/filterWebContent?token=${Parameter.Token}&site_type=news&size=10&format=${Parameter.Format.Json}&sort=relevancy&q="${this.state.search}" language:${Parameter.Languages.English}`);
      //let resp = await fetch(`https://webhose.io/filterWebContent?token=${Parameter.Token}&format=${Parameter.Format.json}&q="oneplus" language:${Parameter.Languages.English}`);
      //let resp = await fetch('https://api.github.com/users/KomeOn');
      let data = await resp.json();
      console.log("Data: ", data['posts']);
      this.setState({search: ''})
      this.props.onSubmit(this.state.search, data['posts']);
    } 

    //TODO Customzie the search bar and button
    render() {
      return (
        <React.Fragment>
          <form onSubmit={this.handleSubmit}>
            <span style={{paddingRight: '16px'}}>Search here: </span>
            <input type="text" value={this.state.search} onChange={event => this.setState({search: event.target.value})} 
              placeholder="Enter news by topic, name, date...." />
            <button>Search</button>
            
          </form>
        </React.Fragment>
      )
    }
}

export default SearchFeed;
  
import React from 'react';
import { Parameter } from  './restricedCode.js';

class SearchFeed extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        search: ""
      }
    }
  
    handleSubmit = async (event) => {
      event.preventDefault();
      let resp = await fetch(`https://webhose.io/filterWebContent?token=${Parameter.Token}&format=${Parameter.Format.json}&q="${this.state.search}" language:${Parameter.Languages.English}`);
      //let resp = await fetch(`https://webhose.io/filterWebContent?token=${Parameter.Token}&format=${Parameter.Format.json}&q="oneplus" language:${Parameter.Languages.English}`);
      //let resp = await fetch('https://api.github.com/users/KomeOn');
      let data = await resp.json();
      console.log("Data: ", data['posts']);
      this.props.onSubmit(this.state.search, data['posts']);
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.search} onChange={event => this.setState({search: event.target.value})} 
            placeholder="Enter news by topic, name, date...." />
          <button>Search</button>
        </form>
      )
    }
}

export default SearchFeed;
  
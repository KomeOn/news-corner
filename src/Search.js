import React from 'react';
import { Parameter } from  './restricedCode.js';
import './search.css';
import moment from 'moment';

class SearchFeed extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        search: "",
        datetime: ""
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit = async (event) => {
      event.preventDefault();
      let resp;
      if(this.state.datetime === "") {
        resp = await fetch(`https://webhose.io/nseFilter?token=${Parameter.Token}&q="${this.state.search}" language:${Parameter.Languages.English} site.type:news`);
      }
      else {
        let epooch = moment(this.state.datetime).unix();
        let date = moment(this.state.datetime, 'YYYY-MM-DD').valueOf();
        let dt = moment().valueOf();
        if (date > dt) {
          alert("Selected date is more than today");
        }
        else {
          resp = await fetch(`https://webhose.io/nseFilter?token=${Parameter.Token}&ts=${epooch}&q="${this.state.search}" language:${Parameter.Languages.English} site.type:news`);
        }
      }
      let data = await resp.json();
      this.setState({search: ''})
      this.props.onSubmit(this.state.search, data.docs);
    } 

    render() {
      return (
        <div style={{marginTop: "25px", marginBottom: "25px" }}>
          <div className="Form-header">Search any topic, blogs, news and discussions here....</div>
          <form onSubmit={this.handleSubmit}>
            <input type="search" value={this.state.search} onChange={event => this.setState({search: event.target.value})} 
            placeholder="Enter news by topic, name...." />
            <input type="date" min="1970-01-01" name="datetime" value={this.state.datetime} 
            onChange={event => this.setState({datetime: event.target.value})} />
            <button>Search</button>  
          </form>
        </div>
      )
    }
}

export default SearchFeed;
  
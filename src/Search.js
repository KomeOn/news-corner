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
      //TODO  Add date-time filter
      event.preventDefault();
      let resp;
      if(this.state.datetime === "") {
        console.log("in without ts")
        console.log(this.state.datetime);
        resp = await fetch(`https://webhose.io/filterWebContent?token=${Parameter.Token}&site_type=news&size=10&format=${Parameter.Format.Json}&sort=relevancy&q="${this.state.search}" language:${Parameter.Languages.English}`);
      }
      else {
        console.log("in with ts");
        console.log(this.state.datetime);
        let epooch = moment(this.state.datetime).unix();
        let date = moment(this.state.datetime, 'YYYY-MM-DD').valueOf();
        let dt = moment().valueOf();
        console.log("d1 ",date," dt ",dt);
        console.log(date > dt ? "True" : "False");
        if (date > dt) {
          alert("Selected date is more than today");
        }
        else {

          console.log("url: epooch: ",`https://webhose.io/filterWebContent?token=${Parameter.Token}&site_type=news&size=10&format=${Parameter.Format.Json}&sort=relevancy&q="${this.state.search}" published:>${epooch} language:${Parameter.Languages.English}`);
          //resp = await fetch(`https://webhose.io/filterWebContent?token=${Parameter.Token}&site_type=news&size=10&format=${Parameter.Format.Json}&sort=relevancy&q="${this.state.search}" published:>${epooch} language:${Parameter.Languages.English}`);
        }
      }
      //let data = await resp.json();
      //console.log("Data: ", data['posts']);
      //this.setState({search: ''})
      //this.props.onSubmit(this.state.search, data['posts']);
    } 

    //TODO Customzie the search bar and button
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
  
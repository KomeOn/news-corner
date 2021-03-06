import React from 'react';
import { Parameter } from './restricedCode.js';
import './search.css';
import moment from 'moment';

class SearchFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      datetime: "",
      running: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAction = this.handleAction.bind(this);
  }

  handleAction() {
    let decision = this.state.running;
    this.setState({ running: !decision });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let resp;
    this.handleAction();
    if (this.state.datetime === "") {
      resp = await fetch(`https://webhose.io/nseFilter?token=${Parameter.Token}&q=${this.state.search} language%3A${Parameter.Languages.English} site.type%3Anews`);
    }
    else {
      let epooch = moment(this.state.datetime).unix() - 19800;
      let date = moment(this.state.datetime, 'YYYY-MM-DD').valueOf();
      let dt = moment().valueOf();
      console.log("dt: ", dt, " & date: ", date, "epooch: ", epooch)
      if (date > dt) {
        alert("Selected date is more than today");
      }
      else {
        // resp = await fetch(`https://webhose.io/nseFilter?token=${Parameter.Token}&ts=${epooch}&q=${this.state.search} language%3A${Parameter.Languages.English} site.type%3Anews`);
        resp = await fetch(`https://webhose.io/nseFilter?token=${Parameter.Token}&q=${this.state.search} published:>${moment(this.state.datetime).valueOf()} language:${Parameter.Languages.English} site.type:news`);
      }
    }
    let data = await resp.json();
    this.setState({ search: '' })
    this.setState({ datetime: '' })
    this.handleAction();
    this.props.onSubmit(this.state.search, data.docs);
  }

  render() {
    return (
      <div style={{ marginTop: "1.625em", marginBottom: "1.625em" }}>
        <p className="Form-header">Search any topic, blogs, news and discussions here....</p>
        <form onSubmit={this.handleSubmit}>
          <input type="search" value={this.state.search}
            onChange={event => this.setState({ search: event.target.value })}
            placeholder="Enter news by topic, name...." />
          <input type="datetime-local" min="1970-01-01" name="datetime" value={this.state.datetime}
            onChange={event => this.setState({ datetime: event.target.value })} placeholder="Published Till Date" />
          {!this.state.running && <button>Search</button>}
          {this.state.running && <button disabled>Searching...</button>}
        </form>
      </div>
    )
  }
}

export default SearchFeed;

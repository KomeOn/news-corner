import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './result';
import SearchFeed from './search';
import RecentList from './recent';
import reportWebVitals from './reportWebVitals';

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicName: " ",
      searchResult: [],
    }
  }

  searchTopic = (topic, data) => {
   this.setState({ 
                    topicName: topic,
                    searchResult: data,
                    });
   //console.log("in:", this.state.searchResult) 
  };

  render() {
    return (
      <React.Fragment>
      <SearchFeed onSubmit={this.searchTopic}/>
      <RecentList />
      <h1>-------------------Search Result-------------</h1>
      <CardList topicName={this.state.topicName} searchResult={this.state.searchResult}/>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <NewsFeed />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

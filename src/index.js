import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchFeed from './Search';
import reportWebVitals from './reportWebVitals';


const CardList = (props) => (
    <div>
      {props.searchResult.map(news => <App topicName={props.topicName} key={news['uuid']} {...news} /> )}
    </div>
);

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recent: [],
      topicName: " ",
      searchResult: [],
    }
  }

  searchTopic = (topic, data) => {
   this.setState({ 
                    topicName: topic,
                    searchResult: data,
                    });
   console.log("in:", this.state.searchResult) 
  };

  render() {
    return (
      <React.Fragment>
      <SearchFeed onSubmit={this.searchTopic}/>
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

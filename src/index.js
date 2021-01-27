import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewsList from './result';
import SearchFeed from './search';
import RecentList from './recent';
import HeaderNav from './header';
import FooterPlate from './footer';
import reportWebVitals from './reportWebVitals';

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicName: " ",
      searchResult: [],
      viewURL: " ",
    }

  }

  searchTopic = (topic, data) => {
   this.setState({ 
                    topicName: topic,
                    searchResult: data,
                    });
  };

  render() {
    return (
      <React.Fragment>
        <HeaderNav />
        <SearchFeed onSubmit={this.searchTopic}/>
        <RecentList/>
        { this.state.searchResult.length > 0 && <NewsList topicName={this.state.topicName} searchResult={this.state.searchResult}/> }
        <FooterPlate />
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

reportWebVitals();

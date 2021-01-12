import React, { useState, useEffect } from 'react';
import { Parameter } from  './restricedCode.js';
import './card.css';
import Moment from 'react-moment';

export default function RecentList(props) { //TODO change the name of function "NewsList"
    const [recent, setRecent] = useState([]);

    useEffect(() => {
        async function fetchData() {
        let resp = await fetch(`https://webhose.io/filterWebContent?token=${Parameter.Token}`);
        let data = await resp.json();
        console.log("Recent: ", data['posts']);
        setRecent(data['posts']);
      };
      console.log("Recent2: ", recent);
      fetchData();
    }, []);
    //{props.searchResult.map(news => <RecentCard topicName={props.topicName} key={news['uuid']} {...news} />)}
    //{recent.map(news => <RecentCard key={news['uuid']} {...news} />)}
    return (
        <div>
          {recent.map(news => <RecentCard key={news['uuid']} {...news} />)}
        </div>
    );
}

class RecentCard extends React.Component {  //TODO change the name of function to "NewsCard"
  render() {
    const data = this.props;
    console.log("App: ",data); //TODO remove this section
    //TODO restructure the return() function to display it like a card
    //TODO Remove: UUID, URL 'p' tag
    //TODO Redesign: Author, Published, Title, Text, 'a' tag
    
    return (
      <div className="card">
        {data['thread']['main_image'] && <img src={data['thread']['main_image']} alt="Article"/>}
        <p className="info-sec">
          { !data['author'] && <p className="txt">Anonymous</p>}
          {data['author'] && <p className="txt">{data['author']}</p>}
          {data['published'] && <Moment format="MM-DD-YYYY" className="txt">{data['published']}</Moment>}
        </p>
        {data['title'] && <p className="title">{data['title']}</p>}
        {data['text'] && <p className="sub-txt">{data['text']}</p>}
        {data['thread']['url'] && <p>URL: {data['thread']['url']}</p>}
        {data['thread']['url'] && <a href={data['thread']['url']}>Click me</a>}
      </div>
    );
  }
}

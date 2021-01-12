import React, { useState, useEffect } from 'react';
import { Parameter } from  './restricedCode.js';

export default function RecentList(props) { //TODO change the name of function "NewsList"
    const [recent, setRecent] = useState([]);

    useEffect(() => {
        async function fetchData() {
        let resp = await fetch(`https://webhose.io/filterWebContent?token=${Parameter.Token}`);
        let data = await resp.json();
        console.log("Recent: ", data['posts']);
        setRecent(data['posts']);
      };
      fetchData();
      console.log("Recent2: ", recent);
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
      <div>
        <p>UUID: {data['uuid']}</p>
        <p>Author: {data['author']}</p>
        <p>Published: {data['published']}</p>
        <p>Title: {data['title']}</p>
        <p>Text: {data['text']}</p>
        <img src={data['thread']['main_image']} alt="Article"/>
        <p>URL: {data['thread']['url']}</p>
        <a href={data['thread']['url']}>Click me</a>
        <h1>--------------------------------------- Break ---------------------------------------</h1>
      </div>
    );
  }
}

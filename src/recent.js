import React, { useState, useEffect } from 'react';
import { Parameter } from  './restricedCode.js';
import './card.css';
import Moment from 'react-moment';
import {ReactComponent as Loader} from './loading.svg';

export default function RecentList(props) { //TODO change the name of function "NewsList"
    const [recent, setRecent] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
          setLoading(true);
        let resp = await fetch(`https://webhose.io/filterWebContent?token=${Parameter.Token}&size=4&format=json&site_type=news&q="Cricket" language:English`);
        let data = await resp.json();
        //console.log("Recent: ", data['posts']);
        setLoading(false);
        setRecent(data['posts']);
      };
      //console.log("Recent2: ", recent);
      fetchData();
    }, []);
    //{props.searchResult.map(news => <RecentCard topicName={props.topicName} key={news['uuid']} {...news} />)}
    //{recent.map(news => <RecentCard key={news['uuid']} {...news} />)}
    return (
        <div className="down-slide">
          {loading &&  <Loader /> }
          {recent.map(news => <RecentCard key={news['uuid']} {...news} />)}

        </div>
    );
}

class RecentCard extends React.Component {  //TODO change the name of function to "NewsCard"
  render() {
    const data = this.props;
    //console.log("App: ",data); //TODO remove this section
    //TODO restructure the return() function to display it like a card
    //TODO Remove: UUID, URL 'p' tag
    //TODO Redesign: Author, Published, Title, Text, 'a' tag
    //<p className="sub-txt">{data['text']}</p>
    
    return (
      <div className="card">
        { data['thread']['main_image'] && <img src={data['thread']['main_image']} alt={data['thread']['image_text']}/> }
        <div className="info-sec">
          { !data['author'] && <p className="txt">Anonymous</p> }
          { data['author'] && <p className="txt">{data['author']}</p> }
          { data['published'] && <Moment format="MM-DD-YYYY" className="txt">{data['published']}</Moment> }
        </div>
        <p className="title">{data['title']}</p>
        <a href={data['thread']['url']}><button>Click me</button></a>
      </div>
    );
  }
}

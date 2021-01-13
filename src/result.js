import React from 'react';
import './card.css';
import Moment from 'react-moment'

export default function CardList(props) { //TODO change the name of function "NewsList"
    return (
        <div >
            {props.searchResult.map(news => <Result topicName={props.topicName} key={news['uuid']} {...news} />)}
        </div>
    );
}

class Result extends React.Component {  //TODO change the name of function to "NewsCard"
  render() {
    const data = this.props;
    //console.log("App: ",data); //TODO remove this section
    //TODO restructure the return() function to display it like a card
    //TODO Remove: UUID, URL 'p' tag
    //TODO Redesign: Author, Published, Title, Text, 'a' tag
    
    return (
      <div className="column">
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

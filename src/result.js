import React from 'react';

export default function CardList(props) { //TODO change the name of function "NewsList"
    return (
        <div>
            {props.searchResult.map(news => <Result topicName={props.topicName} key={news['uuid']} {...news} />)}
        </div>
    );
}

class Result extends React.Component {  //TODO change the name of function to "NewsCard"
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

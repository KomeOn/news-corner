import React from 'react';
import './App.css';

export default class App extends React.Component {  
  render() {
    const data = this.props;
    console.log("App: ",data);
    return (
      <div>
        <p>UUID: {data['uuid']}</p>
        <p>Author: {data['author']}</p>
        <p>Published: {data['published']}</p>
        <p>Title: {data['title']}</p>
        <p>Text: {data['text']}</p>
        <h1>--------------------------------------- Break ---------------------------------------</h1>
      </div>
    );
  }
}

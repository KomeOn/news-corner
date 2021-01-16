import React from 'react';
import './card.css';
import Moment from 'react-moment';
import './result.css';

export default function NewsList(props) {
    return (
        <NewsContainer data={props.searchResult} topicName={props.topicName}/>
    );
}

class NewsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      article: [],
      site: [],
    };
    this.readingView = this.readingView.bind(this);
  }

  readingView(data) {
    console.log("inside: ",data)
    this.setState({
      article: data['article'],
      site: data['site'],
    });
  }

  render() {
    let data = this.props.data;
    let article = this.state.article;
    let site = this.state.site;
    
    return (
      <div className="row">
        <div className="column-4">
          {data.map(news => <NewsCard topicName={data.topicName} onClick={this.readingView} key={news['article']['uuid']} {...news} />)}
        </div>
        <div className="column-6">
        <ReadingSection title={article['title']} text={article['text']} summary={article['summary']} 
        image={article['media']} author={article['author']} published={article['published']} url={article['url']} categories={article['categories']} 
        domain={site['domain']} sectionTitle={site['section_title']}  />
        </div>
      </div>
    )
  }
}

class NewsCard extends React.Component { 

  render() {
    const data = this.props;
    
    return (
      <div className="column">
        { data['article']['media']['main_image'] && <img className="image" src={data['article']['media']['main_image']} alt="display text"/> }
        <div className="info-sec">
          { !data['article']['author'] && <p className="txt">Anonymous</p> }
          { data['article']['author'] && <p className="txt">{data['article']['author']}</p> }
          { data['article']['published'] && <Moment format="DD-MM-YYYY" className="txt">{data['article']['published']}</Moment> }
        </div>
        <p className="title">{data['article']['title']}</p>
        <a className="link" href={data['article']['url']}>Read More...</a>
        <br></br>
        <button className="button" onClick={()=> {this.props.onClick(this.props)}}>Read in the reading section</button>
      </div>
    );
  }
}

function ReadingSection(props) {

    return (
      <div>
        <h1>{props.title}</h1>
        {props.image && <img src={props.image['main_image']} alt=""/>}
        <div className="info-sec">
          { !props.author && <p className="read-txt">Anonymous</p>}
          { props.author && <p className="read-txt">{props.author}</p>}
          { props.published && <Moment format="DD-MM-YYYY" className="read-txt">{props.published}</Moment> }
          { props.domain && <a className="link read-txt" href={props.domain}>{props.sectionTitle}</a>}
          </div>
        <div> {props.categories && props.categories.map(category => (<span className="tags"><i class="fas fa-tag"></i> {category['name']}</span>))} </div>
        <p>{props.summary}</p>
        <p>{props.text}</p>
        <p>{props.url}</p>
        </div>

    )
  

}


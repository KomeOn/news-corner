import React from 'react';
import Moment from 'react-moment';
import './result.css';

export default function NewsList(props) {
  return (
    <NewsContainer data={props.searchResult} topicName={props.topicName} />
  );
}

class NewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      site: [],
      readOpen: false,
    };
    this.readingView = this.readingView.bind(this);
    this.readingOpen = this.readingOpen.bind(this);
  }

  readingView(data) {
    this.setState({
      article: data['article'],
      site: data['site'],
    });
  }

  readingOpen(mode) {
    this.setState({
      readOpen: mode,
    })
    console.log("mode: ", this.state.readOpen);
  }

  render() {
    let data = this.props.data;
    let article = this.state.article;
    let site = this.state.site;

    return (
      <React.Fragment>
        { !this.state.readOpen &&
          <div>
            {data.map(news => <NewsCard topicName={data.topicName} onClick={this.readingView} key={news['article']['uuid']} {...news} onPress={this.readingOpen} />)}
          </div>}
        { this.state.readOpen && <div className="row">
          <div className="column-4">
            {data.map(news => <NewsCard topicName={data.topicName} onClick={this.readingView} key={news['article']['uuid']} {...news} onPress={this.readingOpen} />)}
          </div>
          <div className="column-6">
            <ReadingSection key={article['uuid']} title={article['title']} text={article['text']} summary={article['summary']} image={article['media']} author={article['author']}
              published={article['published']} url={article['url']} categories={article['categories']} social={article['social']}
              domain={site['domain']} sectionTitle={site['section_title']} name={site['name']} />
          </div>
        </div>}
      </React.Fragment>
    )
  }
}

var mode = false;
class NewsCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expansion: false
    };
    this.handleExpansion = this.handleExpansion.bind(this);
    this.handleRead = this.handleRead.bind(this);
  }

  handleExpansion() {
    let expand = this.state.expansion;
    this.setState({ expansion: !expand });
  }

  handleRead() {
    mode = !mode;
    console.log("mode1: ", mode);
    this.props.onPress(mode);
    this.props.onClick(this.props);
  }

  render() {
    const data = this.props;

    return (
      <div className="side-news">
        { data['article']['media']['main_image'] && <img className="image" src={data['article']['media']['main_image']} alt="display text" />}
        <div className="info-sec">
          {!data['article']['author'] && <p className="txt">Anonymous</p>}
          {data['article']['author'] && <p className="txt">{data['article']['author']}</p>}
          {data['article']['published'] && <Moment format="DD-MM-YYYY" className="txt">{data['article']['published']}</Moment>}
        </div>
        <p className="title">{data['article']['title']}</p>
        <button className="expansion" onClick={this.handleExpansion}>
          <p>Read More....</p>
        </button>
        { this.state.expansion &&
          <div>
            <p><small>{data['article']['summary']}</small></p>
            <a className="link" href={data['article']['url']}>  {"<<"}   Check the original article   {">>"}  </a>
          </div>}
        <br></br>
        <button className="button" onClick={this.handleRead} ><a href="#reading" style={{ color: 'white' }}>Read in the reading section</a></button>
      </div>
    );
  }
}

function ReadingSection(props) {

  return (
    <div id="reading" className="reading-section">
      <h1>{props.title}</h1>
      { props.image && <img src={props.image['main_image']} alt="" />}
      <div className="info-sec">
        {!props.author && props.author !== undefined && <p className="read-txt">Anonymous</p>}
        {props.author && <p className="read-txt">{props.author}</p>}
        {props.published && <Moment format="DD-MM-YYYY" className="read-txt">{props.published}</Moment>}
      </div>
      <br></br>
      { props.domain && <a className="link read-txt" href={"https://" + props.domain} target="_blank" rel="noreferrer">{props.sectionTitle} ({props.name})</a>}
      { props.url && <a className="link read-txt" href={props.url} target="_blank" rel="noreferrer">Link to the original article...</a>}
      <p>{props.text}</p>
      { props.categories && <div style={{ marginTop: "10px" }}> <h3>Tags:</h3> {props.categories.map(category => (<span className="tags"><i className="fas fa-tag"></i> {category['name']}</span>))} </div>}
      { props.social &&
        <div>
          <h3>Social:</h3>
          <div>
            Comments: {props.social['facebook']['comments']} <i className="far fa-comments"></i> <hr ></hr>
            Likes: {props.social['facebook']['likes']} <i className="far fa-thumbs-up"></i> <hr></hr>
            Shares: {props.social['facebook']['shares']} <i className="far fa-share-square"></i> <hr></hr>
          </div>
        </div>}
    </div>

  )
}


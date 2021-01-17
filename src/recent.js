import React, { useState, useEffect } from 'react';
import { Parameter } from  './restricedCode.js';
import './card.css';
import moment from 'moment';
import {ReactComponent as Loader} from './loading.svg';
import './recentScript';
import './recent.css';

export default function RecentList(props) {
    
    const [recentCars, setRecentCars] = useState([]);
    const [recentCovid, setRecentCovid] = useState([]); 
    const [recentCricket, setRecentCricket] = useState([]);
    const [recentFootball, setRecentFootball] = useState([]);
    const [recentGames, setRecentGames] = useState([]); 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
          setLoading(true);
          let respCar = await fetch(`https://webhose.io/nseFilter?token=${Parameter.Token}&q='Car' language:English site.type:news`);
          let respCovid = await fetch(`https://webhose.io/nseFilter?token=${Parameter.Token}&q='Covid 2019' language:English site.type:news`);
          let respCricket = await fetch(`https://webhose.io/nseFilter?token=${Parameter.Token}&q='Cricket' language:English site.type:news`);
          let respFootball = await fetch(`https://webhose.io/nseFilter?token=${Parameter.Token}&q='Football' language:English site.type:news`);
          let respGame = await fetch(`https://webhose.io/nseFilter?token=${Parameter.Token}&q='Bethesda' language:English site.type:news`);
        
          let dataCar = await respCar.json();
          let dataCovid = await respCovid.json();
          let dataCricket = await respCricket.json();
          let dataFootball = await respFootball.json();
          let dataGame = await respGame.json();
          
          setLoading(false);
          
          setRecentCars(dataCar.docs);
          setRecentCovid(dataCovid['docs']);
          setRecentCricket(dataCricket.docs);
          setRecentGames(dataGame['docs']);
          setRecentFootball(dataFootball.docs);
      };
      fetchData();
    }, []);

    return (
      <React.Fragment>
        {loading && <Loader />}
        { !loading && <RecentContainer dataCar={recentCars} dataCovid={recentCovid} dataCricket={recentCricket} dataGame={recentGames} dataFootball={recentFootball} />}
      </React.Fragment>
    );
}

const RecentContainer = ({ dataFootball, dataGame, dataCricket, dataCovid, dataCar, isExpand = false }) => {
  
  const [expandCar, setExpandCar] = useState(isExpand);
  const [expandCovid, setExpandCovid] = useState(isExpand);
  const [expandCricket, setExpandCricket] = useState(isExpand);
  const [expandGames, setExpandGames] = useState(isExpand);
  const [expandFootball, setExpandFootball] = useState(isExpand);
  
    return (
    <React.Fragment>
      
    <div className="folder">
      <div className="folder-header">
        <span className="folder-title" onClick={() => setExpandCovid(expandCovid => !expandCovid)}>
          Covid 2019
        </span>
        <div className="clearfix"></div>
      </div>
      <div className="folder-body">
        { expandCovid && dataCovid.map(news => <RecentCard key={news['article']['uuid']} title={news['article']['title']} text={news['article']['text']} 
        summary={news['article']['summary']} image={news['article']['media']['main_image']} author={news['article']['author']} 
        published={news['article']['published']} url={news['article']['url']} categories={news['article']['categories']} 
        domain={news['site']['domain']} sectionTitle={news['site']['section_title']} />)} 
      </div>
    </div>

    <div className="folder">
      <div className="folder-header-rev" onClick={() => setExpandGames(expandGames => !expandGames)}>
        <span className="folder-title">
          Games
        </span>
        <div className="clearfix"></div>
      </div>
      <div className="folder-body">
        { expandGames && dataGame.map(news => <RecentCard key={news['article']['uuid']} title={news['article']['title']} text={news['article']['text']} 
        summary={news['article']['summary']} image={news['article']['media']['main_image']} author={news['article']['author']} 
        published={news['article']['published']} url={news['article']['url']} categories={news['article']['categories']} 
        domain={news['site']['domain']} sectionTitle={news['site']['section_title']} />)} 
      </div>
    </div>

<div className="folder">
      <div className="folder-header">
        <span className="folder-title" onClick={() => setExpandCar(expandCar => !expandCar)}>
          Car
        </span>
        <div className="clearfix"></div>
      </div>
      <div className="folder-body">
        { expandCar && dataCar.map(news => <RecentCard key={news['article']['uuid']} title={news['article']['title']} text={news['article']['text']} 
        summary={news['article']['summary']} image={news['article']['media']['main_image']} author={news['article']['author']} 
        published={news['article']['published']} url={news['article']['url']} categories={news['article']['categories']} 
        domain={news['site']['domain']} sectionTitle={news['site']['section_title']} />)} 
      </div>
    </div>

  <div className="folder">
      <div className="folder-header-rev" onClick={() => setExpandCricket(expandCricket => !expandCricket)}>
        <span className="folder-title">
          Cricket
        </span>
        <div className="clearfix"></div>
      </div>
      <div className="folder-body">
        { expandCricket && dataCricket.map(news => <RecentCard key={news['article']['uuid']} title={news['article']['title']} text={news['article']['text']} 
        summary={news['article']['summary']} image={news['article']['media']['main_image']} author={news['article']['author']} 
        published={news['article']['published']} url={news['article']['url']} categories={news['article']['categories']} 
        domain={news['site']['domain']} sectionTitle={news['site']['section_title']} />)} 
      </div>
    </div>

<div className="folder">
      <div className="folder-header">
        <span className="folder-title" onClick={() => setExpandFootball(expandFootball => !expandFootball)}>
          Football
        </span>
        <div className="clearfix"></div>
      </div>
      <div className="folder-body">
        { expandFootball && dataFootball.map(news => <RecentCard key={news['article']['uuid']} title={news['article']['title']} text={news['article']['text']} 
        summary={news['article']['summary']} image={news['article']['media']['main_image']} author={news['article']['author']} 
        published={news['article']['published']} url={news['article']['url']} categories={news['article']['categories']} 
        domain={news['site']['domain']} sectionTitle={news['site']['section_title']} />)} 
      </div>
    </div>

  </React.Fragment>
  )
}



const RecentCard = ({ title, text, summary, image, author, published, url, domain, categories, sectionTitle, isExpand = false }) => {
  const [expand, setExpand] = useState(isExpand);

  return (
    <div className="box">
      <div className="title-box" onClick={() => setExpand(expand => !expand)}>
        <span className="title"><i class="fas fa-dot-circle"></i> {title}</span>
        <div className="clearfix"></div>
      </div>
      {expand && <div className="content row"> 
                    {image && <div className="column">
                       <img src={image} alt="Displaying text" />
                      </div>}  
                    <div className="column">
                      <p>
                        {author && <span>{author}</span>}{!author && <span>Anonymous</span>}  |  <span>{moment(published).fromNow()} </span>  |  { domain && <a href={"https://"+domain} target="_blank" rel="noreferrer" style={{color: "black"}}>{sectionTitle}</a>}
                      </p>
                      <div> {categories.map(category => (<span className="tags"><i class="fas fa-tag"></i> {category['name']}</span>))} </div>
                      <p>{text}</p>
                      </div>    
                    </div>}
      {!expand && <div className="content">
                  <p>{summary}</p>
                  </div>}
      
    </div>
  )
}


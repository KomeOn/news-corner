import React, { useState, useEffect } from 'react';
import { Parameter } from  './restricedCode.js';
import './card.css';
import moment from 'moment';
import {ReactComponent as Loader} from './loading.svg';
import './recentScript';
import './recent.css';

export default function RecentList(props) { //TODO change the name of function "NewsList"
    //const [recentCricket, setRecentCricket] = useState([]);
    //const [recentFootball, setRecentFootball] = useState([]);
    const [recentCars, setRecentCars] = useState([]);
    const [recentGames, setRecentGames] = useState([]); 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
          setLoading(true);
        //let respC = await fetch(`https://webhose.io/filterWebContent?token=${Parameter.Token}&size=4&format=json&site_type=news&q="Cricket" language:English`);
        //let respF = await fetch(`https://webhose.io/filterWebContent?token=${Parameter.Token}&size=4&format=json&site_type=news&q="Football" language:English`);
        //let respCr = await fetch(`https://webhose.io/filterWebContent?token=${Parameter.Token}&size=6&format=json&site_type=news&q="Cars" language:English is_first:true`);
        let respCr = await fetch(`https://webhose.io/nseFilter?token=${Parameter.Token}&q='Covid 2019' language:English site.type:news`);
        let respG = await fetch(`https://webhose.io/nseFilter?token=${Parameter.Token}&q='Bethesda' language:English site.type:news`);
        //let dataC = await respC.json();
        //let dataF = await respF.json();
        let dataCr = await respCr.json();
        let dataG = await respG.json();
        console.log("Recent: ", dataCr.docs);
        setLoading(false);
        //setRecentCricket(dataC['posts']);
        //setRecentFootball(dataF['posts']);
        setRecentCars(dataCr.docs);
        setRecentGames(dataG['docs']);
      };
      //console.log("Recent2: ", recent);
      fetchData();
    }, []);

    //{props.searchResult.map(news => <RecentCard topicName={props.topicName} key={news['uuid']} {...news} />)}
    //{recent.map(news => <RecentCard key={news['uuid']} {...news} />)}
    /*{ !loading &&  
    <div className="column">
      {recentCricket.map(news => <RecentCard key={news['uuid']} {...news} />)}
    </div>}
    { !loading &&
    <div className="column">
      {recentFootball.map(news => <RecentCard key={news['uuid']} {...news} />)}
    </div>}*/
    //{recentCars.map(news => <RecentCard key={news['uuid']} {...news} />)} 
        /*<div className="row">
          {loading &&  <Loader style={{margin: "auto"}} /> }
          { !loading &&
          <div className="column">
            {recentCars.map(news => <RecentCard key={news['uuid']} titleM={news['title']} titlem={news['thread']['title']} text={news['text']} img={news['thread']['main_image']}/>)} 
          </div>}
          { !loading &&
          <div className="column">
            {recentGames.map(news => <RecentCard key={news['uuid']} titleM={news['title']} titlem={news['thread']['title']} text={news['text']} img={news['thread']['main_image']}/>)} 
          </div>}
        </div>
        
        <RecentContainer>
          <div className="Folder-header">
            <span>
              Cars
            </span>
          </div>
        </RecentContainer>*/
    return (
      <RecentContainer dataCr={recentCars} dataG={recentGames} />
    );
}

const RecentContainer = ({ dataG, dataCr, isExpand = false }) => {
  const [expandCar, setExpandCar] = useState(isExpand);
  const [expandGames, setExpandGames] = useState(isExpand);
  //{titleM && titleM}{!titleM && titlem}
  return (
    <React.Fragment>
    <div className="folder">
      <div className="folder-header">
      <span className="folder-title" onClick={() => setExpandCar(expandCar => !expandCar)}>Covid 2019</span>
        <div className="clearfix"></div>
      </div>
      <div className="folder-body">
        { expandCar && dataCr.map(news => <RecentCard key={news['article']['uuid']} title={news['article']['title']} text={news['article']['text']} 
        summary={news['article']['summary']} image={news['article']['media']['main_image']} author={news['article']['author']} 
        published={news['article']['published']} />)} 
      </div>
    </div>
    <br></br>
    <div className="folder">
      <div className="folder-header-rev" onClick={() => setExpandGames(expandGames => !expandGames)}>
      <span className="folder-title">Games</span>
        <div className="clearfix"></div>
      </div>
      <div className="folder-body">
      { expandGames && dataG.map(news => <RecentCard key={news['article']['uuid']} title={news['article']['title']} text={news['article']['text']} 
      summary={news['article']['summary']} image={news['article']['media']['main_image']} author={news['article']['author']} 
      published={news['article']['published']} />)} 
    </div>
    </div>
    <br></br>
  </React.Fragment>
  )
}



const RecentCard = ({ title, text, summary, image, author, published, isExpand = false }) => {
  const [expand, setExpand] = useState(isExpand);
  return (
    <div className="box">
      <div className="title-box" onClick={() => setExpand(expand => !expand)}>
        <span className="title"><i class="fas fa-dot-circle"></i> {title}</span>
        <div className="clearfix"></div>
      </div>
      {expand && <div className="content row"> 
                    <div className="column">
                      <img src={image} alt="Displaying text" />
                      </div>    
                    <div className="column">
                      <p>{author && <span>{author}</span>}{!author && <span>Anonymous</span>}  |  <span>{moment(published).fromNow()}</span>
                        </p>
                      <p>{text}</p>
                      </div>    
                    </div>}
      {!expand && <div className="content">
                  <p>{summary}</p>
                  </div>}
    </div>
  )
}


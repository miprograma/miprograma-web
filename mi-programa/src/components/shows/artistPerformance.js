import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Icon } from "antd-mobile";

const ArtistPerformance = (props) => {

    const artists = props.artists;
    const performances = props.performances;
    console.log(performances)

    if(!artists || artists && artists.length === 0) return(
      <React.Fragment >
      <Icon type="loading" style={{color:'black'}}/> 
      <div> Loading...</div>
      </React.Fragment>
      );

  return(
    <React.Fragment>
      <div className = "drops" >
    <Dropdown >
  <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg" >
    Artista
  </Dropdown.Toggle>
    
  <Dropdown.Menu style={{width: '100%', marginTop: 10}}>
    {artists.map((artist, index) => {
        return <Dropdown.Item key={index} href="#/action-1">{artist.name}</Dropdown.Item>
    })}
  </Dropdown.Menu>
</Dropdown>
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg" >
      Performance
    </Dropdown.Toggle>
  
    <Dropdown.Menu style={{width: '100%', marginTop: 10}}>
    {performances.map((performance, index) => {
        return <Dropdown.Item key={index} href="#/action-1">{performance.title}</Dropdown.Item>
    })}
    </Dropdown.Menu>
  </Dropdown>
  </div>
  </React.Fragment>

)}

export default ArtistPerformance;
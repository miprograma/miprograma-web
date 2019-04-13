import React from 'react';
import Form  from "react-bootstrap/Form";
import { Icon } from "antd-mobile";

const ShowBlock = props => {
  const artists = props.artists;
  const performances = props.performances;
  let selectedArtist = props.artist;
  let selectedPerformance = props.performance;
  


  const changeArtist = (e) => {
    selectedArtist = e.currentTarget.value;
    props.onChange(props.index,{artist:selectedArtist, performance: selectedPerformance })
  }
  const changePerformance = (e) => {
    selectedPerformance = e.currentTarget.value;
    props.onChange(props.index,{artist:selectedArtist, performance: selectedPerformance })
  }

  if (!artists || (artists && artists.length === 0))
    return (
      <React.Fragment>
        <Icon type="loading" style={{ color: "black" }} />
        <div> Loading...</div>
      </React.Fragment>
    );

  return(
    
      <div className="cards">
      <Form.Group controlId="exampleForm.ControlSelect1" >
        <Form.Control as="select" value={selectedArtist} onChange={changeArtist}>
        <option key='' value='' >Selecciona artista...</option>
          {artists.map((artist, index) => {
            return (
              <option key={index} value={artist.id}>
                {artist.name}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1" >
        <Form.Control as="select" value={selectedPerformance} onChange={changePerformance}>
          <option key='' value = ''>Selecciona número...</option>
          {performances.map((performance, index) => {
            return (
              <option key={index} value={performance.id}>
                {performance.title}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
    </div>

  )}

  export default ShowBlock;
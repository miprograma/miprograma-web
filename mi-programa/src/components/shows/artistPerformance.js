import React from "react";
import { Icon } from "antd-mobile";
import Calendar from "../calendar/calendar";
import Form from "react-bootstrap/Form";

const ArtistPerformance = props => {
  const artists = props.artists;
  const performances = props.performances;

  if (!artists || (artists && artists.length === 0))
    return (
      <React.Fragment>
        <Icon type="loading" style={{ color: "black" }} />
        <div> Loading...</div>
      </React.Fragment>
    );

  return (
    <React.Fragment>
      <div className="calend-session">
        <Calendar />
        <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Sesión</Form.Label>
    <Form.Control as="select">
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
      </div>

      <div className="cards">
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control as="select">
            {artists.map((artist, index) => {
              return (
                <option key={index} >
                  {artist.name}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control as="select">
            {performances.map((performance, index) => {
              return (
                <option key={index} >
                  {performance.title}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </div>
    </React.Fragment>
  );
};

export default ArtistPerformance;

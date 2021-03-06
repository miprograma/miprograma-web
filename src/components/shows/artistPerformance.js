import React from "react";
import Calendar from "../calendar/calendar";
import Form from "react-bootstrap/Form";

const ArtistPerformance = props => {
  let date = new Date()

  

  const handleChange = (event) => {
    let selectedArtist = event.currentTarget.value;
    console.log(selectedArtist)
  }

  return (
    <React.Fragment>
      <div className="calend-session">
        <Calendar value={date} onChange={handleChange}/>
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
    </React.Fragment>
  );
};

export default ArtistPerformance;

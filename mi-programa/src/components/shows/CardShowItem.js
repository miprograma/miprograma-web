import React, {Component} from "react";
import { Icon } from "antd-mobile";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

  class CardShowItem extends Component {
  constructor (props){
    super(props);
    this.state= {
      activePerformance: false
    }
  }
  render(){

  const show = this.props.show;
  const artistList = show.artistList;
  const performanceList = show.performanceList;
  const arrayArtistPerformance = [...artistList, ...performanceList];
  

  if (!show || (show && show.length === 0))
    return (
      <React.Fragment>
        {console.log(show, "show Control")}
        <Icon type="loading" style={{ color: "black" }} />
        <div> Loading...</div>
      </React.Fragment>
    );

  return (
    <React.Fragment>
      <div className="box-controller">{show.length} Sesiones</div>
      {arrayArtistPerformance.map((session, index) => (
      <div>
        <span>Sesión </span>
        <div className="input-group">
          <fieldset>
            <Form.Group as={Row}>
              <Col>
                <Form.Check type="radio" name="formHorizontalRadios" />
              </Col>
            </Form.Group>
          </fieldset>

          <div
            type="text"
            className="form-control"
            aria-label="Text input with radio button"
          >
            { [session.name, session.title]}
            {console.log(session, 'session')}
          </div>
        </div>
      </div>
      ))}
    </React.Fragment>
  );
};
  }

export default CardShowItem;


      {/* {show.map((session, index) => ( */}
      {/* ))} */}
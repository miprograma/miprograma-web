import React from "react";
import { Icon } from "antd-mobile";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CardShowItem = props => {
  const show = props.show.show.sessions;

  if (!show || (show && show.length === 0))
    return (
      <React.Fragment>
        <Icon type="loading" style={{ color: "black" }} />
        <div> Loading...</div>
      </React.Fragment>
    );

  return (
    <React.Fragment>
      <div className="box-controller">{show.length} Sesiones</div>
      {show.map((session, index) => (
        <div>
          Sesión {index}
          <div className="box-controller" key={index}>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <fieldset>
                    <Form.Group as={Row}>
                      <Col>
                        <Form.Check type="radio" name="formHorizontalRadios" />
                      </Col>
                    </Form.Group>
                  </fieldset>
                </div>
              </div>
              <div
                type="text"
                className="form-control"
                aria-label="Text input with radio button"
              >
                {session
                  ? session.artist.name + " -- " + session.performance.title
                  : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default CardShowItem;

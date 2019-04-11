import React from 'react';
import { Icon } from "antd-mobile";


const CardShowItem = props =>{
  const show = props.show.show.sessions
  

  if (!show || (show && show.length === 0))
  return (
    <React.Fragment>
      <Icon type="loading" style={{ color: "black" }} />
      <div> Loading...</div>
    </React.Fragment>
  );
  
return(
        <React.Fragment>
        <div className="box-controller">Sesión {show.length}</div>
        <div className="box-controller">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <input
                  type="checkbox"
                  aria-label="Radio button for following text input"
                />
              </div>
            </div>
            <div
              type="text"
              className="form-control"
              aria-label="Text input with radio button"
            >
              {(show[0])? show[0].artist.name + " -- " + show[0].performance.title : console.log('nada') }
            </div>
          </div>
        </div>
        </React.Fragment>
      )}

      export default CardShowItem;
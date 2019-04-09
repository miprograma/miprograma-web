import React from "react";
import { Card, WingBlank, WhiteSpace } from "antd-mobile";
import { StickyContainer, Sticky } from "react-sticky";
import { Tabs, Badge } from "antd-mobile";
import { Icon } from "antd-mobile";

const convertDate = date => {
  const convertedDate = new Date(date);
  return (
    convertedDate.getDate() +
    "-" +
    (convertedDate.getMonth() + 1) +
    "-" +
    convertedDate.getFullYear()
  );
};

const ActivePerformance = props => {
  const tabs = [
    { title: "Próximo Artista" },
    { title: "Actuación" },
    { title: "Biografía" }
  ];

  const show = props.show

  if (!show || (show && show.sessions === 0)) {
    return (
      <React.Fragment >
        <Icon key="1" type="loading" style={{ color: "black" }} />
        <div> Loading...</div>
      </React.Fragment>
    );
  }

  if (!show.current) {
    return (
      <React.Fragment >
        Show no disponible en este momento.
      </React.Fragment>
    );
  }
  
  const data = show.date;

  return (
    <React.Fragment>
      <WingBlank size="full">
        <WhiteSpace size="full" />
        <Card>
          <Card.Header
            title="Próximo Número"
            extra={<span>Programa de Hoy</span>}
          />
          <Card.Body>
            <div style={{ fontSize: 30 }}>{show.current.performance.title}</div>
          </Card.Body>
          <Card.Footer
            content={"Artista especial"}
            // extra={<div>{convertDate(data)}</div>}
          />
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
      <WhiteSpace />
      <StickyContainer id="down-card">
        <Tabs tabs={tabs} initalPage={"t2"}>
          <div
            id="card-image"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "250px",
              color: "white",
              fontSize: 40,
              fontWeight: "bold",
              backgroundImage: `url(${show.current.artist.imageUrl})`
            }}
          >
            {show.current.artist.name}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "250px",
              backgroundColor: "#fff"
            }}
          >
            {show.current.performance.description}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "250px",
              backgroundColor: "#fff"
            }}
          >
            {show.current.artist.description}
          </div>
        </Tabs>
      </StickyContainer>
      <WhiteSpace />
    </React.Fragment>
  );
};

export default ActivePerformance;

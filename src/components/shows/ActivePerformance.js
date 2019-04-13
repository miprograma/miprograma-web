import React from "react";
import { Card, WingBlank, WhiteSpace } from "antd-mobile";
import { StickyContainer } from "react-sticky";
import { Tabs } from "antd-mobile";
import { Icon } from "antd-mobile";

// const convertDate = date => {
//   const convertedDate = new Date(date);
//   return (
//     convertedDate.getDate() +
//     "-" +
//     (convertedDate.getMonth() + 1) +
//     "-" +
//     convertedDate.getFullYear()
//   );
// };

const ActivePerformance = props => {
  const tabs = [
    { title: "Próximo Artista" },
    { title: "Actuación" },
    { title: "Biografía" }
  ];

  const show = props.show

  const active = show.sessions.find(block => {
    return show.current.artist === block.artist.id &&
      show.current.performance === block.performance.id
  })

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
            <div style={{ fontSize: 30 }}>{active.artist.name}</div>
          </Card.Body>
          <Card.Footer
            content={"Artista especial"}
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
              fontSize: 35,
              fontWeight: "bold",
              backgroundImage: `url(${active.artist.imageUrl})`
            }}
          >
            {active.artist.name}
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
            {active.performance.description}
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
            {active.artist.description}
          </div>
        </Tabs>
      </StickyContainer>
      <WhiteSpace />
    </React.Fragment>
  );
};

export default ActivePerformance;

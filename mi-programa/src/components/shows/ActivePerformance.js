import React from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import { Tabs, Badge } from 'antd-mobile';


const ActivePerformance = () => {
  const tabs = [
    { title: 'Próximo Artista' },
    { title: 'Actuación' },
    { title: 'Biografía' },
  ];
  return(
    <React.Fragment>
<WingBlank size="full" >
    <WhiteSpace size="full" />
    <Card >
      <Card.Header
        title = "Programa de hoy"

        extra={<span>Próximo número</span>}
      />
      <Card.Body >
        <div>Bailaor de la compañía nacional</div>
      </Card.Body>
      <Card.Footer content="Artista especial" extra={<div>Soleá por Bulerías</div>} />
    </Card>
    <WhiteSpace size="lg" />
  </WingBlank>
   <WhiteSpace />
   <StickyContainer id = "down-card">
     <Tabs tabs={tabs}
       initalPage={'t2'}

     >
       <div id="card-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', color: 'white', fontSize: 40, fontWeight: 'bold'}}>
       Kelian Jiménez
       </div>
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        content
       </div>
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
         Kelian Jiménez
       </div>
     </Tabs>
   </StickyContainer>
   <WhiteSpace />
   </React.Fragment>
  
  )
}

export default ActivePerformance;
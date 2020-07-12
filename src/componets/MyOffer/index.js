import React from 'react'
import { Grid, Col, Divider,Panel, Icon } from 'rsuite'
import P1 from '../../assets/project1.png'
import P2 from '../../assets/project2.png'
function MyOffer() {
    return (
       <div>
           <Divider style={{textTransform:'uppercase',fontSize:16}}>My Offer</Divider>
           <Grid>
           <Col sm={24} xs={24} md={24} lg={24}>
             <p style={{fontSize:14,color:'tomato',fontWeight:'bold'}}> A front-end developer with over 1 year. </p>
             <p style={{fontSize:14}}>I have maintained, developed and launched multiple projects from scratch, carrying the development of its'  front-end codebases. </p>
           </Col>
           <Col xs={24} sm={24} md={24} lg={24}>
               <p style={{fontSize:14,marginTop:16,marginBottom:16}}>My current toolset includes  React, Redux,React Native, Docker and all the other various frameworks, libraries and technologies related to them. </p>
           </Col>
           <Col xs={24} sm={24} md={24} lg={24}>
              <Divider>single page applications launched in  React </Divider>
              <Grid>
                  <Col xs={24} sm={24} md={12} lg={12}>
                  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: '100%' }}>
                        <img src={P1} style={{width:'100%',height:300}} />
                        <Panel header="TRAVELS.COM.MM(B2B)">
                        <p>
                           <Icon icon='chrome'  /> https://travelscomb2b.herokuapp.com/
                        </p>
                        </Panel>
                    </Panel>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12}>
                  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: '100%' }}>
                        <img src={P2} style={{width:'100%',height:300}} />
                       
                        <Panel header="TRAVELS.COM.MM">
                        <p>
                           <Icon icon='chrome'  /> https://travels.com.mm 
                        </p>
                        </Panel>
                    </Panel> 
                  </Col>
              </Grid>
           </Col>
       </Grid>
       </div>
    )
}

export default MyOffer

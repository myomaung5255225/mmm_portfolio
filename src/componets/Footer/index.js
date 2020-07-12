import React from 'react'
import { Grid, Col, IconButton, Icon } from 'rsuite'

function MainFooter() {
    return (
        <div style={{background:'#f2f2f2',minHeight:'21vh'}}>
            <Grid fluid style={{textAlign:'center'}}>
                <Col sm={24} sm={24} md={12} lg={12}>
                <div style={{minHeight:'16vh',justifyContent:'center',alignItems:'center',alignContent:'center',display:'flex'}}>
                     <div>
                      <p><Icon icon='map-marker' /> No.123 , 19<sup>th</sup> Street , Latha,Yangon,Myanmar </p>
                      <p><Icon icon='mobile' /> +95 9763725023 </p>
                     </div>
                   </div>
                </Col>
                <Col sm={24} sm={24} md={12} lg={12}>
                   <div style={{minHeight:'16vh',justifyContent:'center',alignItems:'center',alignContent:'center',display:'flex'}}>
                     <div style={{fontWeight:'bold',fontSize:15}}>
                     <p>Connet Me with</p>
                      <div>
                          <IconButton color='blue' circle icon={<Icon icon='facebook' spin  />} style={{margin:3}} />
                          <IconButton color='violet' circle icon={<Icon icon='instagram' spin   />} style={{margin:3}} />
                          <IconButton color='green' circle icon={<Icon icon='whatsapp' spin   />} style={{margin:3}} />
                          <IconButton color='red' circle icon={<Icon icon='envelope' spin   />} style={{margin:3}} />
                      </div>
                     </div>
                   </div>
                </Col>
                <Col sm={24} sm={24} md={24} lg={24}>
                    <div style={{minHeight:'5vh',fontSize:14}}>
                        Desigined by DevArth@r
                    </div>
                </Col>
            </Grid>
        </div>
    )
}

export default MainFooter

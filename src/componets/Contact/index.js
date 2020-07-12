import React, { useState } from 'react'
import { Divider, Grid, Col, Panel, Form, FormGroup, ControlLabel, Input, Icon, InputGroup, FormControl, Button, Alert } from 'rsuite'

function Contact() {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const SendMessage = () =>{
        Alert.success("Thanks for your message.")
    }
    return (
        <div>
            <Divider style={{fontSize:18,textTransform:'uppercase'}}>Contact Me</Divider>
            <Grid>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Panel bodyFill style={{padding:10}} >
                      
                      <Form fluid >
                          <FormGroup >
                              <ControlLabel>Full Name</ControlLabel>
                              <InputGroup inside style={{width:'100%'}}  >
                                <InputGroup.Addon> <Icon icon='user' style={{marginLeft:5,textAlign:'center'}} /></InputGroup.Addon>
                                <Input value={fullname} onChange={(v)=>{setFullname(v)}} />
                              </InputGroup>
                          </FormGroup>
                          <FormGroup >
                              <ControlLabel>Email Address</ControlLabel>
                              <InputGroup inside style={{width:'100%'}}  >
                                <InputGroup.Addon> <Icon icon='envelope' style={{marginLeft:5,textAlign:'center'}} /></InputGroup.Addon>
                                <Input value={email} onChange={(v)=>{setEmail(v)}} />
                              </InputGroup>
                          </FormGroup>
                          <FormGroup>
                        <ControlLabel>Message</ControlLabel>
                        <FormControl  value={message} onChange={(v)=>{setMessage(v)}} rows={5} name="textarea" componentClass="textarea" />
                        </FormGroup>
                        <FormGroup>
                            <Button disabled={fullname==='' || email==='' || message===''?true:false} onClick={()=>{SendMessage()}} block appearance='primary' > <Icon icon='send' /> SEND</Button>
                        </FormGroup>
                      </Form>
                  </Panel>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                <div style={{padding:10}}>
                   
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.000243639362!2d96.14805161426548!3d16.776663488447323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb7faed35593%3A0xe0106bd69a835d8b!2s19%20Latha%20St%2C%20Yangon!5e0!3m2!1sen!2smm!4v1594404708074!5m2!1sen!2smm" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
                 <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.000243639362!2d96.14805161426548!3d16.776663488447323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb7faed35593%3A0xe0106bd69a835d8b!2s19%20Latha%20St%2C%20Yangon!5e0!3m2!1sen!2smm!4v1594404708074!5m2!1sen!2smm' width='100%' height={400} frameBorder={0} ></iframe>
                </div>
                
                </Col>
            </Grid>
        </div>
    )
}

export default Contact

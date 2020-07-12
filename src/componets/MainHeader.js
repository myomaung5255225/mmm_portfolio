import React, { useState } from 'react'
import { Navbar, Avatar, Nav, Icon, Drawer, Button, Grid, Col } from 'rsuite'
import ME from '../assets/mmm.jpg'
import { useHistory } from 'react-router-dom'

function MainHeader() {
    const [open, setOpen] = useState(false)
    const history = useHistory()
    return (
        <div>
           <Navbar appearance='subtle' style={{background:'#f2f2f2'}}>
               <Navbar.Header style={{display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                   <Avatar circle  src={ME} style={{marginLeft:4}} /><span style={{fontSize:15,marginLeft:4}}>MYO MAUNG</span> 
               </Navbar.Header>
               <Navbar.Body>
                   
                     <Grid>
                         <Col xsHidden smHidden>
                         <Nav pullRight  >
                       <Nav.Item onClick={()=>{history.push('/')}} icon={<Icon icon='home' />} >Home</Nav.Item>
                       <Nav.Item onClick={()=>{history.push('/about')}} icon={<Icon icon='info' />} >About</Nav.Item>
                       <Nav.Item onClick={()=>{history.push('/contact')}} icon={<Icon icon='envelope' />} >Contact Me</Nav.Item>
                       
                       <Nav.Item onClick={()=>{history.push('/myoffer')}} icon={<Icon icon='trend' />} >My offer</Nav.Item>
                   </Nav>
                         </Col>
                         <Col mdHidden lgHidden>
                         <Nav  pullRight>
                        <Nav.Item onClick={()=>{setOpen(!open)}} icon={<Icon icon='bars' />}></Nav.Item>
                   </Nav> 
                         </Col>
                     </Grid>

                   
                   <Drawer placement='right' style={{maxWidth:200}} full  show={open} onHide={()=>{setOpen(!open)}} >
                    
                    <Drawer.Body>
                        <Button onClick={()=>{history.push('/')}}  block appearance='subtle'><Icon icon='home' /> Home</Button>
                        <Button  onClick={()=>{history.push('/about')}} block appearance='subtle'><Icon icon='info' /> About</Button>
                        <Button onClick={()=>{history.push('/contact')}}  block appearance='subtle'><Icon icon='envelope' /> Contact Me</Button>
                        <Button  onClick={()=>{history.push('/myoffer')}} block appearance='subtle'><Icon icon='trend' /> My offer</Button>
                    </Drawer.Body>
                   </Drawer>
               </Navbar.Body>
           </Navbar> 
        </div>
    )
}

export default MainHeader

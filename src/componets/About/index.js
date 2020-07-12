import React from 'react'
import { Divider,Grid, Col, Panel, Icon,Animation, Button,Progress } from 'rsuite'
import ME from '../../assets/mmm.jpg'
import {myskills} from './Myskills'
function About() {
    const {Bounce,Slide} = Animation
    const {Line} = Progress
    return (
      <div>
          <Divider style={{textTransform:'uppercase',fontSize:18}}>About Me</Divider>
          <Grid>
            <Col xs={12} sm={12} md={6} lg={6}>
                <Bounce animation in={true} >
                <Panel bodyFill style={{background:'#f2f2f2',minHeight:250,textAlign:'center',marginBottom:10}}>
                    <p><Icon icon='line-chart'  size='3x' style={{marginTop:20,marginBottom:20,color:'tomato'}} /> </p>
                    <p style={{marginTop:20,fontSize:18,fontWeight:'bold'}}>Fast</p>
                    <p style={{fontWeight:'lighter'}}> Fast load times and lag free interaction, my highest priority.</p>
                </Panel>
                </Bounce>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
               <Bounce in={true} animation>
               <Panel bodyFill style={{background:'#f2f2f2',minHeight:250,textAlign:'center',marginBottom:10}}>
                <p><Icon icon='laptop'  size='3x' style={{marginTop:20,marginBottom:20,color:'tomato'}} /> </p>
                <p style={{marginTop:20,fontSize:18,fontWeight:'bold'}}>Responsive </p>
                    <p style={{fontWeight:'lighter'}}>My layouts will work on any device, big or small. </p>
                </Panel>
               </Bounce>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
               <Bounce in={true} animation>
               <Panel bodyFill style={{background:'#f2f2f2',minHeight:250,textAlign:'center',marginBottom:10}}>
                <p><Icon icon='lightbulb-o'  size='3x' style={{marginTop:20,marginBottom:20,color:'tomato'}} /> </p>
                <p style={{marginTop:20,fontSize:18,fontWeight:'bold'}}>Intuitive </p>
                    <p style={{fontWeight:'lighter'}}>Strong preference for easy to use, intuitive UX/UI. </p>
                </Panel>
               </Bounce>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
               <Bounce animation in={true}>
               <Panel  bodyFill style={{background:'#f2f2f2',minHeight:250,textAlign:'center',marginBottom:10}}>
                <p><Icon icon='fighter-jet'  size='3x' style={{marginTop:20,marginBottom:20,color:'tomato'}} /> </p>
                <p style={{marginTop:20,fontSize:18,fontWeight:'bold'}}>Dynamic </p>
                    <p style={{fontWeight:'lighter'}}>Websites don't have to be static, I love making pages come to life.  </p>
                </Panel>
               </Bounce>
            </Col>
       </Grid>
       <Grid>
           <Col sm={24} xs={24} md={8} lg={8} >
            <div style={{padding:20}}>
                <img src={ME} alt='myomaung' style={{width:'100%',height:300,borderRadius:'0px 20px 0px 20px'}} />
            </div>
            <div style={{padding:20}}>
               <h3>Who's this guy? </h3>
               <p>I'm a Front-End Developer for GEM TECHNOLOGY in Yangon, Myanmar.
I have serious passion for creating intuitive, dynamic user experiences.
<Button appearance='link'>Let's make something special</Button>.</p>
            </div>
           </Col>
           <Col sm={24} xs={24} md={16} lg={16} >
               <Divider>MY SKILLS</Divider>
            {
                myskills.map((skill,i)=>(
                    <div key={i}>
             <Slide animation  in={true} transitionAppear >
                <Panel>
                <p style={{textAlign:'center',fontWeight:'bold'}}>{skill.lang_name}</p>
                 <Line percent={skill.per} trailColor='#f2f2f2'strokeColor={skill.color} />
                </Panel>
             </Slide>
            </div>
                ))
            }
           </Col>
       </Grid>
      </div>
    )
}

export default About

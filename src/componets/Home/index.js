import React from 'react'
import HeroBackground from '../../assets/herobackground.jpg'
import {Animation} from 'rsuite'
const Panel = React.forwardRef(({ ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      style={{
        overflow: 'hidden'
      }}
    >
      <p style={window.innerWidth>500?{fontSize:36,color:'#fff',fontWeight:'bold'}:{fontSize:16,color:'#fff',fontWeight:'bold'}}> Hello,</p>
      <p style={window.innerWidth>500?{fontSize:18,color:'#fff'}:{fontSize:14,color:'#fff'}}>I'm a Web Developer coding awesome for companies of all sizes around the globe. Let's start see and learn more about me.</p>
    </div>
  ));
function Home() {
    const {Bounce} = Animation;
    return (
        <div style={{minHeight:'70vh',display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center',backgroundImage:`url(${HeroBackground})`,backgroundRepeat:'no-repeact',backgroundSize:'cover'}}>
            <div>
            <Bounce animation   transitionAppear   in={true} placement='right'>
            {(props, ref) => <Panel {...props} ref={ref} />}
            </Bounce>
            </div>
        </div>
    )
}

export default Home

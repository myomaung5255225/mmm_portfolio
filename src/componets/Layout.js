import React from 'react'
import { Container, Content, Footer,Header } from 'rsuite'
import MainHeader from './MainHeader'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'

import MyOffer from './MyOffer'
import About from './About'
import MainFooter from './Footer'

function Layout({match}) {
    return (
        <div style={{fontFamily:'Rajdhani'}}>
            <Container>
                <Header>
                   <MainHeader />
                </Header>
                <Content style={{minHeight:'70vh'}}>
                  <Switch>
                      <Route exact path={`${match.path}`} component={Home} />
                      <Route exact path={`${match.path}contact`} component={Contact} />
                     
                      <Route exact path={`${match.path}myoffer`} component={MyOffer} />
                      <Route exact path={`${match.path}about`} component={About} />
                  </Switch>
                </Content>
                <Footer>
                    <MainFooter />
                </Footer>
            </Container>
        </div>
    )
}

export default Layout

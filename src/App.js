import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './containers/Home'
import Page from './containers/Page'

import './App.css'

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Header/>
          
          <Route exact path="/" component={Home} />
          <Route path="/page/:id" component={Page} />
          
          {/* <Footer/> */}
        </div>
      </Router>
    );
  }
}

export default App

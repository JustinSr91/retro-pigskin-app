import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import Projects from './projects'
import Blog from './blog'
import Home from './home'



render(
  (
    <Router history={ hashHistory }>
      <Route component={ App }>
        <Route path="/" component={ Home } />
        <Route path="/Projects" component={ Projects } />
        <Route path="/Blog" component= { Blog } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import Search from './search'
import Blog from './blog'
import Home from './home'



render(
  (
    <Router history={ hashHistory }>
      <Route component={ App }>
        <Route path="/" component={ Home } />
        <Route path="/Search" component={ Search } />
        <Route path="/Blog" component= { Blog } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)

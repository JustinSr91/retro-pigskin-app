import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import Search from './search'
import Home from './home'
import SearchResults from './searchresults'

var data = {
  '1998': {
    'summary': "1998 was a very good year.",
    'videos': [
      {
        youtubeURL: '',
        imageURL: "/styles/Vikings-Boys1998.jpg",
        title: 'Vikings vs Cowboys',
        description: 'Test'
      }
      //FIXME: Add more videos and fill in sample data
    ]
  },
  '1999': {
    'summary': "1999"
  },
  '2000': {
    'summary': "2000"
  },
  '2001': {
    'summary': "2001"
  },
  '2002': {
    'summary': "2002"
  },
  '2003': {
    'summary': "2003"
  },
  '2004': {
    'summary': "2004"
  }
}

render(
  (
    <Router history={ hashHistory }>
      <Route component={ App }>
        <Route path="/" component={ Home } />
        <Route path="/Search" component={ Search } data={data} />
        <Route path="/Search/:year" component={ SearchResults } data={data} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)

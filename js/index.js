import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import Search from './search'
import Home from './home'
import SearchDetail from './searchdetail'

var data = {
  '1998': {
    'summary': "1998 was a very good year. Bill Clinton was President of the US. Football hapenned",
    'videos': [
      {
        youtubeURL: '',
        imageURL: '',
        title: '',
        description: ''
      }
      //FIXME: Add more videos and fill in sample data
    ]
  }
}

render(
  (
    <Router history={ hashHistory }>
      <Route component={ App }>
        <Route path="/" component={ Home } />
        <Route path="/Search" component={ Search } data={data} />
        <Route path="/Search/:year" component={ SearchDetail } data={data} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)

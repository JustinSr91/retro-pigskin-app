import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import Search from './search'
import Home from './home'
import SearchResults from './searchresults'

var data = {
  '1998': {
    'summary': "Games from the 1998 NFL Season",
    'videos': [
      {
        youtubeURL: 'https://youtu.be/omphQiZ3hAk',
        imageURL: "/styles/Vikings-Boys1998.jpg",
        title: 'Vikings vs Cowboys',
        description: 'Thanksgiving 1998 | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/LRZVnhHp_8o',
        imageURL: "/styles/Packers-Niners1998.jpg",
        title: 'Packers vs 49ers',
        description: '"The Catch II", 1998 NFC Wild Card | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/o7eXlLooPHE',
        imageURL: "/styles/Vikings-Falcons1998.jpg",
        title: 'Falcons vs Vikings',
        description: '1998 NFC Championship Game | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/dlllvUcgem4',
        imageURL: "/styles/Eagles-Cowboys1998.jpg",
        title: 'Eagles vs Cowboys',
        description: 'Week 9 | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/GLF5U1ytPS4',
        imageURL: "/styles/Falcons-Pats1998.jpg",
        title: 'Falcons vs Patriots',
        description: 'Week 10 | Full Game'
      }
    ]
  },
  '1999': {
    'summary': "Games from the 1999 NFL Season ",
    'videos': [
      {
        youtubeURL: 'https://youtu.be/bflL0XATHAw',
        imageURL: "/styles/Rams-Titans1999.jpg",
        title: 'Rams vs Titans',
        description: 'Super Bowl XXXIV:"One Yard Short" | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/eoE0VLUz00o',
        imageURL: "/styles/Titans-Bills1999.jpg",
        title: 'Titans vs Bills',
        description: '"Music City Miracle", 1999 AFC Wild Card | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/9BTl9p2BsXs',
        imageURL: "/styles/titans-jags1999.jpg",
        title: 'Titans vs Jaguars',
        description: '1999 AFC Championship Game | Full Game'
      }
    ]
  },
  '2000': {
    'summary': "Games from the 2000 NFL Season ",
    'videos': [
      {
        youtubeURL: 'https://youtu.be/hOfjgr-lC4c',
        imageURL: "/styles/Dolphins-Jets2000.jpg",
        title: 'Dolphins vs Jets',
        description: '"Monday Night Miracle", Week 8, 2000 | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/pcwsCS9nD3g',
        imageURL: "/styles/Bucs-Rams2000.jpg",
        title: 'Buccaneers vs Rams',
        description: 'Week 16 | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/9Ada9CdtiqI',
        imageURL: "/styles/Eagles-Bengals2000.jpg",
        title: 'Eagles vs Bengals',
        description: 'Week 17 | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/eprDMUFBG08',
        imageURL: "/styles/Broncos-Ravens2000.jpg",
        title: 'Broncos vs Ravens',
        description: '2000 AFC Wild Card | Part 1'
      }
    ]
  },
  '2001': {
    'summary': "Games from the 2001 NFL Season ",
    'videos': [
      {
        youtubeURL: 'https://youtu.be/UkSi2JK98pM',
        imageURL: "/styles/Pats-Raiders2001.jpg",
        title: 'Raiders vs Patriots',
        description: '"Tuck Rule Game", 2001 AFC Divisional Playoff Game | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/5HTJQE2BLBo',
        imageURL: "/styles/Rams-Patriots2001.jpg",
        title: 'Rams vs Patriots',
        description: '"Super Bowl XXXVI" | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/jpa4LI2gifk',
        imageURL: "/styles/Eagles-Rams2001.jpg",
        title: 'Eagles vs Rams 2001',
        description: '2001 NFC Championship Game | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/N7PQPBprgn4',
        imageURL: "/styles/Pats-Broncos2001.jpg",
        title: 'Patriots vs Broncos',
        description: 'Week 7 | Full Game'
      }
    ]
  },
  '2002': {
    'summary': "Games from the 2002 NFL Season ",
    'videos': [
      {
        youtubeURL: 'https://youtu.be/YiG9wYOE1B4',
        imageURL: "/styles/Bucs-Raiders2002.jpg",
        title: 'Raiders vs Buccaneers',
        description: '"Super Bowl XXXVII: The Jon Gruden Bowl" | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/xjD3uXD0Zr4',
        imageURL: "/styles/Bucs-Eagles2002.jpg",
        title: 'Buccaneers vs Eagles',
        description: '2002 NFC Championship Game | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/m8DjiZptUBU',
        imageURL: "/styles/Titans-Raiders2002.jpg",
        title: 'Titans vs Raiders',
        description: '2002 AFC Championship Game | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/tsrUiFgJL_A',
        imageURL: "/styles/Eagles-Niners2002.jpg",
        title: 'Eagles vs 49ers',
        description: 'Week 12 | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/xd37q-M8zD8',
        imageURL: "/styles/Eagles-Rams2002.jpg",
        title: 'Rams vs Eagles',
        description: 'Week 13 | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/ZvMqK0yNdgE',
        imageURL: "/styles/Falcons-Eagles2002.jpg",
        title: 'Falcons vs Eagles',
        description: '2002 NFC Divisional Playoff Matchup | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/UWPvuF1cjx0',
        imageURL: "/styles/Falcons-Packers2002.jpg",
        title: 'Falcons vs Packers',
        description: '2002 Wild Card Playoff Matchup | Full Game'
      }
    ]
  },
  '2003': {
    'summary': "Games from the 2003 NFL Season ",
    'videos': [
      {
        youtubeURL: 'https://youtu.be/OjaQG0WoXH0',
        imageURL: "/styles/Pats-Panthers2003.jpg",
        title: 'Patriots vs Panthers',
        description: 'Super Bowl XXXVIII | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/2Pe_O8eNn5A',
        imageURL: "/styles/Panthers-Rams2003.jpg",
        title: 'Panthers vs Rams',
        description: '2003 NFC Divisional Playoff Matchup | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/CaisdMT2brw',
        imageURL: "/styles/Packers-Raiders2003.jpg",
        title: 'Packers vs Raiders',
        description: '"Brett Favre Legendary Performance", Week 16 | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/oD9RZmQPk6Y',
        imageURL: "/styles/Titans-Ravens2003.jpg",
        title: 'Titans vs Ravens',
        description: '2003 AFC Wild Card Matchup | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/KNKYvxKnL1s',
        imageURL: "/styles/Packers-Eagles2003.jpg",
        title: 'Packers vs Eagles',
        description: '2003 Divisional Playoff Matchup | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/fFseBMw1SI4',
        imageURL: "/styles/Eagles-Dolphins2003.jpg",
        title: 'Eagles vs Dolphins',
        description: 'Week 15 | Full Game'
      },
      {
        youtubeURL: 'https://youtu.be/Dh87IxpYoD4',
        imageURL: "/styles/Bengals-Chiefs2003.jpg",
        title: 'Bengals vs Chiefs',
        description: 'Bengals Week 11 Upset Win | Full Game'
      }
    ]
  },
  '2004': {
    'summary': "Games from the 2004  NFL Season",
    'videos': [
      {
        youtubeURL: '',
        imageURL: "/styles/.jpg",
        title: '',
        description: '|Full Game'
      },
      {
        youtubeURL: '',
        imageURL: "/styles/.jpg",
        title: '',
        description: '| Full Game'
      },
      {
        youtubeURL: '',
        imageURL: "/styles/.jpg",
        title: '',
        description: '| Full Game'
      },
      {
        youtubeURL: '',
        imageURL: "/styles/.jpg",
        title: '',
        description: '| Full Game'
      }
    ]
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

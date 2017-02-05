import React from 'react'
import { Link } from 'react-router'
import Firebase from 'firebase'

export default React.createClass({
  render(){

    return(
      <section className="title__section">
        <h1 className="tagline__title"> Featured Game </h1>
          <iframe className="movie" width="600" height="315"
                  src="https://www.youtube.com/embed/Lx8FByIE0cw?rel=0"
                  frameBorder="0"
                  allowFullScreen>
          </iframe>
          <h2 className="mainVideo__title"> 2000 NFC Championship Game - Saints vs Rams </h2>
            <p className="mainVideo__details"> An action packed NFC Wild Card match-up pitting "The Greatest Show On Turf" vs."The Who Dat Nation" from the 2000 NFL playoffs. Kurt Warner and the St. Louis Rams battle Aaron Brooks, Ricky Williams and the New Orleans Saints from the Superdome in what would turn out to be the Saints first ever playoff win. </p>
        <div className="video__carousel">
          <a href="https://youtu.be/pcwsCS9nD3g">
            <img src="/styles/Bucs-Rams2000.jpg"
                 className="video__image"></img>
          </a>
            <div className="details__container">
              <h3 className="video__title"> Bucs vs Rams 2000 </h3>
                <p className="video__details"> In 1998, the Minnesota Vikings tore through the league behind a legendary air attack led by the trio of Randall Cunningham, Cris Carter, and Randy Moss. One of the first opportunities to showcase their greatness to the world was a Thanksgiving Day matchup with the Dallas Cowboys. The Vikings wasted no time stuffing the scoreboard, scoring 21 points in the first quarter as they went on to win the game 46-36. Randy Moss and Cris Carter combined for an incredible 298 yards. </p>
            </div>
          <a href="https://youtu.be/UWPvuF1cjx0">
            <img src="/styles/Falcons-Packers2002.jpg"
                 className="video__image"></img>
          </a>
            <div className="details__container">
              <h3 className="video__title"> Falcons vs Packers 2002 </h3>
                <p className="video__details"> In 1998, the Minnesota Vikings tore through the league behind a legendary air attack led by the trio of Randall Cunningham, Cris Carter, and Randy Moss. One of the first opportunities to showcase their greatness to the world was a Thanksgiving Day matchup with the Dallas Cowboys. The Vikings wasted no time stuffing the scoreboard, scoring 21 points in the first quarter as they went on to win the game 46-36. Randy Moss and Cris Carter combined for an incredible 298 yards. </p>
            </div>
          <a href="https://youtu.be/omphQiZ3hAk">
            <img src="/styles/Vikings-Boys1998.jpg"
                 className="video__image"></img>
          </a>
            <div className="details__container">
              <h3 className="video__title"> Vikings vs Cowboys 1998 </h3>
                <p className="video__details"> In 1998, the Minnesota Vikings tore through the league behind a legendary air attack led by the trio of Randall Cunningham, Cris Carter, and Randy Moss. One of the first opportunities to showcase their greatness to the world was a Thanksgiving Day matchup with the Dallas Cowboys. The Vikings wasted no time stuffing the scoreboard, scoring 21 points in the first quarter as they went on to win the game 46-36. Randy Moss and Cris Carter combined for an incredible 298 yards. </p>
            </div>
        </div>
      </section>
    )
    }
  })

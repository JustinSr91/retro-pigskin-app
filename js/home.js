import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render(){

    return(
      <section className="title__section">
        <h2 className="tagline"> Great Moments Never Die With </h2>
        <h1 className="tagline__title"> RETRO PIGSKIN </h1>
          <iframe className="movie" width="600" height="315" src="https://www.youtube.com/embed/Lx8FByIE0cw?rel=0" frameBorder="0" allowFullScreen></iframe>
          <h2 className="mainVideo__title"> 2000 NFC Championship Game - Saints vs Rams </h2>
            <p className="mainVideo__details"> </p>
        <div className="video__carousel">
          <a href="https://youtu.be/pcwsCS9nD3g">
            <img src="/styles/Bucs-Rams2000.jpg" className="video__image"></img>
          </a>
            <h3 className="video__details"> Bucs vs Rams 2000 </h3>
          <a href="https://youtu.be/UWPvuF1cjx0">
            <img src="/styles/Falcons-Packers2002.jpg" className="video__image"></img>
          </a>
            <h3 className="video__details"> Falcons vs Packers 2002 </h3>
          <a href="https://youtu.be/omphQiZ3hAk">
            <img src="/styles/Vikings-Boys1998.jpg" className="video__image"></img>
          </a>
            <h3 className="video__details"> Vikings vs Cowboys 1998 </h3>
        </div>
      </section>
    )
    }
  })

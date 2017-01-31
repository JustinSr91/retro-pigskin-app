import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render(){

    return(
      <section className="title__section">
        <p className="image__streamer"> RETRO PIGSKIN </p>
        <img src="/styles/Elway-Davis.jpg" className="photo"></img>
        <div className="video__carousel">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/pcwsCS9nD3g" frameborder="0" allowfullscreen></iframe>
        </div>
      </section>
    )
    }
  })

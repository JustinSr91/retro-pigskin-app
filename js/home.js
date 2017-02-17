import React from 'react'
import { Link } from 'react-router'

var FontAwesome = require('react-fontawesome');

export default React.createClass({
  getInitialState() {
    return {
      text:"",
      expanded: false,
    };
  },

  toggleText(e) {
    this.setState({
      expanded: !this.state.expanded
    })
    if (this.state.expanded) {
      this.refs.hiddenText.className = "hideDetails"
    }
    else {
      this.refs.hiddenText.className = "showDetails"
    }
  },
  render(){
    return(
      <section className="title__section">
        <div className="main__container">
          <h1 className="tagline__title"> Featured Game </h1>
          <iframe className="movie" width="500" height="315" src="https://www.youtube.com/embed/y_WryiWeGF0?rel=0" frameBorder="0" allowFullScreen></iframe>
            <a href="https://youtu.be/y_WryiWeGF0">
              <h2 className="mainVideo__title"> 2006 NFC Divisional Matchup - Cowboys vs Eagles </h2>
            </a>
            <div className="mainVideo__details">
            </div>
            <div className="hideDetails" ref="hiddenText"> Cowboys 2-2 Eagles 4-1. October 8, 2006. </div>
              <button type="button" className="transition__button"
                      onClick={this.toggleText}>
                              {this.state.expanded ? "SHOW LESS" : "SHOW MORE"}
              </button>
        <div className="secondary__container">
          <div className="content__bundle">
            <a href="https://youtu.be/pcwsCS9nD3g"
               target="_blank">
             <div className="image__container">
               <FontAwesome
                 className='fa fa-play'
                 name='fa fa-play'
                 size='2x'>
               </FontAwesome>
               <img src="/styles/Bucs-Rams2000.jpg"
                    className="video__image">
               </img>
            </div>
            </a>
              <div className="details__container">
                <h3 className="video__title"> Bucs vs Rams 2000 </h3>
                  <p className="video__details"> Week 16 Matchup </p>
              </div>
          </div>
          <div className="content__bundle">
            <a href="https://youtu.be/UWPvuF1cjx0">
            <div className="image__container">
              <FontAwesome
                className='fa fa-play'
                name='fa fa-play'
                size='2x'>
              </FontAwesome>
              <img src="/styles/Falcons-Packers2002.jpg"
                   className="video__image">
              </img>
           </div>
            </a>
              <div className="details__container">
                <h3 className="video__title"> Falcons vs Packers 2002 </h3>
                  <p className="video__details"> Wild Card playoff matchup </p>
              </div>
          </div>
          <div className="content__bundle">
            <a href="https://youtu.be/eoE0VLUz00o">
              <div className="image__container">
                <FontAwesome
                  className='fa fa-play'
                  name='fa fa-play'
                  size='2x'>
                </FontAwesome>
                <img src="/styles/Titans-Bills1999.jpg"
                     className="video__image">
                </img>
              </div>
            </a>
              <div className="details__container">
                <h3 className="video__title"> Titans vs Bills 1999 </h3>
                  <p className="video__details"> AFC Wild Card Game </p>
              </div>
          </div>
        </div>
      </div>
    </section>
    )
    }
})

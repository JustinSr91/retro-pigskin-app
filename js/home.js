import React from 'react'
import { Link } from 'react-router'
import firebase from 'firebase'

//FIXME: import needed functions from 'fbAuth' like this:
// import {
//   fbSignUserIn
// } from './fbAuth'
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
      <section className="container">
          <div className="div__video">
            <iframe width="560"
                    height="315"
                    className="video"
                    src="https://www.youtube.com/embed/y_WryiWeGF0?rel=0"frameBorder="0"
                    allowFullScreen>
            </iframe>
          </div>
          <div className="div__aside">
            <aside className="element__aside">
                 <h2 className="aside__title">
                     More Games
                 </h2>
                 <p className="up__next__img"/>
                   <a href="https://youtu.be/pcwsCS9nD3g"
                      target="_blank">
                   <div className="image__container">
                     <FontAwesome
                       className='fa fa-play'
                       name='fa fa-play'
                       size='2x'>
                     </FontAwesome>
                     <img className="img__aside"
                          src="/styles/Bucs-Rams2000.jpg"/>
                   </div>
                   </a>
               <div className="details__div">
                 <h3 className="h3__details">
                     Bucs vs Rams 2000
                 </h3>
                 <p className="aside__user">
                    Week 16 Matchup
                 </p>
               </div>
                 <p className="up__next__img"/>
                   <a href="https://youtu.be/UWPvuF1cjx0"
                      target="_blank">
                   <div className="image__container">
                     <FontAwesome
                       className='fa fa-play'
                       name='fa fa-play'
                       size='2x'>
                     </FontAwesome>
                     <img className="img__aside"
                          src="/styles/Falcons-Packers2002.jpg"/>
                   </div>
                   </a>
               <div className="details__div">
                 <h3 className="h3__details">
                     Falcons vs Packers 2002
                 </h3>
                 <p className="aside__user">
                    Wild Card playoff matchup
                 </p>
               </div>
                 <p className="up__next__img"/>
                 <a href="https://youtu.be/eoE0VLUz00o"
                      target="_blank">
                 <div className="image__container">
                   <FontAwesome
                     className='fa fa-play'
                     name='fa fa-play'
                     size='2x'>
                   </FontAwesome>
                   <img className="img__aside"
                        src="/styles/Titans-Bills1999.jpg"/>
                 </div>
                 </a>
              <div className="details__div">
                 <h3 className="h3__details">
                     Titans vs Bills 1999
                 </h3>
                 <p className="aside__user">
                    AFC Wild Card Game
                 </p>
              </div>
            </aside>
          </div>
        <div className="video__section">
          <a href="https://youtu.be/y_WryiWeGF0">
            <h2 className="video__movie__title">
                2006 NFC Divisional Matchup - Cowboys vs Eagles
            </h2>
          </a>
              <div className="cat__hat__div">
                 <a href="#">
                 <img src="assets/user.jpg"
                      alt="upload profile image"
                      className="video__cat__photo"/>
                 </a>
              </div>


              <div className="subscribe__div">
                <p className="username__freestyler">
                   Freestyler 365
                </p>
                <div className="subscribe__group">
                  <a href="#">
                     <button className="video__subscribe__button">
                             Subscribe
                     </button>
                  </a>
                </div>
              </div>

              <div className="view__div">
              </div>
              <div className="options__bar">
              </div>
         </div>

         <section className="video__description">
          <div className="hideDetails" ref="hiddenText">
               Cowboys 2-2 Eagles 4-1. October 8, 2006.
          </div>
            <button type="button" className="transition__button"
                    onClick={this.toggleText}>{this.state.expanded ? "SHOW LESS" : "SHOW MORE"}
            </button>
         </section>
         <section className="comments__section">
         </section>
       </section>
    )
    }
})

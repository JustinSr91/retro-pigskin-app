import React from 'react'
import { Link } from 'react-router'
import Firebase from 'firebase'

export default React.createClass({
  getInitialState() {
    return {
      text:"",
      expanded: false,
      videoURL: ""
    };
  },
  componentWillMount: function() {
    this.setState({
      videoURL: 'gs://retro-pigskin-app.appspot.com/videos/pack-falcons.mp4'})
    var storage = firebase.storage();
    var storageRef = firebase.storage().ref();
    var videosRef = storageRef.child('videos');
    var fileName = 'pack-falcons.mp4';
    var falconsRef = videosRef.child(fileName);
    var path = falconsRef.fullPath
    var name = falconsRef.name
    var videosRef = falconsRef.parent;

    var pathReference = storage.ref('videos/pack-falcons.mp4');
    var gsReference = storage.refFromURL('gs://retro-pigskin-app.appspot.com/videos/pack-falcons.mp4')
    var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/retro-pigskin-app.appspot.com/o/videos%2Fpack-falcons.mp4?alt=media&token=ccdc6e75-c571-4678-b8c0-969d441ac06a');

    storageRef.child('videos/pack-falcons.mp4').getDownloadURL().then(function(url) {
      var video = document.getElementById('myVideo');
      video.src = url;
    }).catch(function(error){
      switch (error.code) {
        case 'storage/object_not_found':
          break;

      case 'storage/unauthorized':
        break;

      case 'storage/canceled':
        break;
      }
    });
  },
  toggleButtonText(e) {
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
            <video src={ this.state.videoURL } className="movie"></video>
            <h2 className="mainVideo__title"> 2000 NFC Championship Game - Saints vs Rams </h2>
            <div className="mainVideo__details"> An action packed NFC Wild Card match-up pitting "The Greatest Show On Turf" vs."The Who Dat Nation" from the 2000 NFL playoffs.
            </div>
            <div className="hideDetails" ref="hiddenText"> Kurt Warner and the St. Louis Rams battle Aaron Brooks, Ricky Williams and the New Orleans Saints from the Superdome in what would turn out to be the Saints first ever playoff win. </div>
              <button type="button" className="transition__button"
                      onClick={this.toggleButtonText}> {this.state.expanded ? "SHOW LESS" : "SHOW MORE"}</button>
        <div className="secondary__container">
          <div className="content__bundle">
            <a href="https://youtu.be/pcwsCS9nD3g">
              <img src="/styles/Bucs-Rams2000.jpg"
                   className="video__image"></img>
            </a>
              <div className="details__container">
                <h3 className="video__title"> Bucs vs Rams 2000 </h3>
                  <p className="video__details"> In 1998, the Minnesota Vikings tore through the league behind a legendary air attack led by the trio of Randall Cunningham, Cris Carter, and Randy Moss. One of the first opportunities to showcase their greatness to the world was a Thanksgiving Day matchup with the Dallas Cowboys. The Vikings wasted no time stuffing the scoreboard, scoring 21 points in the first quarter as they went on to win the game 46-36. Randy Moss and Cris Carter combined for an incredible 298 yards. </p>
              </div>
          </div>
          <div>
            <a href="https://youtu.be/UWPvuF1cjx0">
              <img src="/styles/Falcons-Packers2002.jpg"
                   className="video__image"></img>
            </a>
              <div className="details__container">
                <h3 className="video__title"> Falcons vs Packers 2002 </h3>
                  <p className="video__details"> In 1998, the Minnesota Vikings tore through the league behind a legendary air attack led by the trio of Randall Cunningham, Cris Carter, and Randy Moss. One of the first opportunities to showcase their greatness to the world was a Thanksgiving Day matchup with the Dallas Cowboys. The Vikings wasted no time stuffing the scoreboard, scoring 21 points in the first quarter as they went on to win the game 46-36. Randy Moss and Cris Carter combined for an incredible 298 yards. </p>
              </div>
          </div>
          <div>
            <a href="https://youtu.be/omphQiZ3hAk">
              <img src="/styles/Vikings-Boys1998.jpg"
                   className="video__image"></img>
            </a>
              <div className="details__container">
                <h3 className="video__title"> Vikings vs Cowboys 1998 </h3>
                  <p className="video__details"> In 1998, the Minnesota Vikings tore through the league behind a legendary air attack led by the trio of Randall Cunningham, Cris Carter, and Randy Moss. One of the first opportunities to showcase their greatness to the world was a Thanksgiving Day matchup with the Dallas Cowboys. The Vikings wasted no time stuffing the scoreboard, scoring 21 points in the first quarter as they went on to win the game 46-36. Randy Moss and Cris Carter combined for an incredible 298 yards. </p>
              </div>
          </div>
        </div>
      </div>
    </section>
    )
    }
})

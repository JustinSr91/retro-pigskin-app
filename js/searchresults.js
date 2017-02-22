import React from 'react'
var FontAwesome = require('react-fontawesome');

export default React.createClass({
  render() {
    const data = this.props.route.data;
    const year = this.props.params.year
    const yearData = data[year]
    return (
          <div>
            <h2 className="results__heading">{yearData.summary}</h2>
            <ul className="video__ul">
              { yearData.videos.map( (video, i) => {
                return (
                  <div className="video__found">
                    <li key={i}>
                      <div>
                        <a href={video.youtubeURL}>
                          <FontAwesome
                            className='fa fa-play__results'
                            name='fa fa-play'
                            size='2x'>
                          </FontAwesome>
                          <img src={video.imageURL}
                               className="video__image"/>
                        </a>
                      </div>
                      <h3 className="video__title__search">{video.title}
                      </h3>
                        <p className="video__details__search">
                          {video.description}
                        </p>
                    </li>
                  </div>
                )
              })}
            </ul>
          </div>
    )
  }
})

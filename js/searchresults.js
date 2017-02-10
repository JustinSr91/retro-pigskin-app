import React from 'react'

export default React.createClass({
  render() {
    const data = this.props.route.data;
    const year = this.props.params.year
    const yearData = data[year]
    return (
            <ul>
              <h2> {yearData.summary}</h2>
              { yearData.videos.map( (video, i) => {
                return (
                  <li key={i}>
                    <a href={video.youtubeURL}>
                      <img src={video.imageURL}
                           className="video__image"/>
                    </a>
                    <h3 className="video__title">{video.title}
                    </h3>
                  </li>
                  )
              })}
            </ul>)
  }
})

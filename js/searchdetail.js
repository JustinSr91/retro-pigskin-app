import React from 'react'

export default React.createClass({
  render() {
    const data = this.props.route.data;
    const year = this.props.params.year
    console.log("YEAR: " + year)
    const yearData = data[year]

    return (
      <div>
        <h2>Games for {year} </h2>
        <p>{yearData.summary}</p>
        //FIXME: Do a "map" over videos to list each one
      </div>
    )
  }
})

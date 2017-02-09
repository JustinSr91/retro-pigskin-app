import React from 'react'

export default React.createClass({
  render() {
    const data = this.props.route.data;
    const year = this.props.params.year
    // console.log("YEAR: " + year)
    const yearData = data[year]
    console.log(yearData);
    return (
      <div>
        <h2 className="search__heading"> Search Results for {year} </h2>
          { Object.keys(yearData.videos).map( (video, i) => {
            return (
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

            )
          })}
      </div>
    )
  }
})

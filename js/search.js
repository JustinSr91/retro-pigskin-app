import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
    }
  },
  render(){
    return (
      <section className="search__section">
        <h1 className="search__heading"> Search Games by Year </h1>
        <div className="yearContainer">
          { Object.keys(this.props.route.data).map( (year, i) => {
            return (
              <div className="search__year" key={i}>
                <Link className="year__link" to={"/Search/" + year}>{year}</Link>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
})

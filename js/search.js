import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
    }
  },
  render(){
  //   const searchDetails = this.props.route.data;
  //   const yearGroup = search.map((year) => {
  //     return (
  //       <Link to={"/search/"+searchDetails.id}
  //         className="game__year"
  //         key={searchDetails.id}>
  //         {searchDetails.year}
  //       </Link>
  //     )
  //   }
  // //FIXME: Use this.state.years.map() to *iterate* over the years object
  // // Use <Link to link to /Search/:year - something like: <Link to={"/Search/" + year.year}/>
  // <Years year={ this.state.years.map } />
  console.log("DATA:" + this.props.route.data)
    return (
      <section className="search__section">
        <h1 className="search__heading"> Search Games by Year </h1>
        <div className="yearContainer">
          { Object.keys(this.props.route.data).map( (year, i) => {
            return (
              <div key={i}>
                <h1>{year}</h1>
                <p>{this.props.route.data[year].summary}</p>
                <Link to={"/Search/" + year}>{year}</Link>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
})

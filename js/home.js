import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render(){

    return(
      // 1st container w/headshot and tagline
      <section className="headshot__section">
        <p className="aboutContent"> a creative mind focused on front end development </p>
        <img src="/styles/Headshot1.jpg" className="photo"></img>

      <section>
        <div className="infoDiv1">
          <li className="infoList"> Justin - Junior Developer </li>
          <li className="infoList"> Graduated from The Iron Yard - San Antonio </li>
          <li className="infoList"> Front End Engineering program
          </li>
        </div>
        <div className="infoDiv2">
          <a href="https://github.com/JustinSr91" className="link" target="_blank">
            <li className="infoList"> GitHub Repo </li>
          </a>
          <a href="https://www.linkedin.com/in/justin-strayhorn-51263799" className="link" target="_blank">
            <li className="infoList"> LinkedIn Profile </li>
          </a>
        </div>
      </section>
      </section>
    )
    }
  })

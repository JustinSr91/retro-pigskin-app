import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        <heading className="blogHeading"> Blog Update </heading>
          <img src="http://sd.keepcalm-o-matic.co.uk/i/mery-christmas-and-keep-coding.png"
               className="photo"></img>
          <h1 className="blogTitle"> How Holiday Break Effected Me... </h1>
            <p className="blogDate"> Jan. 17th, 2017 </p>
            <p className="blogContent"> Coming back from the holiday break, I have a mixture of thoughts and feelings, some positive and some negative. One positive thing about being back is getting back in the routine of learning at a fast pace and high level. In the 4 weeks prior to the break, my mind had gotten into a learning groove and had gotten used to learning new concepts. It felt weird not being in class learning for that 10 day break.

One negative thought to being back from break is since my learning routine was somewhat thrown off, I notice that some of the concepts I learned in the first 4 weeks of class feel somewhat fuzzy to me. I felt like I lost stride a little bit. Getting my brain back into the routine of learning and taking in copious amounts of new material has also become a new challenge for me.

I am looking forward to the challenge of getting back into a routine and I may even discover new ways to learn and store new information in my mind after taking a step away from class for a week, and having my old routine broken. I definitely appreciate the way it feels to be back in class, growing. The appreciation may not have been as strong if the break never happened.
            </p>
      </section>
    )
  }
})

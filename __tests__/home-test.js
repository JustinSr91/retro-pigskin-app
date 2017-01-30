import React from "react"
import TestUtils from "react-addons-test-utils"
import Homefile from "../js/home.js"

describe("Posting", () => {
  let postComponent = {}

  beforeEach(()=>{
    // This is NOT a reference to the element in the page...
    //   it IS a reference to the component code
    postComponent = TestUtils.renderIntoDocument(<Homefile />)
  })

  it("Should display post date'", ()=>{
    const currentPostDateElements = TestUtils.scryRenderedDOMComponentsWithClass(
      postComponent,
      "postDate"
    )
    expect(currentPostDateElements[0].textContent).toBe("  (APR 21 2015)")
  })
  it("Should display post title'", ()=>{
    const currentTitleDateElements = TestUtils.scryRenderedDOMComponentsWithClass(
      postComponent,
      "postTitle"
    )
    expect(currentTitleDateElements[0].textContent).toBe("1.   Spurs vs Rockets")
  })
  it("Create page should have a submit button", ()=>{
    const createSubmitButtonElementsubmitPost = TestUtils.scryRenderedDOMComponentsWithClass(postComponent, "submitPost")
    expect(createSubmitButtonElementsubmitPost).toBeDefined()
  })
  it("Detail page should have a home button", ()=>{
    const createHomeButtonElement = TestUtils.scryRenderedDOMComponentsWithClass(postComponent, "homeButton")
    expect(createHomeButtonElement).toBeDefined()
  })
})

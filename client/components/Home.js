import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      // <section classsName="hero is-medium is-primary is-bold">

      // </section>

      <div className="hero-body">
        <div className="container has-text-centered">
          <img src="/food.jpg" />
          <img src="/foodlelogo.png" />

          <h2 className="subtitle class-test">
            Create and plan an event with friends
          </h2>
          <Link to="/login">
            <button type="button" className="button is-primary is-large">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home

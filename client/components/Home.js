import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <>
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container columns">
              <div className="column is-one-third is-vcentered mr-6">
                <h1 className="title">Create and plan an event with friends</h1>
                <h2 className="subtitle">Take the guesswork out of planning</h2>
                <button type="button" className="button is-info is-large">
                  <p className="is-size-5">Get Started</p>
                </button>
              </div>
              <div className="column auto ml-6">
                <img src="/Welcome.svg" />
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>c 2020</strong>
            </p>
          </div>
        </footer>
      </>

      // <div className="hero-body">
      //   <div className="container has-text-centered">
      //     <img src="/food.jpg" />
      //     <img src="/foodlelogo.png" />

      //     <h2 className="subtitle class-test">
      //       Create and plan an event with friends
      //     </h2>
      //     <Link to="/login">
      //       <button type="button" className="button is-primary is-large">
      //         Get Started
      //       </button>
      //     </Link>
      //   </div>
      // </div>
    )
  }
}

export default Home

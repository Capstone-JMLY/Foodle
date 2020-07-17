import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const {email} = props

  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <img src="/food.jpg" />
        <img src="/foodlelogo.png" />

        <h2 className="subtitle class-test">
          Create and plan an event with friends
        </h2>
        <Link to="/home">
          <button type="button" className="button is-primary is-large">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,
}

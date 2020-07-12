import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

function Navbar({handleClick, isLoggedIn}) {
  const [burgerState, setBurger] = useState(false)

  const toggleBurger = () => {
    setBurger(!burgerState)
  }

  return (
    <nav className="navbar is-info">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <h1 className="is-size-3">Foodle</h1>
        </Link>

        <a
          role="button"
          className={`navbar-burger burger ${burgerState ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
          onClick={toggleBurger}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        className={`navbar-menu ${burgerState ? 'is-active' : ''}`}
        id="navbar-menu"
      >
        {isLoggedIn ? (
          <div className="navbar-start">
            {/* The navbar will show these links after you log in */}
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/home">
              My Events
            </Link>
            <Link className="navbar-item" to="/newevent">
              Create Event
            </Link>
            <a className="navbar-item" href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div className="navbar-end">
            {/* The navbar will show these links before you log in */}
            <Link className="navbar-item" to="/login">
              Login
            </Link>
            <Link className="navbar-item" to="/signup">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    },
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}

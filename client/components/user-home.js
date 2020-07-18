import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {me} from '../store'

/**
 * COMPONENT
 */
export function UserHome(props) {
  const {user} = props
  console.log('user', user)

  useEffect(() => {
    const me = props.getUser
  }, [props.user])

  return (
    <div className="container nav-padding">
      <div className="columns">
        <div className="column is-centered is-vcentered is-mobile">
          <div className="column is-narrow has-text-centered">
            <div>
              <h1 className="title is-1 nav-padding">My Profile</h1>
            </div>

            <div className="card">
              <header className="card-header">
                <p className="card-header-title">{user.name}</p>
              </header>
              <div className="card-content">
                <div className="content">
                  <div className="columns">
                    <div className="column is-one-third">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded profileLogoImage"
                          src={user.imgUrl}
                        />
                      </figure>
                    </div>
                    <div className="column is-two-thirds">
                      <p>Email: {user.email}</p>
                      <p>
                        Jamily is the combination name of the creators of
                        Foodle: Jennifer, Mary, Lilly, and Yang. It represents a
                        play on words that reminds you of 'family' when working
                        as a team.
                      </p>
                    </div>
                  </div>

                  {/* <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
                </div>
              </div>
              <footer className="card-footer">
                <a href="/home" className="card-footer-item">
                  My Events
                </a>
                <a href="#" className="card-footer-item">
                  Edit My Profile
                </a>
                <a href="#" className="card-footer-item">
                  Deleted Events
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapStateToProps = (state) => {
  return {
    email: state.user.email,
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(me()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,
}

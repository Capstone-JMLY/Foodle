import React from 'react'
import {Link} from 'react-router-dom'
import {flatLocation} from '../pollOptions/pollUtils'

class EventCard extends React.Component {
  render() {
    let time = new Date(this.props.time)
    const date = time.toLocaleDateString()
    const hour = time.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })

    console.log('propyo', this.props)

    const neighborhood = this.props.neighborhood
    const location = flatLocation[neighborhood].displayName

    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{this.props.name}</p>
              {this.props.finalized ? (
                <div>
                  <p className="has-text-info has-text-weight-semibold">
                    Confirmed
                  </p>

                  <p>
                    When: {date} {hour}
                  </p>
                  <p>Where: {location}</p>
                  <p>What: {this.props.googlePlacesId}</p>
                </div>
              ) : (
                <div>
                  <p className="has-text-danger has-text-weight-semibold">
                    Voting still in process
                  </p>
                  <p>
                    When: {date} {hour}
                  </p>
                  <p>Where: {location}</p>
                  <p>What: Waiting on votes</p>
                </div>
              )}
            </div>
          </div>

          <div className="content">
            <br />
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              {this.props.users[0].userEvent.isOrganizer ? 'Admin' : 'Guest'}
            </div>
            <Link
              className="card-footer-item"
              to={`/event/${this.props.urlKey}`}
            >
              Event Details
            </Link>
          </footer>
        </div>
      </div>
    )
  }
}

export default EventCard

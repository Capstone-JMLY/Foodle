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
                    Where: {this.props.googlePlacesId} in {location}
                  </p>
                  <p>
                    When: {date} {hour}
                  </p>
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
                </div>
              )}
            </div>
          </div>

          <div className="content">
            <br />
          </div>
          <footer className="card-footer">
            <Link
              className="card-footer-item"
              to={`/event/${this.props.urlKey}`}
            >
              See Event Details
            </Link>
          </footer>
        </div>
      </div>
    )
  }
}

export default EventCard

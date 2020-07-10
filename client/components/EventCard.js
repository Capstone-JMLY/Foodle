import React from 'react'

const EventCard = props => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{props.name}</p>
            {props.finalized ? (
              <div>
                <p>Location: {props.neighborhood}</p>
                <p>Time: {props.time}</p>
              </div>
            ) : (
              <div>
                <p>Voting still in process!</p>
                <p>Location and Time: TBD</p>
              </div>
            )}
          </div>
        </div>

        <div className="content">
          <br />
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">
            See Event Details
          </a>
        </footer>
      </div>
    </div>
  )
}

export default EventCard

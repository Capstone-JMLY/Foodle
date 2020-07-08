import React from 'react'
import CreateEventForm from './CreateEventForm'
import EventCard from './EventCard'
import {connect} from 'react-redux'
import {fetchEvents} from '../store/events'

class UserDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFormOpen: false
    }
  }

  async componentDidMount() {
    await this.props.fetchEvents()
  }

  handleClick = e => {
    this.setState({isFormOpen: !this.state.isFormOpen})
  }

  render() {
    const {isFormOpen} = this.state
    const {events} = this.props
    console.log('events', events)
    return (
      <div className="container">
        <h1 className="is-size-2 my-5">Upcoming Events</h1>

        <div className="columns">
          {events.length ? (
            events.map(event => (
              // console.log('event', event)
              <div key={event.id} className="column is-one-third">
                <EventCard {...event} />
              </div>
            ))
          ) : (
            <p>No Upcoming Events</p>
          )}
        </div>

        <div>
          <h1 className="is-size-2 my-5">Create a New Event</h1>

          {isFormOpen === false ? (
            <button
              type="button"
              className="button is-info"
              onClick={this.handleClick}
            >
              Get Started
            </button>
          ) : null}
        </div>

        {isFormOpen ? <CreateEventForm /> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    events: state.events.events
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard)

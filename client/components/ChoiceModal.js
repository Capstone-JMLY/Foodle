import React from 'react'

export const ChoiceModal = (props) => {
  const {closeModal, modalState, oneRestaurant} = props
  console.log('oneRestaurant', oneRestaurant)

  if (!modalState || !oneRestaurant.result) {
    return null
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{oneRestaurant.result.name}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={closeModal}
          ></button>
        </header>

        <button className="button is-danger is-light">
          <a href={oneRestaurant.result.url}>Google Maps</a>
        </button>

        <section className="modal-card-body">
          <h3>Price Level: {oneRestaurant.result.price_level}</h3>
          <p>{oneRestaurant.result.formatted_phone_number}</p>
          <p>{oneRestaurant.result.website}</p>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button" onClick={closeModal}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  )
}
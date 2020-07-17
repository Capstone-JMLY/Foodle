import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <section>
      <Navbar />
      <Routes />
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Foodle, 2020</strong>
          </p>
        </div>
      </footer>
    </section>
  )
}

export default App

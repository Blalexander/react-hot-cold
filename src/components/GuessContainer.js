import React, { Component } from 'react'

export class GuessContainer extends Component {
  render() {
    return (
      <div>
        <section>
          <form>
            <label>Make your Guess!</label>
            <input type="text" placeholder="Enter your Guess" />
            <button type="submit">Guess</button>
          </form>
          <p>Guess #!</p>
        </section>
      </div>
    )
  }
}

export default GuessContainer

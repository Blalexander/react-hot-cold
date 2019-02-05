import React from 'react'
import './Header.css';

export default function Header(props) {
  return (
    <div>
      <header>
        <div><a href="#what" id="what">WHAT?</a></div>
        <div><a href="#newgame" id="newgame" onClick={() => props.onRestartGame()}>+ NEW GAME</a></div>
        <h1 id="hotorcold">HOT or COLD</h1>
      </header>
    </div>
  )
}
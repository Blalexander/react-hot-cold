import React from 'react'
import './Header.css';

export default function Header(props) {
  return (
    <div>
      <header>
        <div id="what"><a href="#what">WHAT?</a></div>
        <div id="newgame"><a href="#newgame" onClick={() => props.onRestartGane()}>+ NEW GAME</a></div>
        <div id="hotorcold">HOT or COLD</div>
      </header>
    </div>
  )
}
import React from 'react';

import GuessCount from './GuessCount';
import GuessList from './GuessList';

import './StatusSection.css';

export default function StatusSection(props) {
  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount guessCount={props.guesses.length} />
      <GuessList guesses={props.guesses} />
    </section>
  );
}
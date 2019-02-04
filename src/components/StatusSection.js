import React from 'react';

import GuessCount from './GuessCount';
import GuessList from './GuessList';

export default function StatusSection(props) {
  // const guesses = props;
  // const guessCount = guesses.length;

  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount guessCount={props.guesses.length} />
      <GuessList guesses={props.guesses} />
    </section>
  );
}
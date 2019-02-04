import React from 'react'
import './GuessContainer.css';

import Feedback from './Feedback';
import GuessForm from './GuessForm';

export default function GuessContainer(props) {
  const { feedback, guessCount } = props;
  return (
    <section>
      <Feedback feedback={feedback} guessCount={guessCount} />
      <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
    </section>
  );
}

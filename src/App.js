import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import GuessContainer from './components/GuessContainer';
import StatusSection from './components/StatusSection';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

  restartGame() {
    this.setState({
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({ feedback: 'Please enter a valid number' });
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });
  }

  render() {
    const {feedback, guesses} = this.state;
    const guessCount = guesses.length;

    return (
      <div>
        <Header onRestartGame={() => this.restartGame()} />
        <main>
          <GuessContainer
            guessCount={guessCount} 
            onMakeGuess={guess => this.makeGuess(guess)}
            feedback={feedback} 
          />
          <StatusSection
            guesses={guesses}
          />
        </main>
      </div>
    );
  }
}

export default App;


//APP STRUCTURE
//|>App.js
//|-> Header.js
//|--> Nav.js

//|-> GuessContainer.js
//|--> Feedback.js
//|--> GuessForm.js

//|-> StatusSection.js
//|--> GuessCount.js
//|--> GuessList.js
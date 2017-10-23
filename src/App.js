import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const JsonObj = {
  Questions: []
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      NewQuestions: [],
      OldQuestions: [],
      currentQuestion: undefined
    }
  }

  componentDidMount() {
    console.debug("i Mounted! im a big boy");
  }

  onButtonClick = () => {
    const questions = [];

    this.setState({
      currentQuestion: 'Hi guys test question!'
    })
  }

  render() {
    const { currentQuestion } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Taco bout it</h1>
        </div>
        <div className='App-content'>
          <div className='question-container'>
            {!currentQuestion ? ('Press the button to get a tasty question!') : currentQuestion }
          </div>
          <div className='App-button' onClick={this.onButtonClick}>
            New question!
          </div>
        </div>
      </div>
    );
  }
}

export default App;

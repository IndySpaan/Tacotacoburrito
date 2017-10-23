import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const JsonObj = {
  ItemList: [
      "Tell your most embarrassing story",
      "What is your biggest fear?",
      "Tell about your family",
      "Do you think the present is better than 50 years ago? Why?",
      "If you could have one hour talk with any person in the world, who would it be?",
      "What is the one thing about yourself that you would like me to know?",
      "What is the thing you don’t like about yourself?",
      "What is the thing you like about yourself the most?",
      "Take three minutes and tell the story of your life in as much detail as possible?",
      "If you could wake up tomorrow having gained any one ability or superpower, what would it be and why?",
      "For what in your life do you feel most grateful?",
      "What are you most proud of?",
      "Which is your favorite book?",
  ]
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      AllQuestions: JsonObj.ItemList,
      currentQuestion: undefined
    }
  }

  componentDidMount() {
    console.debug("i Mounted! im a big boy", JsonObj);
  }

  getRandomQuestion() {
    const { AllQuestions } = this.state;
    const rand = Math.floor((Math.random() * AllQuestions.length));

    if(AllQuestions[rand] != null) {
      this.setState({
        AllQuestions: AllQuestions
      });
      const newQuestion = AllQuestions[rand];
      if (rand > -1) {
          AllQuestions.splice(rand, 1);
      }
      return newQuestion;
    } else {
      return 'Good job! Now you got to know each other better :)';
    }
  }

  onButtonClick = () => {
    this.setState({
      currentQuestion: this.getRandomQuestion()
    })
  }

  render() {
    const { currentQuestion } = this.state;

    return (
      <div className="App">
        <div className='App-content'>
          <div className='question-container'>
            {!currentQuestion ? ('Press the Taco to get a tasty question!') : currentQuestion }
          </div>
          <div className="button-container">
            <img src={logo} onClick={this.onButtonClick} className="App-logo" alt="logo" />
            <p>Touch the taco for a new question</p>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;

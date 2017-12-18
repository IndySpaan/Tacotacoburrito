import React, { Component } from 'react';
import logo from './logo.svg';
import taco from './taco.svg';
import './App.css';

const JsonObj = {
  ItemList: [
    "Tell your most embarrassing story.",
    "What is your biggest fear?",
    "Tell about your family",
    "Do you think the present is better than 50 years ago? Why?",
    "If you could have one-hour talk with any person in the world, who would it be?",
    "What is the one thing about yourself that you would like me to know?",
    "What is the thing you don’t like about yourself?",
    "What is the thing you like about yourself the most?",
    "Tell the story of your life in as much detail as possible.",
    "If you could wake up tomorrow having gained any ability or superpower, what would it be and why?",
    "For what in your life do you feel most grateful?",
    "What are you most proud about?",
    "Which is your favorite book?",
    "Which is your favorite movie?",
    "What is your dream of the whole life?",
    "What is your family concept?",
    "What is your most treasured memory?",
    "Tell the worst story you’ve ever had",
    "Where do you see yourself in five years?",
    "If you could travel back through time, what single mistake would you correct in life?",
    "You have got six months to live, what will you do first?",
    "If you have friends coming over, what would you cook?",
    "What is love for you?",
    "Do you believe in love?",
    "Make 5 statements starting with “we are both in this room feel…”",
    "Tell what do you like about the person sitting in front of you",
    "When was the last time you cried?",
    "What are your stereotypes about the culture of the person sitting in front of you?",
    "What are 3 things you can’t forget at home?",
    "What was the worst job you had?",
    "What was your first impression of the person sitting in front of you?",
    "What is your favorite food?",
    "Tell your scariest story.",
    "What music do you listen to? What are your favorite bands?",
    "Cats or Dogs? Why?",
    "If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone?",
    "Describe your perfect holiday",
    "If a genie granted you three wishes right now, what would you wish for?",
    "Are you afraid of death?",
    "What was the experience that impacted you the most in your life so far?",
    "Do you believe there is ‘something’ after death?",
    "What are your hobbies?",
    "What was your best trip?",
    "If you had 1 million dollars, what would you do?",
    "Are you satisfied with your studies?",
    "What do you regret the most about your past?",
    "What is your opinion on sports? Do you like to play/watch it?",
    "What is your point of view about alcohol/drugs?",
    "Are you addicted to social media? Which one is your favorite?",
    "What animal do you associate yourself with? Why?",
    "What do you use to cope when you’re feeling uncomfortable?",
    "What makes you feel unstoppable?",
    "What emotion do you experience the most?",
    "If you could do anything for the rest of your life, what would that be?",
    "What annoys you the most about people?",
    "What makes you feel super loved?",
    "What do you lie the most about?",
    "When do you feel your most vulnerable?",
    "Is there anything you see inside of yourself you’re not sure of?",
    "What is that one childhood fear you have not told anyone yet?",
    "Do you usually follow your heart or your head?",
    "What did your last relationship teach you?",
    "What are the qualities you’re looking for in someone you want to grow old with?",
    "What’s the one thing you would like to change about yourself today and why?",
    "Where do you go when you need some inspiration?",
    "Who is the first person you call when you’re in trouble?",
    "What is the craziest thing that you’ve done with someone?",
    "What is the best advice you’ve ever been given?",
    "If you could marry anyone in the world, who would it be and why?",
    "Do you think confessions make a relationship stronger?",
    "Did you ever judge someone for the dark secrets they told you?",
    "What do you do when you’re angry?",
    "Do you believe in soul mates?",
    "How long does it take you to really trust someone?",
    "What are some things that you wished people knew about you?",
    "What was the best phase in your life?",
    "What was the worst phase in your life?",
    "Is what you’re doing now what you always wanted to do growing up?",
    "What was the best phase in your life?",
    "What was the worst phase in your life?",
    "Is what you’re doing now what you always wanted to do growing up?",
    "Would you ever take back someone who cheated?",
    "Who is that one person you can talk to about just anything?",
    "Have you ever lost someone close to you?",
    "If you are in a bad mood, do you prefer to be left alone or have someone to cheer you up?",
    "Do you judge a book by its cover?",
    "Do you believe in second chances?",
    "What things are taboo in your country?",
    "What foods are most popular in your country and how are they prepared?",
    "Who are the country’s national heroes and heroines?",
    "What games do children play?",
    "What is the attitude towards divorce? Extra-marital relations? Plural marriage?",
    "At what time is it adequate to come when you are invited?",
    "How do people greet each other (handshake, kiss, embrace)? How do they take leave of one another?",
    "What are popular leisure and recreational activities for adults? Students? Children?",
    "What kinds of options do foreigners have in choosing a place to live?",
    "How are children disciplined in school?",
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

  enlargeTaco = () =>  {

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
            <img src={taco} onClick={this.onButtonClick} className="App-logo" alt="logo" />
            <p>Touch the taco for a new question</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

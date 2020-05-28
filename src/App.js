import React, { useState, useEffect } from 'react';
import './App.css';
import { Questionare } from './components';

const API_URL = 'https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple'

function App() {

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showAnswers, setShowAnswers] = useState(false)



  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results)
      })
  }, [])

  const handleAnswer = (ans) => {
    // const newIndex = currentIndex + 1;
    // setCurrentIndex(newIndex)

    if (ans === questions[currentIndex].correct_answer) {
      setScore(score + 1)
    }


  }


  return questions.length > 0 ? (
    <div className="container">
      {
        currentIndex >= questions.length ? (
          <h1 className='text-3xl text-white font-bold'>Game Ended! Your score is {score}.</h1>
        ) : <Questionare showAnswers data={questions[currentIndex]} handleAnswer={handleAnswer} />
      }


    </div>
  ) : (<h2 className="text-2xl text-white font-bold">Loading..</h2>)
}

export default App;

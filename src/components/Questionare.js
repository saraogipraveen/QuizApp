import React from 'react';

function Questionare({ showAnswers, handleNextQuestion, handleAnswer, data: { question, correct_answer, answers } }) {


  return (
    <div className="flex flex-col">
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl" dangerouslySetInnerHTML={{ __html: question }}>
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {
          answers.map((ans, idx) => {
            const textColor = showAnswers ? (ans === correct_answer ? 'text-green-500' : 'text-red-500') : 'text-purple-700'
            return <button key={idx} dangerouslySetInnerHTML={{ __html: ans }} className={` p-4 ${textColor} bg-white font-semibold  roudned shadow`} onClick={() => handleAnswer(ans)} answer={ans} />
          })
        }
      </div>
      <button onClick={handleNextQuestion} className={`${showAnswers ? 'visible' :' invisible'} bg-purple-700 mt-6 ml-auto text-white p-4 font-semibold rounded shadow`}>Next Question</button>
      
    </div>
  );
}

export default Questionare;
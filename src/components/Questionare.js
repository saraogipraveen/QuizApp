import React from 'react';

function Questionare({ showAnswers, handleAnswer, data: { question, correct_answer, incorrect_answers } }) {

  const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(()=>Math.random() - 0.5)

  return (
    <div>
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl" dangerouslySetInnerHTML={{ __html: question }}>
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {
          shuffledAnswer.map((ans)=> <button key={ans} dangerouslySetInnerHTML={{ __html: ans }}  className={`bg-white p-4 text-purple-800 font-semibold  roudned shadow`} onClick={() => handleAnswer(ans)} answer={ans}/>)
        }
      </div>

    </div>
  );
}

export default Questionare;
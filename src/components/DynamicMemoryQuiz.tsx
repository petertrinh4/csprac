import React, { useState } from 'react';

const DynamicMemoryQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "What is dynamic memory allocation?",
      options: [
        "Memory allocated at compile time",
        "Memory allocated at runtime",
        "Memory that cannot be freed",
        "Memory allocated in the stack",
      ],
      answer: 1,
    },
    {
      question: "Which function is used to allocate memory dynamically in C?",
      options: ["malloc", "printf", "scanf", "return"],
      answer: 0,
    },
    {
      question: "What happens if you free the same memory twice?",
      options: [
        "Memory is freed successfully",
        "Undefined behavior",
        "Memory is reallocated",
        "Nothing happens",
      ],
      answer: 1,
    },
  ];

  const handleAnswerOptionClick = (index: number) => {
    if (questions[currentQuestion] && index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion] ? questions[currentQuestion].question : "Loading..."}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion]?.options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(index)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicMemoryQuiz;
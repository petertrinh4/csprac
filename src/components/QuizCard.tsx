import React, { useState } from 'react';

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
    correct: 1,
  },
  {
    question: 'Which complexity is better for large datasets?',
    options: ['O(n²)', 'O(n log n)', 'O(2ⁿ)', 'O(n³)'],
    correct: 1,
  },
  {
    question: 'What does O(1) represent?',
    options: ['Linear time', 'Constant time', 'Logarithmic time', 'Quadratic time'],
    correct: 1,
  },
  {
    question: 'What is the worst-case complexity of quicksort?',
    options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'],
    correct: 1,
  },
  {
    question: 'Which notation describes upper bound?',
    options: ['Omega (Ω)', 'Theta (Θ)', 'Big O (O)', 'All of the above'],
    correct: 2,
  },
];

const QuizCard: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (optionIndex: number) => {
    if (showResult) return;
    setSelectedOption(optionIndex);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;

    setShowResult(true);

    if (
      selectedOption !== null &&
      quizQuestions[currentQuestion] &&
      selectedOption === quizQuestions[currentQuestion].correct
    ) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setShowResult(false);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
  };

  const currentQ = quizQuestions[currentQuestion];
  const isComplete = currentQuestion === quizQuestions.length - 1 && showResult;

  return (
    <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-lg p-6 text-white relative overflow-hidden max-w-screen-md mx-auto">
      <div className="absolute top-4 right-4 bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
        {currentQuestion + 1} / {quizQuestions.length}
      </div>

      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🧠 Practice Quiz</h3>

      {!isComplete ? (
        <>
          <div className="text-lg mb-6">{currentQ ? currentQ.question : ''}</div>

          <div className="space-y-3 mb-6">
            {currentQ &&
              currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                    selectedOption === index
                      ? 'bg-white bg-opacity-20 border-white'
                      : 'bg-white bg-opacity-10 border-transparent hover:bg-white hover:bg-opacity-15'
                  } ${
                    showResult && index === currentQ.correct
                      ? 'bg-green-400 bg-opacity-30 border-green-300'
                      : showResult && index === selectedOption && index !== currentQ.correct
                        ? 'bg-red-400 bg-opacity-30 border-red-300'
                        : ''
                  }`}
                  disabled={showResult}
                >
                  {option}
                </button>
              ))}
          </div>

          <button
            onClick={handleSubmit}
            disabled={selectedOption === null || showResult}
            className="bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-white border-2 border-white px-6 py-2 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Answer
          </button>
        </>
      ) : (
        <div className="text-center">
          <div className="text-3xl mb-4">🎉</div>
          <h4 className="text-xl mb-2">Quiz Complete!</h4>
          <p className="mb-4">
            Your Score: {score}/{quizQuestions.length}
          </p>
          <button
            onClick={resetQuiz}
            className="bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-white border-2 border-white px-6 py-2 rounded-lg transition-all"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};
export default QuizCard;

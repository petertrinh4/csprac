import { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';

interface QuizProps {
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
}

const Quiz = ({ questions }: QuizProps) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const quizRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  
  useEffect(() => {
    if (quizRef.current) {
      setDimensions({
        width: quizRef.current.offsetWidth,
        height: quizRef.current.offsetHeight,
      });
    }
  }, [quizRef.current, current]);

  
  useEffect(() => {
    if (showScore && score === questions.length) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showScore, score, questions.length]);

  const handleNext = () => {
    if (selected === questions[current]?.answer) setScore(score + 1);
    setSelected('');
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected('');
    setScore(0);
    setShowScore(false);
    setShowConfetti(false);
  };

  return (
    <div
      ref={quizRef}
      style={{ maxWidth: '120rem', fontFamily: 'Arial Black, sans-serif' }}
      className="flex flex-col justify-between space-y-6 relative bg-gradient-to-br from-[#fff9cc] to-[#ffe680] p-8 rounded-[2rem] shadow-2xl w-full mx-auto min-h-[500px]"
    >
      {showConfetti && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}

      {showScore ? (
        <div className="flex flex-col items-center justify-center text-center text-2xl font-bold text-gray-800 h-full">
          <div>
            You scored {score} / {questions.length}
            {score === questions.length && (
              <div className="mt-4 text-gray-700 font-extrabold text-xl animate-bounce">
                Perfect Score! 🎉
              </div>
            )}
          </div>
          <button
            onClick={handleRestart}
            className="mt-16 bg-[#bc9904] text-white p-4 rounded-full hover:bg-[#a67f03] w-1/2 transform transition-transform duration-300 hover:scale-105 hover:translate-y-[-5px]"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="font-semibold text-2xl text-gray-800">{questions[current]?.question}</div>
          <div className="flex flex-col space-y-4">
            {questions[current]?.options.map(option => (
              <button
                key={option}
                onClick={() => setSelected(option)}
                className={`w-full p-4 rounded-full border-2 transition-colors duration-300 text-left transform hover:scale-105 hover:translate-y-[-5px] ${
                  selected === option
                    ? 'bg-[#bc9904] text-white border-[#a67f03]'
                    : 'bg-white text-gray-800 border-gray-300 hover:border-[#bc9904]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={!selected}
            className="mt-4 bg-[#bc9904] text-white p-4 rounded-full hover:bg-[#a67f03] disabled:opacity-50 w-full transform transition-transform duration-300 hover:scale-105 hover:translate-y-[-5px]"
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};
export default Quiz;

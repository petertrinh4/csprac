import { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";

interface QuizProps {
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
}

const Quiz = ({ questions }: QuizProps) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const quizRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Set quiz container dimensions
  useEffect(() => {
    if (quizRef.current) {
      setDimensions({
        width: quizRef.current.offsetWidth,
        height: quizRef.current.offsetHeight,
      });
    }
  }, [quizRef.current, current]);

  // Trigger confetti only if perfect score
  useEffect(() => {
    if (showScore && score === questions.length) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showScore, score, questions.length]);

  const handleNext = () => {
    if (selected === questions[current]?.answer) setScore(score + 1);
    setSelected("");
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div
      ref={quizRef}
      className="flex flex-col justify-between space-y-6 relative bg-white p-8 rounded-xl shadow-lg w-full max-w-5xl mx-auto min-h-[500px]"
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
        <div className="text-center text-2xl font-bold">
          You scored {score} / {questions.length}
          {score === questions.length && (
            <div className="mt-4 text-green-600 font-extrabold text-xl animate-bounce">
              Perfect Score! 🎉
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="font-semibold text-xl">{questions[current]?.question}</div>
          <div className="flex flex-col space-y-3">
            {questions[current]?.options.map((option) => (
              <button
                key={option}
                onClick={() => setSelected(option)}
                className={`w-full p-3 rounded-lg border transition-colors duration-200 text-left ${
                  selected === option
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-blue-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={!selected}
            className="mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 w-full"
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;
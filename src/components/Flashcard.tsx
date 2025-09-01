import React, { useState } from 'react';

export type FlashcardType = {
  front: string;
  back: string;
};

const Flashcard = ({ flashcards }: { flashcards: FlashcardType[] }) => {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(f => !f);
  };

  const handlePrev = () => {
    setCurrent(c => (c > 0 ? c - 1 : c));
    setFlipped(false);
  };

  const handleNext = () => {
    setCurrent(c => (c < flashcards.length - 1 ? c + 1 : c));
    setFlipped(false);
  };

  const card = flashcards[current];

  if (!card) {
    return <div className="text-center text-gray-500">No flashcards available.</div>;
  }

  return (
    <div className="flex flex-col items-center gap-6"> {/* Changed alignment to 'items-center' */}
      <div
        className="card w-96 shadow-xl rounded-3xl cursor-pointer transition-transform duration-300 transform hover:scale-105"
        onClick={handleFlip}
        style={{
          perspective: '1000px',
          borderRadius: '2rem',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
        }}
      >
        <div
          className="card-body p-8"
          style={{
            minHeight: '160px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'inherit',
            background: flipped
              ? 'linear-gradient(135deg, #d3d3d3, #f0f0f0)' // Light smoky grey gradient for flipped side
              : 'linear-gradient(135deg, #e0e0e0, #f5f5f5)', // Light smoky grey gradient for front side
            boxShadow: flipped
              ? 'inset 0 0 12px rgba(0, 0, 0, 0.1)'
              : 'inset 0 0 6px rgba(0, 0, 0, 0.05)',
            transition: 'background 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          {!flipped ? (
            <h2 className="card-title text-xl font-bold text-gray-800">{card.front}</h2>
          ) : (
            <p className="card-title text-xl font-bold text-gray-800">{card.back}</p> 
          )}
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <button
          className="btn btn-md btn-outline rounded-full"
          style={{
            borderColor: '#bc9904',
            color: '#bc9904',
            opacity: current === 0 ? 0.5 : 1, // Reduce opacity when disabled
            cursor: current === 0 ? 'not-allowed' : 'pointer', // Change cursor when disabled
          }}
          onClick={handlePrev}
          disabled={current === 0}
        >
          Previous
        </button>
        <span className="text-md text-gray-700 font-medium">{current + 1} / {flashcards.length}</span>
        <button
          className="btn btn-md btn-outline rounded-full"
          style={{
            borderColor: '#bc9904',
            color: '#bc9904',
            opacity: current === flashcards.length - 1 ? 0.5 : 1, // Reduce opacity when disabled
            cursor: current === flashcards.length - 1 ? 'not-allowed' : 'pointer', // Change cursor when disabled
          }}
          onClick={handleNext}
          disabled={current === flashcards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Flashcard;

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
    <div className="flex flex-col items-center gap-4">
      <div
        className="card bg-base-100 w-96 shadow-none border border-gray-200 cursor-pointer transition-transform duration-300"
        onClick={handleFlip}
        style={{ perspective: '1000px' }}
      >
        <div
          className="card-body p-4 flex flex-col items-center justify-center"
          style={{ minHeight: '120px' }}
        >
          {!flipped ? (
            <>
              <h2 className="card-title text-base mb-2">{card.front}</h2>
              <div className="mt-2 text-sm text-gray-600 text-center">
                Click on the card to see the answer.
              </div>
            </>
          ) : (
            <>
              <p>{card.back}</p>
              <div className="mt-2 text-sm text-gray-600 text-center">
                Click on the card to flip back.
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <button className="btn btn-sm btn-outline" onClick={handlePrev} disabled={current === 0}>
          Previous
        </button>
        <span className="text-sm text-gray-500">
          {current + 1} / {flashcards.length}
        </span>
        <button
          className="btn btn-sm btn-outline"
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

import React, { useState } from 'react';

export type FlashcardType = {
  front: string;
  back: string;
};

const Flashcard = ({
  flashcards,
  additionalFlashcards = [],
  loadMoreFlashcards, // New prop for loading more flashcards
}: {
  flashcards: FlashcardType[];
  additionalFlashcards?: FlashcardType[];
  loadMoreFlashcards?: () => FlashcardType[]; // Function to load more flashcards
}) => {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [allFlashcards, setAllFlashcards] = useState([...flashcards, ...additionalFlashcards]);

  const handleFlip = () => {
    setFlipped(f => !f);
  };

  const handlePrev = () => {
    setCurrent(c => (c > 0 ? c - 1 : c));
    setFlipped(false);
  };

  const handleNext = () => {
    if (current === allFlashcards.length - 1 && loadMoreFlashcards) {
      // Load more flashcards when reaching the end
      const newFlashcards = loadMoreFlashcards();
      setAllFlashcards(prev => [...prev, ...newFlashcards]);
    }
    setCurrent(c => (c < allFlashcards.length - 1 ? c + 1 : c));
    setFlipped(false);
  };

  const card = allFlashcards[current];

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
            transformStyle: 'preserve-3d', // Enable 3D transformation
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)', // Rotate on Y-axis
            transition: 'transform 0.6s ease', // Smooth flip animation
          }}
        >
          <div
            style={{
              backfaceVisibility: 'hidden', // Hide the back side when not flipped
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #fff8b0, #ffe680)', // Front side gradient updated to yellow tones
              borderRadius: 'inherit',
            }}
          >
            <h2 className="card-title text-xl font-bold text-gray-800">{card.front}</h2>
          </div>
          <div
            style={{
              backfaceVisibility: 'hidden', // Hide the front side when flipped
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #fff4a3, #ffdb66)', // Back side gradient updated to yellow tones
              borderRadius: 'inherit',
              transform: 'rotateY(180deg)', // Rotate back side to align with flip
              textAlign: 'center', // Center the text
            }}
          >
            <p className="card-title text-xl font-bold text-gray-800">{card.back}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <button
          className="btn btn-md btn-outline rounded-full"
          style={{
            backgroundColor: '#bc9904', // Updated background color
            borderColor: '#bc9904', // Updated border color to match background
            color: '#ffffff', // Updated text color to white for contrast
            fontFamily: 'Arial Black, sans-serif',
            opacity: current === 0 ? 0.5 : 1,
            cursor: current === 0 ? 'not-allowed' : 'pointer',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onClick={handlePrev}
          disabled={current === 0}
          onMouseEnter={(e) => {
            if (current !== 0) {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Previous
        </button>
        <span
          className="text-md text-gray-700 font-medium"
          style={{ fontFamily: 'Arial Black, sans-serif' }} // Updated font to Arial Black
        >
          {current + 1} / {allFlashcards.length}
        </span>
        <button
          className="btn btn-md btn-outline rounded-full"
          style={{
            backgroundColor: '#bc9904', // Updated background color
            borderColor: '#bc9904', // Updated border color to match background
            color: '#ffffff', // Updated text color to white for contrast
            fontFamily: 'Arial Black, sans-serif',
            opacity: current === allFlashcards.length - 1 && !loadMoreFlashcards ? 0.5 : 1,
            cursor: current === allFlashcards.length - 1 && !loadMoreFlashcards ? 'not-allowed' : 'pointer',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onClick={handleNext}
          disabled={current === allFlashcards.length - 1 && !loadMoreFlashcards}
          onMouseEnter={(e) => {
            if (!(current === allFlashcards.length - 1 && !loadMoreFlashcards)) {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Flashcard;

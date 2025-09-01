import type { ReactNode } from 'react';
import NavBar from './NavBar';
import QuizCard from './QuizCard';
import Quiz from '../components/Quiz';
import Flashcard from './Flashcard';
import ChatBot from './ChatBot';

type ModuleInfoProps = {
  title: string;
  intro: string;
  image: string;
  content: ReactNode;
  img_position: string;
  quizQuestions?: {
    question: string;
    options: string[];
    answer: string;
  }[] | undefined;
  flashcards?: {
    front: string;
    back: string;
  }[] | undefined;
};

const ModuleInfo = ({ title, intro, image, content, img_position, quizQuestions, flashcards }: ModuleInfoProps) => {
  return (
    <div>
      <NavBar />
      <div className="with-navbar module-info-container max-w-7xl mx-auto px-4">
        <h1 className="module-title text-center relative card bg-[#f5f6f7] shadow-none border border-gray-200 max-w-2xl w-full mx-auto p-4 overflow-hidden">
          <span className="absolute inset-0 bg-gray-100 rounded-full -z-10"></span>
          {title}
        </h1>
        <div className="flex flex-col lg:flex-row gap-4 items-stretch w-full">
          {/* Left: Image and Content */}
          <div className="flex-1 min-w-0">
            <div className={`module-flex ${img_position === 'right' ? 'flex-row-reverse' : 'flex-row'} flex`}>
              <div className="module-image-wrapper w-full mb-4">
                {/*<img src={image} alt={title} className="module-image" />*/}
              </div>
              <div className="module-content-wrapper w-full">
                <p className="module-intro">{intro}</p>
                {content}
              </div>
            </div>
          </div>
          {/* Right: Quiz and Flashcards */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            {quizQuestions && quizQuestions.length > 0 && (
              <div className="card bg-base-100 shadow-none max-w-md w-full mx-auto">
                <div className="card-body p-4">
                  <Quiz questions={quizQuestions} />
                </div>
              </div>
            )}
            {flashcards && flashcards.length > 0 && (
              <div className="card bg-base-100 shadow-none max-w-2xl w-full mx-auto">
                <div className="card-body p-4">
                  <Flashcard flashcards={flashcards} />
                </div>
              </div>
            )}
            <ChatBot />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModuleInfo;

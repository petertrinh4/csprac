import type { ReactNode } from 'react';
import NavBar from './NavBar';
import QuizCard from './QuizCard';
import Quiz from '../components/Quiz';
import Flashcard from './Flashcard';

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
      <div className="with-navbar module-info-container">
        <h1 className="module-title">{title}</h1>
        <div className={`flex flex-row gap-8 items-start`}>
          <div className="flex-1">
            <div className={`module-flex ${img_position === 'right' ? 'reverse' : ''}`}> 
              <div className="module-image-wrapper">
                {/*<img src={image} alt={title} className="module-image" />*/}
              </div>
              <div className="module-content-wrapper">
                <p className="module-intro">{intro}</p>
                {content}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {quizQuestions && quizQuestions.length > 0 && (
              <div className="card bg-base-100 w-96 shadow-none border border-gray-200">
                <div className="card-body p-4">
                  <Quiz questions={quizQuestions} />
                </div>
              </div>
            )}
            {flashcards && flashcards.length > 0 && (
              <Flashcard flashcards={flashcards} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModuleInfo;

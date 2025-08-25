import type { ReactNode } from 'react';
import NavBar from './NavBar';
import QuizCard from './QuizCard';
type ModuleInfoProps = {
  title: string;
  intro: string;
  image: string;
  content: ReactNode;
  img_position: string;
};

const ModuleInfo = ({ title, intro, image, content, img_position }: ModuleInfoProps) => {
  const showPracticeCard = title.toLowerCase().includes('dynamic memory allocation');
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
          {showPracticeCard && (
            <div className="flex flex-col gap-6">
              <div className="card bg-base-100 w-96 shadow-none border border-gray-200">
                <div className="card-body p-4">
                  <QuizCard />
                </div>
              </div>
              <div className="card bg-base-100 w-96 shadow-none border border-gray-200">
                <div className="card-body p-4">
                  <h2 className="card-title text-base mb-2">Flashcards</h2>
                  <p>This card will be used for the flashcard component.</p>
                </div>
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Flashcard"
                  />
                </figure>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ModuleInfo;

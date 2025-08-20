import type { ReactNode } from 'react';
import NavBar from './NavBar';
type ModuleInfoProps = {
  title: string;
  intro: string;
  image: string;
  content: ReactNode;
  img_position: string;
};

const ModuleInfo = ({ title, intro, image, content, img_position }: ModuleInfoProps) => {
  return (
    <div>
      <NavBar />
      <div className="with-navbar module-info-container">
        <h1 className="module-title">{title}</h1>
        <div className={`module-flex ${img_position === 'right' ? 'reverse' : ''}`}>
          <div className="module-image-wrapper">
            <img src={image} alt={title} className="module-image" />
          </div>
          <div className="module-content-wrapper">
            <p className="module-intro">{intro}</p>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModuleInfo;

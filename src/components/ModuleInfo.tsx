import type { ReactNode } from 'react';
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
      <h1>{title}</h1>
      <img src={image} alt={title} className={`rounded-xl center-image ${img_position || ''}`} />
      <p>{intro}</p>
      {content} {/* Content will have links to numerous resources */}
    </div>
  );
};
export default ModuleInfo;

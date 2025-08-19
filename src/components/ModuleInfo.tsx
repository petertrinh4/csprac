type ModuleInfoProps = {
  title: string;
  intro: string;
  image: string;
  content: string;
  img_position: string;
};

const ModuleInfo = ({ title, intro, image, content, img_position }: ModuleInfoProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={title} className={`rounded-xl center-image ${img_position || ''}object-contain max-h-60`} />
      <p>{intro}</p>
      <p>{content}</p> {/* Content will have links to numerous resources */}
    </div>
  );
};
export default ModuleInfo;

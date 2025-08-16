type ModuleInfoProps = {
  title: string;
  intro: string;
  image: string;
  content: string;
};

const ModuleInfo = ({ title, intro, image, content }: ModuleInfoProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={title} className="rounded-xl" />
      <p>{intro}</p>
      <p>{content}</p>
    </div>
  );
};
export default ModuleInfo;

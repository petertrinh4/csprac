import { Link } from 'react-router-dom';

type ModuleCardProps = {
  title: string;
  description: string;
  image: string;
  id: string;
};

const ModuleCard = ({ title, description, image, id }: ModuleCardProps) => {
  return (
    <>
      <div className="card w-96 shadow-sm" style={{ background: '#F5F6F7' }}>
        <figure className="px-10 pt-10">
          <img src={image} alt={title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <Link to={`/module/${id}`}>
              <button
                className="btn text-white border-none"
                style={{ background: '#bc9902', color: '#fff' }}
              >
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModuleCard;

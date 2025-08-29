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
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={image} alt={title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <Link to={`/module/${id}`}>
              <button className="btn bg-green-700 hover:bg-green-600 text-white border-none">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModuleCard;

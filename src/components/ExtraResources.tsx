import React from 'react';
import NavBar from './NavBar';

const extraResources = [
  {
    title: 'VisuAlgo',
    image: '/optiver.webp',
    url: 'https://visualgo.net/en',
    description: 'Visualize data structures and algorithms interactively.',
  },
  {
    title: 'CS Vis Tool',
    image: '/georgia.webp',
    url: 'https://csvistool.com/',
    description: 'Practice and visualize CS concepts.',
  },
  {
    title: 'FE Prep Problems',
    image: '/feprep.webp',
    url: 'https://feprep.net/problems',
    description: 'Collection of practice problems for FE exam preparation.',
  },
];

const ExtraResources: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="pt-20 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {extraResources.map(resource => (
          <a
            key={resource.title}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center p-4"
          >
            <img
              src={resource.image}
              alt={resource.title}
              className="w-32 h-32 object-contain mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
            <p className="text-gray-600 text-center mb-2">{resource.description}</p>
          </a>
        ))}
      </div>
    </>
  );
};
export default ExtraResources;

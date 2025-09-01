import React from 'react';
import NavBar from './NavBar';
import Background from './Background';

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
  {
    title: 'COP3502 Typed Notes',
    image: '/COP3502Notes.webp', // Update the path to the image
    url: '/COP3502_Typed_Notes_v0_9.pdf', // Relative path to the PDF in the public folder
    description: 'Typed notes for COP3502 course.',
    download: true, // Optional: Indicates it's downloadable
  },
];

const ExtraResources: React.FC = () => {
  return (
    <>
      <Background />
      <NavBar />
      <div style={{ position: 'relative', minHeight: '100vh' }} className="flex justify-center items-start w-full">
        <div
          className="pt-20 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
          style={{ position: 'relative', zIndex: 1 }}
        >
            {extraResources.map(resource => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card w-96 shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center"
                style={{ background: '#F5F6F7', textDecoration: 'none' }}
                {...(resource.download ? { download: '' } : {})} // Conditionally add the download attribute
              >
                <figure className="px-10 pt-10">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="rounded-xl w-32 h-32 object-contain mb-4"
                  />
                </figure>
                <div className="card-body items-center text-center p-4">
                  <h3 className="card-title text-lg font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-center mb-2">{resource.description}</p>
                </div>
              </a>
            ))}
        </div>
      </div>
    </>
  );
};
export default ExtraResources;

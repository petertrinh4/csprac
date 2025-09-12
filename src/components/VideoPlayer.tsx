import React from 'react';

type VideoPlayerProps = {
  url: string;
  title?: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title }) => {
  return (
    <div className="card bg-[#ffe680] w-96 shadow-none border border-gray-200">
      <div
        className="card-body p-4"
        style={{ backgroundColor: '#ffe680' }}
      >
        {title && <h2 className="card-title text-base mb-2">{title}</h2>}
        <div
          className="relative rounded-2xl shadow-lg"
          style={{
            width: '350px',
            aspectRatio: '16/9',
            height: '197px',
            overflow: 'hidden',
          }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default VideoPlayer;

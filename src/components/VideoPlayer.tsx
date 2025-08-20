import React from 'react';

type VideoPlayerProps = {
  url: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <div
      className="relative mx-auto rounded-2xl shadow-lg"
      style={{
        maxWidth: '500px',
        aspectRatio: '16/9',
        height: 'auto',
        maxHeight: '300px',
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
  );
};
export default VideoPlayer;

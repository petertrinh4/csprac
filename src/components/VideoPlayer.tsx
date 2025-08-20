import React from 'react';

type VideoPlayerProps = {
  url: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-lg">
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

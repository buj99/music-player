import React from "react";

const Song = ({ curentSong }) => {
  return (
    <div className="song-container">
      <img alt={curentSong.name} src={curentSong.cover}></img>
      <h2>{curentSong.name}</h2>
      <h3>{curentSong.artist}</h3>
    </div>
  );
};

export default Song;

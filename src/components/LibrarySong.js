import React from "react";

const LibrarySong = ({
  song,
  songs,
  setSongs,
  curentSong,
  setCurentSong,
  audioRef,
  songInfo,
  setSongInfo,
  isPlaying,
  setIsPlaying,
}) => {
  //event handlers
  const songClick = () => {
    setCurentSong(song);
    setSongInfo({
      ...songInfo,
      currentTime: audioRef.current.currentTime,
      duration: audioRef.current.duration,
    });
    //set active

    const newSongs = songs.map((stateSong) => {
      if (stateSong.id === song.id) {
        return {
          ...stateSong,
          active: true,
        };
      } else {
        return {
          ...stateSong,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //check if is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          audioRef.current.play();
        });
      }
    }
  };
  //return
  return (
    <div
      onClick={songClick}
      className={` library-song ${song.active ? "selected" : ""} `}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;

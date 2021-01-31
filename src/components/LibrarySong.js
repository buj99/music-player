import React from "react";

const LibrarySong = ({
  song,
  songs,
  setSong,
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
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if(playPromise!==undefined){
        playPromise.then(()=>{
          audioRef.current.play();
        })
      }
    }
  };
  //return
  return (
    <div onClick={songClick} className="library-song">
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;

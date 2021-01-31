import React from "react";
//imports
import LibrarySong from "./LibrarySong";
const Library = ({
  songs,
  setSongs,
  curentSong,
  setCurentSong,
  audioRef,
  songInfo,
  setSongInfo,
  isPlaying,
  setIsPlaying,
  libraryOpen,
}) => {
  return (
    <div className={`library ${!libraryOpen ? "hiden" : ""} `}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            key={song.id}
            songs={songs}
            setSongs={setSongs}
            curentSong={curentSong}
            setCurentSong={setCurentSong}
            audioRef={audioRef}
            songInfo={songInfo}
            setSongInfo={setSongInfo}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;

import React, { useState, useRef } from "react";
// import styles
import "./styles/app.scss";
//import my components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
//import song list
import songList from "./util";

function App() {
  //ref
  const audioRef = useRef(null);
  //state
  const [songs, setSongs] = useState(songList());
  const [curentSong, setCurentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryOpen, setLibraryOpen] = useState(false);
  //return
  return (
    <div className="App">
      <Nav libraryOpen={libraryOpen} setLibraryOpen={setLibraryOpen} />
      <Song curentSong={curentSong} />
      <Player
        curentSong={curentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        curentSong={curentSong}
        setCurentSong={setCurentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        libraryOpen={libraryOpen}
      />
    </div>
  );
}

export default App;

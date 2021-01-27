import React, { useState } from "react";
// import styles
import "./styles/app.scss";
//import my components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
//import song list
import songList from "./util";

function App() {
  //state
  const [songs, setSongs] = useState(songList());
  const [curentSong, setCurentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  //return
  return (
    <div className="App">
      <Song curentSong={curentSong} />
      <Player
        curentSong={curentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;

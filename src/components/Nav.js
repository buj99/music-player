import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryOpen, setLibraryOpen }) => {
  //event handlers
  const openLibraryHandler = () => {
    setLibraryOpen(!libraryOpen);
  };
  //return
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={openLibraryHandler}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;

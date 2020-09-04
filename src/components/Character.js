import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Character() {
  const [url, setUrl] = useState({ baseurl: "https://swapi.dev/api/people/" });
  const [characters, setCharacters] = useState([]);
  const [header, setHeader] = useState([
    {
      baseurl: "https://swapi.dev/api/people/",
    },
  ]);

  //load data from api and reload if base url change
  useEffect(() => {
    axios.get(url.baseurl).then((res) => {
      setCharacters(res.data.results);
      setHeader({ prev: res.data.previous, next: res.data.next });
    });
  }, [url]);

  //button previuos
  const prevButton = header.prev ? (
    <button
      className="left btn blue"
      style={{ marginTop: 22 + "px" }}
      onClick={() => handleClick(header.prev)}
    >
      Prev
    </button>
  ) : (
    <div></div>
  );

  //action on click next or previous button
  function handleClick(url) {
    setUrl({ baseurl: url });
  }

  //iterate characters to card view from axios response
  const characterList = characters.length ? (
    characters.map((character) => {
      return (
        <div className="post card" key={character.name}>
          <div className="card-content">
            <Link
              to={{
                pathname: "/" + character.name,
                character,
              }}
            >
              <span className="card-title">{character.name}</span>
            </Link>
          </div>
        </div>
      );
    })
  ) : (
    <div className="center">Loading characters.....</div>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col s4">{prevButton}</div>
        <div className="col s4">
          <h4 className="center">Character</h4>
        </div>
        <div className="col s4">
          <button
            className="right btn blue"
            style={{ marginTop: 22 + "px" }}
            onClick={() => handleClick(header.next)}
          >
            Next
          </button>
        </div>
      </div>
      {characterList}
    </div>
  );
}

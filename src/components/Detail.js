import React from "react";
import Info from "./Info";

export default function Detail(props) {
  const { character } = props.location;
  let name = props.match.params.name;

  return (
    <div className="container">
      <h4 className="center">{name}</h4>
      <div className="post card">
        <div className="card-content">
          <span className="card-title">Detail Information</span>
          <div className="row">
            <div className="col s6">
              <table className="table-responsive">
                <tbody>
                  <tr>
                    <td>Height</td>
                    <td>:</td>
                    <td>{character.height}</td>
                  </tr>
                  <tr>
                    <td>Mass</td>
                    <td>:</td>
                    <td>{character.mass}</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>:</td>
                    <td>{character.gender}</td>
                  </tr>
                  <tr>
                    <td>Birth Year</td>
                    <td>:</td>
                    <td>{character.birth_year}</td>
                  </tr>
                  <tr>
                    <td>Hair Color</td>
                    <td>:</td>
                    <td>{character.hair_color}</td>
                  </tr>
                  <tr>
                    <td>Eye Color</td>
                    <td>:</td>
                    <td>{character.eye_color}</td>
                  </tr>
                  <tr>
                    <td>Skin Color</td>
                    <td>:</td>
                    <td>{character.skin_color}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col s6">
              <Info
                films={character.films}
                vehicles={character.vehicles}
                starships={character.starships}
                species={character.species}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

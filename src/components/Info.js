import React, { useEffect, useState } from "react";
import axios from "axios";
import ListInfo from "./ListInfo";

export default function Info(props) {
  const [movie, setMovie] = useState();
  const [spec, setSpec] = useState();
  const [ship, setShip] = useState();
  const [car, setCar] = useState();

  const { films, species, starships, vehicles } = props;
  const listData = [films, species, starships, vehicles];
  const movies = [];
  const ships = [];
  const specs = [];
  const cars = [];

  //retrive data for each item on array
  const getData = async () => {
    for (let i = 0; i < listData.length; i++) {
      let partialData = listData[i];
      for (let j = 0; j < partialData.length; j++) {
        const axiosResponse = await axios.get(partialData[j]);
        let pathname = new URL(partialData[j]).pathname;
        let segment = pathname.split("/");

        //loading data into array
        if (segment[2] === "films") {
          movies.push(axiosResponse.data.title);
        } else if (segment[2] === "vehicles") {
          cars.push(axiosResponse.data.name);
        } else if (segment[2] === "starships") {
          ships.push(axiosResponse.data.name);
        } else if (segment[2] === "species") {
          specs.push(axiosResponse.data.name);
        }
      }
    }

    //set state from array
    setMovie(movies);
    setSpec(specs);
    setShip(ships);
    setCar(cars);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="container">
        <ListInfo items={movie} title="Filmography" />
        <ListInfo items={spec} title="Species" />
        <ListInfo items={ship} title="Starships" />
        <ListInfo items={car} title="Vehicles" />
      </div>
    </div>
  );
}

import React from "react";
import uuidv4 from "uuid/dist/v4";

export default function ListInfo(props) {
  const { items } = props;
  let itemList = <li className="collection-item">Loading.....</li>;

  //generate unordered list for each item
  if (items !== undefined) {
    itemList = items.length ? (
      items.map((item) => {
        return (
          <li className="collection-item" key={uuidv4()}>
            {item}
          </li>
        );
      })
    ) : (
      <li className="collection-item">Data unavailable</li>
    );
  }

  return (
    <div>
      <span className="card-title">{props.title}</span>
      <ul className="collection">{itemList}</ul>
    </div>
  );
}

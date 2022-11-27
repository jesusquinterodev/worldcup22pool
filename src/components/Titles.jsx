import React from "react";
import "../css/Titles.css";
import { users } from "../data.js";

const Titles = (props) => {
  return (
    <div className="titles">
      <h1 className="name-title" id={props.id}>
        {props.username}
      </h1>
      <h3 className="date-title">{props.userData}</h3>
    </div>
  );
};

export default Titles;

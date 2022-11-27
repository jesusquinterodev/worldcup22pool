import React from "react";
import "../css/LeagueName.css";
import { users } from "../data.js";

const LeagueName = (props) => {
  return (
    <div className="league-name-styles">
      <div className=" league-points league-medal">
        <img src={props.medal} alt="" className="league-medal-img" />
      </div>
      <div className="league-name">
        <h3>{props.name}</h3>
      </div>
      <div className="league-points">
        <h3>{props.points}</h3>
      </div>
    </div>
  );
};

export default LeagueName;

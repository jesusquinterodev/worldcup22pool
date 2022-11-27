import React from "react";
import "../css/Match.css";

const Match = (props) => {
  return (
    <article className="match-container">
      <div className="teams team-1">
        <img
          src={"../src/assets/flag-icons/" + props.hostFlag}
          alt=""
          className="flag-img flag-left"
        />
        <h2>{props.host}</h2>
      </div>
      <div className="score result-1">
        <h2>{props.hostScore}</h2>
      </div>
      <div className="score result-2">
        <h2>{props.visitScore}</h2>
      </div>
      <div className="teams team-2">
        <h2>{props.visit}</h2>
        <img
          src={"../src/assets/flag-icons/" + props.visitFlag}
          alt=""
          className="flag-img flag-right"
        />
      </div>
    </article>
  );
};

export default Match;

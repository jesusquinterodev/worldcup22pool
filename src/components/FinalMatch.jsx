import React from "react";
import "../css/FinalMatch.css";

const FinalMatch = (props) => {
  return (
    <article className="match-containerP">
      <div className="teamsP team-1P">
        <img src={props.hostFlag} alt="" className="flag-imgP flag-leftP" />
        <h2 className="inner-title">{props.host}</h2>
      </div>
      <div className="scoreP result-1P">
        <h2 className="inner-title">{props.hostScore}</h2>
      </div>
      <div className="scoreP result-2P">
        <h2 className="inner-title">{props.visitScore}</h2>
      </div>
      <div className="teamsP team-2P">
        <h2 className="inner-title">{props.visit}</h2>
        <img src={props.visitFlag} alt="" className="flag-imgP flag-rightP" />
      </div>
    </article>
  );
};

export default FinalMatch;

import React from "react";
import Match from "./Match";
import Titles from "./Titles";
import "../css/Playoffs.css";

const Playoffs = (props) => {
  return (
    <div>
      <Titles id={props.id} username={props.name} userData={props.date} />
      <div className="playoffs">
        {props.matchData.map((match) => {
          return (
            <Match
              host={match.fTeam}
              visit={match.sTeam}
              hostFlag={match.fFlag}
              visitFlag={match.sFlag}
              hostScore={match.fScore}
              visitScore={match.sScore}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Playoffs;

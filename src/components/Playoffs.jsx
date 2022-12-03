import React from "react";
import Match from "./Match";
import Titles from "./Titles";
import "../css/Playoffs.css";

const Playoffs = (props) => {
  return (
    <div>
      <Titles id={props.id} username={props.name} userData={props.date} />
      <h2 className="subtitle">Octavos de final</h2>
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
      <h2 className="subtitle" id={props.idQF}>
        Cuartos de final
      </h2>
      <div className="playoffs">
        {props.quartersData.map((quarter) => {
          return (
            <Match
              host={quarter.fTeam}
              visit={quarter.sTeam}
              hostFlag={quarter.fFlag}
              visitFlag={quarter.sFlag}
              hostScore={quarter.fScore}
              visitScore={quarter.sScore}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Playoffs;

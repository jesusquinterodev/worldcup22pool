import React from "react";
import Match from "./Match";
import Titles from "./Titles";
import FinalMatch from "./FinalMatch";
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
      <h2 className="subtitle" id={props.idSF}>
        Semifinales
      </h2>
      <div className="playoffs">
        {props.semisData.map((semi) => {
          return (
            <Match
              host={semi.fTeam}
              visit={semi.sTeam}
              hostFlag={semi.fFlag}
              visitFlag={semi.sFlag}
              hostScore={semi.fScore}
              visitScore={semi.sScore}
            />
          );
        })}
      </div>
      <h2 className="subtitle" id={props.idBrz}>
        Tercer y Cuarto puesto
      </h2>
      <div className="playoffs">
        {props.bronzeData.map((match) => {
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
      <h2
        className="subtitle"
        id={props.idFinal}
        style={{ fontSize: "3rem", fontWeight: "600" }}
      >
        FINAL
      </h2>
      <div className="playoffs">
        {props.finalData.map((match) => {
          return (
            <div>
              <img
                src="https://i.pinimg.com/originals/8b/fd/c0/8bfdc0caa9db3d0bed87a4a51e197ea2.png"
                alt=""
                style={{ width: "7rem" }}
              />
              <FinalMatch
                host={match.fTeam}
                visit={match.sTeam}
                hostFlag={match.fFlag}
                visitFlag={match.sFlag}
                hostScore={match.fScore}
                visitScore={match.sScore}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Playoffs;

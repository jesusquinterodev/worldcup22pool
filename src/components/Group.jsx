import React from "react";
import Match from "./Match";
import "../css/Group.css";
import { users } from "../data";

const Group = (props) => {
  return (
    <div className="group">
      <h2 className="group-title">GRUPO {props.char}</h2>
      <Match
        host={props.local1}
        visit={props.visit1}
        hostFlag={props.local1Flag}
        visitFlag={props.visit1Flag}
        hostScore={props.res[0].fTeam}
        visitScore={props.res[0].sTeam}
      />
      <Match
        host={props.local2}
        visit={props.visit2}
        hostFlag={props.local2Flag}
        visitFlag={props.visit2Flag}
        hostScore={props.res[0].tTeam}
        visitScore={props.res[0].lTeam}
      />
    </div>
  );
};

export default Group;

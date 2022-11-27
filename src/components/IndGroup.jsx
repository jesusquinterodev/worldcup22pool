import React from "react";
import Group from "./Group";
import Titles from "./Titles";
import "../css/IndGroup.css";
import { users, groupsData } from "../data.js";

const IndGroup = (props) => {
  return (
    <div className="ind-group">
      <Titles username={props.name} userData={props.date} id={props.id} />;
      <div className="body">
        {props.groupsData.map((group) => {
          return (
            <Group
              char={group.char}
              local1={group.fTeam}
              local2={group.tTeam}
              visit1={group.sTeam}
              visit2={group.lTeam}
              local1Flag={group.fFlag}
              local2Flag={group.tFlag}
              visit1Flag={group.sFlag}
              visit2Flag={group.lFlag}
              res={props.results.filter((result) => {
                return result.char === group.char;
              })}
            />
          );
        })}
      </div>
    </div>
  );
};

export default IndGroup;

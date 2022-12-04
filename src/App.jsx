import { useState } from "react";
import Group from "./components/Group";
import Match from "./components/Match";
import IndGroup from "./components/IndGroup";
import Nav from "./components/Nav";
import League from "./components/League";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { users } from "./data";
import "./css/App.css";
import Playoffs from "./components/Playoffs";

function App() {
  return (
    <div className="div-app">
      <Nav />
      <Home />
      {users.map((user) => {
        return (
          <>
            <IndGroup
              name={user.name}
              date={user.date}
              results={user.results}
              groupsData={user.groupsData}
              id={user.id}
            />
            <IndGroup
              name={user.name}
              date={user.date2}
              results={user.results2}
              groupsData={user.groupsData2}
              id={user.id2}
            />
            <IndGroup
              name={user.name}
              date={user.date3}
              results={user.results3}
              groupsData={user.groupsData3}
              id={user.id3}
            />
            <Playoffs
              name={user.name}
              date={user.date4}
              matchData={user.matchData}
              quartersData={user.quartersData}
              id={user.id4}
              idQF={user.id5}
            />
          </>
        );
      })}
      <League
        userData="Fase de Grupos"
        id="tabla"
        first="Shoali"
        fPoints="37pts"
        second="Lule"
        sPoints="32pts"
        third="Chuchantrio"
        tPoints="30pts"
        fourth="Nano"
        fPoints4="30pts"
        fifth="Lauri"
        fPoints5="29pts"
        sixth="Jeezy"
        sPoints6="27pts"
        seventh="Ceci (No participó)"
        sPoints7="00pts"
      />
      <League
        userData="Fase Final"
        id="tablaFinal"
        first="Chuchantrio"
        fPoints="5pts"
        second="Nano"
        sPoints="5pts"
        third="Shoali"
        tPoints="4pts"
        fourth="Ceci"
        fPoints4="3pts"
        fifth="Jeezy"
        fPoints5="3pts"
        sixth="Lauri"
        sPoints6="2pts"
        seventh="Lule"
        sPoints7="2pts"
      />
      <League
        userData="Acumulado Total"
        id="tablaAcumulado"
        first="Shoali"
        fPoints="41pts"
        second="Chuchantrio"
        sPoints="35pts"
        third="Nano"
        tPoints="35pts"
        fourth="Lule"
        fPoints4="34pts"
        fifth="Lauri"
        fPoints5="31pts"
        sixth="Jeezy"
        sPoints6="30pts"
        seventh="Ceci"
        sPoints7="03pts"
      />
      <Footer />
    </div>
  );
}

export default App;

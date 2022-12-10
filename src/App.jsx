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
              semisData={user.semisData}
              idSF={user.id6}
              bronzeData={user.bronzeData}
              idBrz={user.id7}
              finalData={user.finalData}
              idFinal={user.id8}
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
        fPoints="13pts"
        second="Nano"
        sPoints="10pts"
        third="Lule"
        tPoints="10pts"
        fourth="Shoali"
        fPoints4="9pts"
        fifth="Jeezy"
        fPoints5="8pts"
        sixth="Ceci"
        sPoints6="8pts"
        seventh="Lauri"
        sPoints7="7pts"
      />
      <League
        userData="Acumulado Total"
        id="tablaAcumulado"
        first="Shoali"
        fPoints="46pts"
        second="Chuchantrio"
        sPoints="43pts"
        third="Lule"
        tPoints="42pts"
        fourth="Nano"
        fPoints4="40pts"
        fifth="Lauri"
        fPoints5="36pts"
        sixth="Jeezy"
        sPoints6="35pts"
        seventh="Ceci"
        sPoints7="08pts"
      />
      <Footer />
    </div>
  );
}

export default App;

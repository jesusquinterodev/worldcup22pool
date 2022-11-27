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
          </>
        );
      })}
      <League />
      <Footer />
    </div>
  );
}

export default App;

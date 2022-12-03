import React from "react";
import Titles from "./Titles";
import LeagueName from "./LeagueName";
import { users } from "../data.js";
import "../css/League.css";

const League = (props) => {
  return (
    <div>
      <Titles
        username="Tabla de Posiciones"
        userData={props.userData}
        id={props.id}
      />
      <div className="league">
        <LeagueName
          name={props.first}
          points={props.fPoints}
          medal="https://cdn0.iconfinder.com/data/icons/sport-balls/512/gold_medal.png"
        />
        <LeagueName
          name={props.second}
          points={props.sPoints}
          medal="https://cdn0.iconfinder.com/data/icons/sport-balls/512/silver_medal.png"
        />
        <LeagueName
          name={props.third}
          points={props.tPoints}
          medal="https://cdn0.iconfinder.com/data/icons/sport-balls/512/bronze_medal.png"
        />
        <LeagueName
          name={props.fourth}
          points={props.fPoints4}
          medal="https://cdn.shopify.com/s/files/1/0596/9399/0049/files/Untitled-1_0002_Layer-8.png"
        />
        <LeagueName
          name={props.fifth}
          points={props.fPoints5}
          medal="https://www.meme-arsenal.com/memes/ff4b2dea60a357faa706e4b2383a2a9b.jpg"
        />
        <LeagueName
          name={props.sixth}
          points={props.sPoints6}
          medal="https://static-cdn.jtvnw.net/jtv_user_pictures/02191ca0-0cf9-47b6-87c5-1933b54bd964-profile_image-300x300.png"
        />
        <LeagueName
          name={props.seventh}
          points={props.sPoints7}
          medal="https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440.jpg"
        />
      </div>
    </div>
  );
};

export default League;

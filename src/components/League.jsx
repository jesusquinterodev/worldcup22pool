import React from "react";
import Titles from "./Titles";
import LeagueName from "./LeagueName";
import { users } from "../data.js";
import "../css/League.css";

const League = () => {
  return (
    <div>
      <Titles
        username="Tabla de Posiciones"
        userData="Acumulado total"
        id="tabla"
      />
      <div className="league">
        <LeagueName
          name="Shoali"
          points="36pts"
          medal="https://cdn0.iconfinder.com/data/icons/sport-balls/512/gold_medal.png"
        />
        <LeagueName
          name="Lule"
          points="32pts"
          medal="https://cdn0.iconfinder.com/data/icons/sport-balls/512/silver_medal.png"
        />
        <LeagueName
          name="Chuchantrio"
          points="29pts"
          medal="https://cdn0.iconfinder.com/data/icons/sport-balls/512/bronze_medal.png"
        />
        <LeagueName
          name="Lauri"
          points="28pts"
          medal="https://cdn.shopify.com/s/files/1/0596/9399/0049/files/Untitled-1_0002_Layer-8.png"
        />
        <LeagueName
          name="Nano"
          points="28pts"
          medal="https://www.meme-arsenal.com/memes/ff4b2dea60a357faa706e4b2383a2a9b.jpg"
        />
        <LeagueName
          name="Jeezy"
          points="26pts"
          medal="https://static-cdn.jtvnw.net/jtv_user_pictures/02191ca0-0cf9-47b6-87c5-1933b54bd964-profile_image-300x300.png"
        />
      </div>
    </div>
  );
};

export default League;

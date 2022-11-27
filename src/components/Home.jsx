import React from "react";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>QUINIELA MUNDIAL 2022</h1>
      <div className="home-images">
        <div className="home-text">
          <h2>Reglas</h2>
          <h3>Es una quiniela super sencilla con pocas reglas:</h3>
          <p>⚪ Aciertas resultado exacto: +3pts</p>
          <p>⚪ Aciertas solo el ganador: +1pts</p>
          <p>⚪ No aciertas nada: 0pts</p>
          <p>⚫ Criterio de desempate: Más resultados exactos acertados</p>
        </div>
        <img
          src="https://i.pinimg.com/originals/8b/fd/c0/8bfdc0caa9db3d0bed87a4a51e197ea2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;

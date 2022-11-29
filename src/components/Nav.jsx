import React from "react";
import "../css/Nav.css";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <img
          className="nav-logo"
          src="https://i.pinimg.com/originals/8b/fd/c0/8bfdc0caa9db3d0bed87a4a51e197ea2.png"
          alt=""
        />
      </a>
      <div className="nav-link">
        <a href="#lule" className="nav-outside-link">
          Lule ▼
        </a>
        <div className="nav-link-dropdown">
          <a href="#lule" className="nav-inside-link">
            Fecha 1
          </a>
          <a href="#lule2" className="nav-inside-link">
            Fecha 2
          </a>
          <a href="#lule3" className="nav-inside-link">
            Fecha 3
          </a>
          <a href="#lule4" className="nav-inside-link">
            Octavos
          </a>
        </div>
      </div>
      <div className="nav-link">
        <a href="#chuchantrio" className="nav-outside-link">
          Chuchantrio ▼
        </a>
        <div className="nav-link-dropdown">
          <a href="#chuchantrio" className="nav-inside-link">
            Fecha 1
          </a>
          <a href="#chuchantrio2" className="nav-inside-link">
            Fecha 2
          </a>
          <a href="#chuchantrio3" className="nav-inside-link">
            Fecha 3
          </a>
          <a href="#chuchantrio4" className="nav-inside-link">
            Octavos
          </a>
        </div>
      </div>
      <div className="nav-link">
        <a href="#lauri" className="nav-outside-link">
          Lauri ▼
        </a>
        <div className="nav-link-dropdown">
          <a href="#lauri" className="nav-inside-link">
            Fecha 1
          </a>
          <a href="#lauri2" className="nav-inside-link">
            Fecha 2
          </a>
          <a href="#lauri3" className="nav-inside-link">
            Fecha 3
          </a>
          <a href="#lauri4" className="nav-inside-link">
            Octavos
          </a>
        </div>
      </div>
      <div className="nav-link">
        <a href="#nano" className="nav-outside-link">
          Nano ▼
        </a>
        <div className="nav-link-dropdown">
          <a href="#nano" className="nav-inside-link">
            Fecha 1
          </a>
          <a href="#nano2" className="nav-inside-link">
            Fecha 2
          </a>
          <a href="#nano3" className="nav-inside-link">
            Fecha 3
          </a>
          <a href="#nano4" className="nav-inside-link">
            Octavos
          </a>
        </div>
      </div>
      <div className="nav-link">
        <a href="#jeezy" className="nav-outside-link">
          Jeezy ▼
        </a>
        <div className="nav-link-dropdown">
          <a href="#jeezy" className="nav-inside-link">
            Fecha 1
          </a>
          <a href="#jeezy2" className="nav-inside-link">
            Fecha 2
          </a>
          <a href="#jeezy3" className="nav-inside-link">
            Fecha 3
          </a>
          <a href="#jeezy4" className="nav-inside-link">
            Octavos
          </a>
        </div>
      </div>
      <div className="nav-link">
        <a href="#shoali" className="nav-outside-link">
          Shoali ▼
        </a>
        <div className="nav-link-dropdown">
          <a href="#shoali" className="nav-inside-link">
            Fecha 1
          </a>
          <a href="#shoali2" className="nav-inside-link">
            Fecha 2
          </a>
          <a href="#shoali3" className="nav-inside-link">
            Fecha 3
          </a>
          <a href="#shoali4" className="nav-inside-link">
            Octavos
          </a>
        </div>
      </div>
      {/* Prueba */}
      <div className="nav-link">
        <a href="#resultados" className="nav-outside-link">
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_531959.png"
            alt=""
            className="nav-logo"
            title="Resultados reales"
          />{" "}
          <span className="span-arrow"> ▼ </span>
        </a>
        <div className="nav-link-dropdown">
          <a href="#resultados" className="nav-inside-link">
            Fecha 1
          </a>
          <a href="#resultados2" className="nav-inside-link">
            Fecha 2
          </a>
          <a href="#resultados3" className="nav-inside-link">
            Fecha 3
          </a>
          <a href="#resultados4" className="nav-inside-link">
            Octavos
          </a>
        </div>
      </div>
      <a href="#tabla">
        {" "}
        <img
          src="https://cdn-icons-png.flaticon.com/512/1599/1599930.png"
          alt=""
          className="nav-logo"
          title="Tabla de puntos"
        />{" "}
      </a>
    </nav>
  );
};

export default Nav;

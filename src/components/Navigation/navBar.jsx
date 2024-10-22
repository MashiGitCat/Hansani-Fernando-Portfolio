import React from "react";
import "./navBar.css";

const navBar = () => {
  return (
    <div>
      <header>
        <nav className="nav">
          <div>
            <div className="nav__container">
              <h1 className="nav__logo">Hansani Fernando</h1>
              <button className="nav__button nav__button__text">Menu</button>
            </div>
          </div>
        </nav>
      </header>
      
    </div>
  );
};

export default navBar;

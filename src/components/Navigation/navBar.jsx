import React, { useState } from "react";
import "./navBar.css";
import Togglemenu from "../Togglemenu/toggleMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarAnimated, setNavbarAnimated] = useState(false); // To trigger the navbar animation

  const handleToggleMenu = () => {
    if (menuOpen) {
      setNavbarAnimated(true); 
      setTimeout(() => {
        setNavbarAnimated(false); 
      }, 800); 
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {menuOpen ? (
        <Togglemenu closeMenu={handleToggleMenu} />
      ) : (
        <header>
          <nav className={`nav ${navbarAnimated ? "nav-animate" : ""}`}>
            <div>
              <div className="nav__container">
                <h1 id="logo">Hansani Fernando</h1>
                <button
                  className="nav__button nav__button__text"
                  onClick={handleToggleMenu}
                >
                  Menu
                </button>
              </div>
            </div>
          </nav>
        </header>
      )}
    </div>
  );
};

export default Navbar;

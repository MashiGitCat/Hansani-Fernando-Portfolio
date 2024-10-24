import React, { useState, useEffect } from "react";
import "./toggleMenu.css";
import { Link } from "react-router-dom";

const Togglemenu = ({ closeMenu }) => {
  const [closing, setClosing] = useState(false);
  const [, setBorderAppear] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBorderAppear(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      closeMenu();
    }, 600);
  };

  return (
    <div className={`toggle-menu ${closing ? "closing" : ""} border-appear`}>
      <ul className="toggle-menu__list">
        <li className="toggle-menu__list-items">
          <Link to="/projects" onClick={handleClose}>
            Projects
          </Link>
        </li>
        <li className="toggle-menu__list-items">
          <Link to="/about" onClick={handleClose}>
            About
          </Link>
        </li>
        <li className="toggle-menu__list-items">
          <Link to="/contact" onClick={handleClose}>
            Contact
          </Link>
        </li>
        <li className="toggle-menu__logo-position">Hansani Fernando</li>
      </ul>
      <ul className="toggle-menu__list">
        <li className="toggle-menu__list-item-close" onClick={handleClose}>
          Close
        </li>
      </ul>
    </div>
  );
};

export default Togglemenu;

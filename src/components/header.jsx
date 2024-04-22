import react, { useState } from "react";
import { Link } from "react-router-dom";
import { VscGrabber, VscClose } from "react-icons/vsc";
import "./header.css";

export const Header = () => {
  const [isActive, setIsActive] = useState("false");

  const openMenu = () => {
    setIsActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };
  return (
    <>
      <header className="main_header">
        <div>
          <Link className="link_to_main" to="/">
            DAYZ
          </Link>
          <button className="main_menu" onClick={openMenu}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
        </div>

        <div
          className={`overlay__menu ${!isActive ? "menu__opened" : ""}`}
          onBlur={() => {
            setIsActive(falase);
          }}
        >
          <div className="menu_bg">
            <div className="menu__container">
              <ul className="the_menu">
                <li className="menu_item">
                  <Link onClick={openMenu} to="/me/">
                    Home
                  </Link>
                </li>
                <li className="menu_item">
                  <Link onClick={openMenu} to="/me/bio">
                    About
                  </Link>
                </li>
                <li className="menu_item">
                  <Link onClick={openMenu} to="/me/resume">
                    Technical Background
                  </Link>
                </li>
                <li className="menu_item">
                  <Link onClick={openMenu} to="/me/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

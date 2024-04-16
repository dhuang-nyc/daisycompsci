import react, { useState } from "react";
import { Link } from "react-router-dom";
import { VscGrabber, VscClose } from "react-icons/vsc";
import "./header.css"

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const openMenu = () => {
    setIsActive(!isActive)
  }
  return (
    <>
      <header className="main_header">
        <div>
            <Link className="link_to_main" to="/">DAYZ</Link>
            <button className="main_menu" onClick={openMenu}>
                {!isActive ? <VscGrabber /> : <VscClose/>}
            </button>
        </div>

        <div className={`overlay__menu ${isActive ? "menu__opened" : ""}`}>
            <div className="menu_bg">
                <div className="menu__container">
                    <ul className="the_menu">
                        <li className="menu_item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="menu_item">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="menu_item">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </header>
    </>
  );
};

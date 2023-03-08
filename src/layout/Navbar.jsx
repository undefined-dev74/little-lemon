import { useState } from "react";
import Navigation from "./Navigation";
// import Hamburger from "./../assets/icons/hamburger";
// import Close from "../assets/icons/close";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <nav>
      <nav className="burger">
        <img src={"../assets/icons/nav-logo"} alt="Little Lemon logo" className="nav-image"></img>

        <button className="burger-icon" onClick={handleToggle}>
          {/* <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" /> */}
        </button>
      </nav>
      <Navigation device="desktop" />
      {navbarOpen ? <Navigation device="mobile" /> : ""}
    </nav>
  );
}

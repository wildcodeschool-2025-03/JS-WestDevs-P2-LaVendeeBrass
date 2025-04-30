import { useState } from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router";

function NavBar() {
  // burger menu
  const [showLinks, setShowLinks] = useState<boolean>(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  // location navbar
  const location = useLocation();

  let NavBarClass = "navbar";
  if (location.pathname === "/") {
    NavBarClass += " home";
  } else if (location.pathname === "/MenuPage") {
    NavBarClass += " menu";
  } else if (location.pathname === "/ReservationPage") {
    NavBarClass += " reservation";
  } else if (location.pathname === "/AboutPage") {
    NavBarClass += " about";
  }

  return (
    <section
      className={`${NavBarClass} ${showLinks ? "show-nav" : "hide-nav"}`}
    >
      <img src="logo.png" alt="Logo de la brasserie" />
      <button type="button" className="burger-menu" onClick={handleShowLinks}>
        <span />
      </button>
      <nav>
        <ul>
          <li>
            <Link to="/">accueil</Link>
          </li>
          <li>
            <Link to="/MenuPage">menu</Link>
          </li>
          <li>
            <Link to="/AboutPage">à propos</Link>
          </li>
          <li>
            <Link to="/ReservationPage">réservation</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavBar;

import { useState } from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router";

function NavBar() {
  // burger menu
  const [showLinks, setShowLinks] = useState<boolean>(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleCloseMenu = () => {
    setShowLinks(false);
    window.scrollTo({
      top: 0,
    });
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
      <Link to="/">
        <img src="logo.png" alt="Logo de la brasserie" />
      </Link>
      <button type="button" className="burger-menu" onClick={handleShowLinks}>
        <span />
      </button>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={handleCloseMenu}>
              accueil
            </Link>
          </li>
          <li>
            <Link to="/MenuPage" onClick={handleCloseMenu}>
              menu
            </Link>
          </li>
          <li>
            <Link to="/AboutPage" onClick={handleCloseMenu}>
              à propos
            </Link>
          </li>
          <li>
            <Link to="/ReservationPage" onClick={handleCloseMenu}>
              réservation
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavBar;

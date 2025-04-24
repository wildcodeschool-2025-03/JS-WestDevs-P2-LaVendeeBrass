import { useState } from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router";

function NavBar() {
  const [showLinks, setShowLinks] = useState<boolean>(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

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
        <div className="burger-menu">
          <span />
          <span />
          <span />
        </div>
      </nav>
    </section>
  );
}

export default NavBar;

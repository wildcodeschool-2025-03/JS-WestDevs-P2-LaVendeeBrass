import "./Header.css";
import { Link, useLocation } from "react-router";

function Header() {
  const location = useLocation();

  let headerClass = "navbar";
  if (location.pathname === "/") {
    headerClass += " home";
  } else if (location.pathname === "/MenuPage") {
    headerClass += " menu";
  } else if (location.pathname === "/AboutPage") {
    headerClass += " about";
  } else {
    headerClass += " default";
  }

  return (
    <section className={headerClass}>
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
            <Link to="/">à propos</Link>
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

export default Header;

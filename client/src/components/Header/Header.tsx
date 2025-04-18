import "./Header.css";
import { Link } from "react-router";

function Header() {
  return (
    <header>
      <img src="logo.png" alt="Logo de la brasserie" />
      <nav>
        <ul>
          <li>
            <Link to="/">accueil</Link>
          </li>
          <li>
            <Link to="/">menu</Link>
          </li>
          <li>
            <Link to="/">à propos</Link>
          </li>
          <li>
            <Link to="/">réservation</Link>
          </li>
        </ul>
        <div className="burger-menu">
          <span />
          <span />
          <span />
        </div>
      </nav>
    </header>
  );
}

export default Header;

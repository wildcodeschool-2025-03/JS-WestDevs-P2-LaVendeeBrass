import "./Footer.css";

function Footer() {
  return (
    <footer>
      <ul>
        <li className="contact">
          <h3>Contact:</h3>
          <p>Téléphone: 02-44-56-97-83</p>
          <p>E-mail: contact@vendee-brass.fr</p>
          <p>Adresse : 52 Av. de la plage 85800 Saint-Gilles-Croix-de-vie</p>
        </li>

        <li className="reseaux">
          <h3>Réseaux</h3>
          <section>
            <a href="https://fr-fr.facebook.com/">
              <img
                src="logo-facebook.png"
                alt="Lien vers notre page Facebook"
              />
            </a>
            <a href="https://www.instagram.com/">
              <img
                src="logo-instagram.svg"
                alt="Lien vers notre page Instagram"
              />
            </a>

            <a href="https://x.com/">
              <img src="logo-X.png" alt="Lien vers notre page Twitter" />
            </a>
          </section>
        </li>

        <li>
          <h3>Le Site</h3>
          <p>Site développé par WestDevs</p>
          <p>
            <a href=" ">Mentions légales</a>
          </p>
          <p>
            <a href=" ">Données personnelles</a>
          </p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

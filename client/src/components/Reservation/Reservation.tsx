import Heuremidi from "./Heure-midi";
import "./Reservation.css";

function Reservation() {
  return (
    <section className="contener">
      <article className="contact">
        <h3>Horaires :</h3>

        <div>
          <p>Midi :</p>
          <p>
            Mardi - Vendredi :<br />
            12h - 14h30
          </p>
          <p>
            Samedi : <br />
            12h - 15h30
          </p>
        </div>

        <div>
          <p>Soir :</p>
          <p>
            Mardi - Jeudi :<br />
            19h - 21h
          </p>
          <p>
            Vendredi - Samedi :<br />
            19h - 22h
          </p>
        </div>

        <h3>Contact :</h3>

        <div>
          <p>
            Téléphone :<br />
            02-44-56-97-83
          </p>
        </div>

        <div className="mb-2">
          <p>
            <span>E-mail :</span>
            <br />
            contact@vendee-brass.fr
          </p>
        </div>

        <div>
          <p>Adresse :</p>
          <p>
            52 Av. de la Plage
            <br />
            85 800 Saint-Gilles-Croix-de-Vie
          </p>
        </div>
      </article>
      <article className="formulaire">
        <h2>Votre Réservation</h2>
        <form>
          <div className="item">
            <label htmlFor="date">Date</label>
            <input id="date" type="date" />
          </div>
          <div className="item">
            <label htmlFor="service">Service</label>
            <select name="service" id="service">
              <option value="">--Choisir votre Service</option>
              <option value="">Service du Midi</option>
              <option value="">Service du Soir</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="heure">Heure</label>
            <Heuremidi />
          </div>
          <div className="item">
            <label htmlFor="nb">Nombre de personnes</label>
            <input id="nb" type="number" placeholder=" Nombre de personnes" />
          </div>

          <div className="item">
            <label htmlFor="nom">Nom</label>
            <input id="nom" type="text" placeholder=" Saisissez vote nom" />
          </div>
          <div className="item">
            <label htmlFor="prenom">Prénom</label>
            <input
              id="prenom"
              type="text"
              placeholder=" Saisissez votre prénom"
            />
          </div>
          <div className="item">
            <label htmlFor="mail">Adresse Mail</label>
            <input id="mail" type="email" placeholder=" Saisissez votre mail" />
          </div>
          <div className="item">
            <label htmlFor="telephone">Numéro de téléphone</label>
            <input id="telephone" type="tel" placeholder=" N° de téléphone" />
          </div>
        </form>
        <button type="button">Réservez</button>
      </article>
    </section>
  );
}

export default Reservation;

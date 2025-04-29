import "./ReservationPage.css";
import { useState } from "react";
import HourInput from "./HourInput";

function ReservationPage() {
  const [date, setDate] = useState("");

  const [service, setService] = useState("");

  const [number, setNumber] = useState("");

  const formatDateISO = (date: Date) => {
    const isoString = date.toISOString();
    const formattedDate = isoString.split("T")[0];
    return formattedDate;
  };

  const today = new Date();

  //const minDate = new Date(today);

  //const maxDate = new Date(today);

  today.setDate(today.getDate() + 21);

  const dateString = today.toISOString().split("T")[0];

  // const maxDateString = maxDate.toISOString().split("T")[0];

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const minNumber = 1;
  const maxNumber = 8;
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setService(e.target.value);
  };

  let backGroundImage = "";
  if (service === "Service du Midi") {
    backGroundImage = "reservation/reservation-jour.jpeg";
  } else {
    backGroundImage = "reservation/reservation-nuit.jpeg";
  }
  console.log(backGroundImage);
  console.log(service, "coucoou");
  return (
    <main
      className="reservation-main"
      style={{ backgroundImage: `url(${backGroundImage})` }}
    >
      <section className="reservation-card">
        <aside className="contact">
          <div className="horaire-container">
            <h3>Horaires :</h3>

            <div>
              <p>Midi :</p>
              <p>
                Mardi - Vendredi : <span>12h - 14h30</span>
              </p>
              <p>
                Samedi : <span>12h - 15h30</span>
              </p>
            </div>

            <div>
              <p>Soir :</p>
              <p>
                Mardi - Jeudi : <span>19h - 21h</span>
              </p>
              <p>
                Vendredi - Samedi : <span>19h - 22h</span>
              </p>
            </div>
          </div>
          <div className="contact-container">
            <h3>Contact :</h3>

            <div>
              <p>
                Téléphone : <span>02-44-56-97-83</span>
              </p>
            </div>

            <div className="mb-2">
              <p>
                E-mail : <span>contact@vendee-brass.fr</span>
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
          </div>
        </aside>
        <form className="formulaire">
          <h1>Votre Réservation</h1>
          <div className="inputs">
            <div className="input-group">
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={handleDateChange}
                // min={today}
                max={dateString}
              />
            </div>
            <div className="input-group">
              <label htmlFor="service">Service</label>
              <select
                name="service"
                id="service"
                onChange={handleServiceChange}
                value={service}
              >
                <option>--Choisir votre Service</option>
                <option>Service du Midi</option>
                <option>Service du Soir</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="heure">Heure</label>
              <HourInput />
            </div>
            <div className="input-group">
              <label htmlFor="nb">Nombre de personnes</label>
              <input
                id="nb"
                type="number"
                placeholder=" Nombre de personnes"
                value={number}
                onChange={handleNumberChange}
                min={minNumber}
                max={maxNumber}
              />
            </div>

            <div className="input-group">
              <label htmlFor="nom">Nom</label>
              <input id="nom" type="text" placeholder=" Saisissez vote nom" />
            </div>
            <div className="input-group">
              <label htmlFor="prenom">Prénom</label>
              <input
                id="prenom"
                type="text"
                placeholder=" Saisissez votre prénom"
              />
            </div>
            <div className="input-group">
              <label htmlFor="mail">Adresse Mail</label>
              <input
                id="mail"
                type="email"
                placeholder=" Saisissez votre mail"
              />
            </div>
            <div className="input-group">
              <label htmlFor="telephone">Numéro de téléphone</label>
              <input id="telephone" type="tel" placeholder=" N° de téléphone" />
            </div>
          </div>

          <button type="submit">Réservez</button>
        </form>
      </section>
    </main>
  );
}

export default ReservationPage;

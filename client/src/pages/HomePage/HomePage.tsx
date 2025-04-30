import { useEffect, useState } from "react";
import { Link } from "react-router";

import "./Homepage.css";
import SpecialityCard from "../../components/SpecialityCard/SpecialityCard";

interface SpecialitiesType {
  id: string;
  imgSrc: string;
  description: string;
}

function HomePage() {
  const [specialities, setSpecialities] = useState<SpecialitiesType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/specialities")
      .then((res) => res.json())
      .then((data) => {
        setSpecialities(data);
      });
  }, []);

  return (
    <>
      <header className="homepage-header">
        <h1>le vendée brass</h1>
        <img src="logo.png" alt="Logo de la brasserie" />
      </header>
      <main className="homepage-main">
        <section className="description">
          <h2>La Brasserie</h2>
          <p>
            Bienvenue dans la brasserie le Vendée Brass. Venez gouter nos
            spécialités, passer un agréable moment en famille, entre amis ou les
            deux !
          </p>
          <p>
            Notre cuisine est 1oo% Maison avec des produits frais
            majoritairement issus de notre beau terroir.
          </p>
          <p>
            L’équipe est jeune et dynamique, prête à vous accueillir. Au plaisir
            de vous servir prochainement !
          </p>
        </section>
        <section className="specialities">
          <h2>Nos Spécialités</h2>
          <div className="articles-container">
            {specialities.map((speciality) => (
              <SpecialityCard
                specialityProps={speciality}
                key={speciality.id}
              />
            ))}
          </div>
        </section>
        <section className="reservation-card">
          <aside>
            <div className="horaires">
              <h3>Horaires :</h3>
              <div className="horaires-midi">
                <h4>Midi :</h4>
                <p>Mardi-Vendredi : 12h-14h30</p>
                <p>Samedi : 12h-15h30</p>
              </div>
              <div className="horaires-soir">
                <h4>Soir :</h4>
                <p>Mardi-Jeudi : 19h-21h</p>
                <p>Vendredi-Samedi : 19h-22h</p>
              </div>
            </div>
            <div className="contact">
              <h3>Contact :</h3>
              <p>Téléphone : 02-44-56-97-83</p>
              <p>E-mail : contact@vendee-brass.fr</p>
              <p>
                Adresse :<br />
                52 Av. de la Plage
                <br />
                85 800 Saint-Gilles-Croix-de-Vie
              </p>
            </div>
          </aside>
          <article>
            <h2>Réservations</h2>
            <div className="text-container">
              <p>
                Vous craignez de ne pas avoir de table libre ? Ou vous êtes
                peut-être quelqu’un d’organisé qui aime prévoir à l’avance ?
              </p>
              <p>Il vous suffit de réserver directement sur le site !</p>
              <p>
                Vous pouvez réserver jusqu’à 3 semaines à l’avance. Pour les
                tables de plus de 8 personnes, prenez directement contact avec
                nous par téléphone ou par mail.
              </p>
              <p>À très bientôt !</p>
            </div>
            <div className="reservation-link-box">
              <Link to="/ReservationPage">Réserver</Link>
            </div>
          </article>
        </section>
        <section className="localization">
          <div className="contact">
            <h2>Contact :</h2>
            <p>Téléphone : 02-44-56-97-83</p>
            <p>E-mail : contact@vendee-brass.fr</p>
            <p>
              Adresse :<br />
              52 Av. de la Plage
              <br />
              85 800 Saint-Gilles-Croix-de-Vie
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2736.747541874985!2d-1.941251323658372!3d46.69098347112061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480457d364d23db3%3A0xc72887f55ba598df!2s52%20Av.%20de%20la%20Plage%2C%2085800%20Saint-Gilles-Croix-de-Vie!5e0!3m2!1sfr!2sfr!4v1745316826114!5m2!1sfr!2sfr"
            loading="lazy"
            title="google-maps"
          />
          <div className="address">
            <p>Adresse :</p>
            <p>52 Av. de la Plage</p>
            <p>85 800 Saint-Gilles-Croix-de-Vie</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;

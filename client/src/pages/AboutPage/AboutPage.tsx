import { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import type { ServiceProps } from "../../components/ServiceCard/ServiceCard";

import "./AboutPage.css";



function AboutPage() {
  const [arrayOfServices,setArrayOfServices] = useState<ServiceProps[]>([])
  useEffect(() => {
    fetch("http://localhost:3310/serviceTeam").then((response) => response.json()).then((data) => setArrayOfServices(data) )
  },[])

  return (
    <main className="about-main">
      <section className="about-content">
        <div className="about-history">
          <h2>
            L'Histoire du Vendée Brass : <span>un Goût de Loire-Atlantique</span>
          </h2>
          <p>
            L'Éclosion d'une Passion : <br /> L'aventure du "Vendée Brass" a
            germé d'une idée simple mais audacieuse : célébrer la richesse du
            terroir de la Vendée, cette partie si attachante de la
            Loire-Atlantique, à travers une cuisine authentique et conviviale.
          </p>
          <h1>L'équipe à votre service cliquez pour en savoir plus</h1>
        </div>
        <div className="services-container">
          {arrayOfServices.map((service) => {
            return (
              <ServiceCard
                key={service.category}
                imgCategory={service.imgCategory}
                category={service.category}
                members={service.members}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default AboutPage;

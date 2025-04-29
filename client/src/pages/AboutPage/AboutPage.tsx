import ServiceCard from "../../components/ServiceCard/ServiceCard";

import "./AboutPage.css";

const arrayOfServices = [
  {
    category: "Les Cuisiniers",
    imgCategory:
      "https://www.svgrepo.com/show/48030/female-sportive-avatar-image.svg",
    members: [
      {
        id: "c1",
        name: "Léa",
        imgAvatar: "https://www.svgrepo.com/show/44415/woman-avatar.svg",
      },
      {
        id: "c2",
        name: "Jean",
        imgAvatar: "https://www.svgrepo.com/show/174713/young-man-avatar.svg",
      },
      {
        id: "c3",
        name: "Julie",
        imgAvatar:
          "https://www.svgrepo.com/show/48030/female-sportive-avatar-image.svg",
      },
    ],
  },

  {
    category: "Les Serveurs",
    imgCategory: "https://www.svgrepo.com/show/44415/woman-avatar.svg",
    members: [
      {
        id: "s1",
        name: "Gérard",
        imgAvatar: "https://www.svgrepo.com/show/174713/young-man-avatar.svg",
      },
      {
        id: "s2",
        name: "Sophie",
        imgAvatar: "https://www.svgrepo.com/show/44415/woman-avatar.svg",
      },
      {
        id: "s3",
        name: "Juliette",
        imgAvatar:
          "https://www.svgrepo.com/show/48030/female-sportive-avatar-image.svg",
      },
      {
        id: "s4",
        name: "Yoann",
        imgAvatar:
          "https://www.svgrepo.com/show/140760/man-with-short-hair-profile-avatar.svg",
      },
    ],
  },

  {
    category: "Les Fondateurs",
    imgCategory:
      "https://www.svgrepo.com/show/140760/man-with-short-hair-profile-avatar.svg",
    members: [
      {
        id: "f1",
        name: "Rémy",
        imgAvatar: "https://www.svgrepo.com/show/174713/young-man-avatar.svg",
      },
      {
        id: "f2",
        name: "Tristant",
        imgAvatar:
          "https://www.svgrepo.com/show/140760/man-with-short-hair-profile-avatar.svg",
      },
    ],
  },
];

function AboutPage() {
  return (
    <main className="about-main">
      <section className="about-content">
        <div className="about-history">
          <h2>
            L'Histoire du Vendée Brass :<span>un Goût de Loire-Atlantique</span>
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

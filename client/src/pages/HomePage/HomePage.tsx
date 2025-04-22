import "./Homepage.css";

function HomePage() {
  return (
    <>
      <section className="header-part">
        <h1>le vendée brass</h1>
        <img src="logo.png" alt="Logo de la brasserie" />
      </section>
      <main className="homepage">
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
            <article>
              <p>
                Envie d'un régal simple et efficace ? Nos moules frites sont là
                pour vous satisfaire.
              </p>
            </article>
          </div>
        </section>
        <section className="reservation-card">
          <aside>
            <div className="horaires">
              <h3>Horaires :</h3>
              <p>Midi :</p>
              <p>Mardi-Vendredi : 12h-14h30</p>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}

export default HomePage;

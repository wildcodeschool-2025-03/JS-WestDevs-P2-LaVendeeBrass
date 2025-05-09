// Load the express module to create a web application

import express from "express";

const app = express();

// Configure it
import cors from "cors";

if (process.env.CLIENT_URL != null) {
  app.use(cors({ origin: [process.env.CLIENT_URL] }));
}

const menu = [
  {
    id: "e",
    category: "Entrées",
    imgSrc:
      "https://www.maisondelamouche.fr/wp-content/uploads/2024/08/1722758907_recette-de-ceviche-de-daurade-a-la-peruvienne.jpg",
    menu: [
      {
        id: "e1",
        category: "Produits de la Mer",
        name: "Tartare de saumon à l’aneth et citron vert",
        ingredients:
          "Saumon frais, citron vert, aneth, câpres, échalote, huile d’olive, sel, poivre.",
        price: 9.5,
      },
      {
        id: "e2",
        category: "Produits de la Mer",
        name: "Céviché de dorade au lait de coco",
        ingredients:
          "Dorade, mangue, citron vert, oignon rouge, coriandre, lait de coco, piment doux.",
        price: 10.9,
      },
      {
        id: "e3",
        category: "Produits de la Mer",
        name: "Soupe de poissons maison",
        ingredients:
          "Poissons de roche, tomates, ail, oignon, fenouil, vin blanc, bouquet garni, huile d’olive, croûtons, rouille, fromage râpé.",
        price: 8.5,
      },
      {
        id: "e4",
        category: "Viandes",
        name: "Terrine de campagne maison et pickles d’oignons rouges",
        ingredients:
          "Chair à saucisse, foie de volaille, œufs, pain trempé au lait, échalotes, cognac, sel, poivre, thym, oignons rouges, vinaigre.",
        price: 7.9,
      },
      {
        id: "e5",
        category: "Viandes",
        name: "Œuf cocotte au lard fumé et champignons",
        ingredients:
          "Œufs, lard fumé, champignons de Paris, crème fraîche, beurre, ciboulette, sel, poivre.",
        price: 7.5,
      },
      {
        id: "e6",
        category: "Végétarien",
        name: "Velouté de potimarron et noisettes torréfiées",
        ingredients:
          "Potimarron, pommes de terre, oignon, crème, bouillon de légumes, muscade, noisettes grillées.",
        price: 6.9,
      },
    ],
  },
  {
    id: "p",
    category: "Plats",
    imgSrc:
      "https://cdn.pixabay.com/photo/2021/06/21/15/03/salmon-6353898_1280.jpg",
    menu: [
      {
        id: "p1",
        category: "Produits de la Mer",
        name: "Moules, frites",
        ingredients:
          "Moules de Bouchot, Échalotes, Persil, Ail, Vin blanc sec & Frites",
        price: 18,
      },
      {
        id: "p2",
        category: "Produits de la Mer",
        name: "Fish & Chips",
        ingredients: "Sablaise, Bière, Œuf & Frites",
        price: 14,
      },
      {
        id: "p3",
        category: "Produits de la Mer",
        name: "Saumon à l'unilatérale, riz aux herbes",
        ingredients:
          "Pavé de saumon, fleur de sel, persil, estragon, ciboulette, cerfeuil & Riz",
        price: 21,
      },
      {
        id: "p4",
        category: "Viandes",
        name: "Filet de bœuf, frites & sauce au poivre",
        ingredients:
          "Viande de Limousine 270g, Thym, Échalotes, Estragon, Vin Blanc, Œuf & Frites",
        price: 22,
      },
      {
        id: "p5",
        category: "Viandes",
        name: "Bavette de bœuf à l'ail, frites & sauce à l'échalote",
        ingredients:
          "Viande de Limousine 180g, Ail, Échalotes, Origan, Persil & Frites",
        price: 18,
      },
      {
        id: "p6",
        category: "Végétarien",
        name: "Falafels, frites & sauce au yaourt",
        ingredients:
          "Pois chiches, Ail, Coriandre, Cumin, Yaourt, Baies Roses & Frites",
        price: 17,
      },
    ],
  },
  {
    id: "d",
    category: "Desserts",
    imgSrc:
      "https://images.pexels.com/photos/11701858/pexels-photo-11701858.jpeg",
    menu: [
      {
        id: "d1",
        name: "Crème brûlée",
        ingredients: "Vanille, oeufs, crème fraîche",
        price: 5,
      },
      {
        id: "d2",
        name: "Fondant au chocolat",
        ingredients: "Chocolat noir, oeufs, beurre",
        price: 6,
      },
      {
        id: "d3",
        name: "Pavlova",
        ingredients: "Oeufs, crème liquide, mascarpone, fruits rouges",
        price: 6.5,
      },
      {
        id: "d4",
        name: "Le fion vendéen ou flan maraîchin",
        ingredients: "Cannelle, vanille, lait, oeufs",
        price: 7,
      },
      {
        id: "d5",
        name: "Glaces (2 boules au choix)",
        ingredients: "Vanille, fraise, chocolat, pistache, caramel",
        price: 5,
      },
    ],
  },
  {
    id: "bc",
    category: "Boissons Chaudes",
    imgSrc:
      "https://media.istockphoto.com/id/1126871442/fr/photo/tasse-à-café.jpg?s=612x612&w=0&k=20&c=8BcX-H-fLsItnVz89s0S-vneadu5jmn3fkVYM9BHa8c=",
    menu: [
      {
        id: "bc1",
        category: "Cafés",
        name: "Cappuccino",
        price: 3.5,
      },
      {
        id: "bc2",
        category: "Cafés",
        name: "Latte Macchiato",
        price: 4.0,
      },
      {
        id: "bc3",
        category: "Chocolats",
        name: "Chocolat Chaud Classique",
        price: 4.0,
      },
      {
        id: "bc4",
        category: "Chocolats",
        name: "Chocolat Chaud Viennois",
        price: 4.5,
      },
      {
        id: "bc5",
        category: "Cafés",
        name: "Café Expresso",
        price: 2.0,
      },
      {
        id: "bc6",
        category: "Cafés",
        name: "Double Expresso",
        price: 3.5,
      },
      {
        id: "bc7",
        category: "Cafés",
        name: "Café Allongé",
        price: 2.5,
      },
      {
        id: "bc8",
        category: "Cafés",
        name: "Café Crème",
        price: 3.0,
      },
      {
        id: "bc9",
        category: "Cafés",
        name: "Café Viennois",
        price: 4.0,
      },
      {
        id: "bc10",
        category: "Cafés",
        name: "Café Américain",
        price: 2.8,
      },
      {
        id: "bc11",
        category: "Cafés",
        name: "Café Décaféiné",
        price: 2.5,
      },
      {
        id: "bc12",
        category: "Thés & Infusions",
        name: "Thé Noir",
        price: 3.0,
      },
      {
        id: "bc13",
        category: "Thés & Infusions",
        name: "Thé Vert",
        price: 3.0,
      },
      {
        id: "bc14",
        category: "Thés & Infusions",
        name: "Infusion aux Plantes",
        price: 3.0,
      },
    ],
  },
  {
    id: "b",
    category: "Boissons fraiches",
    imgSrc:
      "https://images.pexels.com/photos/2531183/pexels-photo-2531183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    menu: [
      {
        id: "b1",
        category: "Cocktails Signature",
        name: "Maï Taï",
        ingredients:
          "Rhum Bacardi, Falernum maison à la cachaça et citron vert",
        price: 9,
      },
      {
        id: "b2",
        category: "Cocktails Signature",
        name: "Le Boulevardier",
        ingredients: "Whisky Ballantines, Vermouth rouge et Campari",
        price: 9,
      },
      {
        id: "b3",
        category: "Cocktails Classics",
        name: "Mojito",
        ingredients: "Rhum Bacardi, Menthe fraiche et San Pelligrino",
        price: 8,
      },
      {
        id: "b4",
        category: "Cocktails Classics",
        name: "Piña Colada",
        ingredients: "Rhum blanc et vieux, jus d'ananas et lait de coco",
        price: 8,
      },
      {
        id: "b5",
        category: "Cocktails Classics",
        name: "Americano",
        ingredients: "Martini rouge, Campari, Tonic et Orange",
        price: 8,
      },
      {
        id: "b6",
        category: "Mocktails",
        name: "Virgin Mojito",
        ingredients: "Limonade, Sucre de canne, Menthe et Citron",
        price: 5,
      },
      {
        id: "b7",
        category: "Mocktails",
        name: "Piña Sinlada",
        ingredients: "Jus d'ananas et Lait de coco",
        price: 5,
      },
      {
        id: "b8",
        category: "Bières",
        name: "Vendée Brass",
        price: 4,
      },
      {
        id: "b9",
        category: "Bières",
        name: "Bière bouteille Desperados",
        price: 5,
      },
      {
        id: "b10",
        category: "Bouteille de Vin Rouge",
        name: "Bordeaux Sup",
        castle: "La Grave Singualier",
        price: 24,
      },
      {
        id: "b11",
        category: "Bouteille de Vin Rouge",
        name: "Pinot Noir",
        castle: "Moulin Blanc",
        price: 22,
      },
      {
        id: "b12",
        category: "Bouteille de Vin Rosé",
        name: "Gourmandise méditerranée",
        price: 19,
      },
      {
        id: "b13",
        category: "Bouteille de Vin Blanc",
        name: "L'OBRUT",
        castle: "Domaine de La BARBINIERE, Vin effervescent",
        price: 20,
      },
      {
        id: "b14",
        category: "Bouteille de Vin Blanc",
        name: "Le Clos",
        castle: "Domaine L'Orée du Sabia",
        price: 29,
      },
    ],
  },
];

const specialities = [
  {
    id: "s1",
    imgSrc:
      "https://images.pexels.com/photos/30649002/pexels-photo-30649002/free-photo-of-moules-a-la-vapeur-au-citron-et-aux-herbes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Envie d'un régal simple et efficace ? Nos moules frites sont là pour vous satisfaire.",
  },
  {
    id: "s2",
    imgSrc:
      "https://cdn.pixabay.com/photo/2021/06/21/15/03/salmon-6353898_1280.jpg",
    description:
      "Le saumon à l’unilatérale. La cuisson au four parfaite pour sublimer ce poisson.",
  },
  {
    id: "s3",
    imgSrc:
      "https://images.pexels.com/photos/1123249/pexels-photo-1123249.jpeg",
    description:
      "Le Fish&Chips. Parce que même si c’est rare, nos voisin les anglais font quelques bonnes choses !",
  },
];

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

app.get("/menu", (req: Request, res: Response) => {
  res.json(menu);
});

app.get("/specialities", (req: Request, res: Response) => {
  res.json(specialities);
});

app.get("/serviceTeam", (req: Request, res: Response) => {
  res.json(arrayOfServices);
});

/* ************************************************************************* */

// CORS Handling: Why is the current code present and do I need to define specific allowed origins for my project?

// CORS (Cross-Origin Resource Sharing) is a security mechanism in web browsers that blocks requests from a different domain than the server.
// You may find the following magic line in forums:

// app.use(cors());

// You should NOT do that: such code uses the `cors` module to allow all origins, which can pose security issues.
// For this pedagogical template, the CORS code allows CLIENT_URL in development mode (when process.env.CLIENT_URL is defined).

// If you need to allow extra origins, you can add something like this:

/*
app.use(
  cors({
    origin: ["http://mysite.com", "http://another-domain.com"],
  }),
);
*/

// With ["http://mysite.com", "http://another-domain.com"]
// to be replaced with an array of your trusted origins

/* ************************************************************************* */

// Request Parsing: Understanding the purpose of this part

// Request parsing is necessary to extract data sent by the client in an HTTP request.
// For example to access the body of a POST request.
// The current code contains different parsing options as comments to demonstrate different ways of extracting data.

// 1. `express.json()`: Parses requests with JSON data.
// 2. `express.urlencoded()`: Parses requests with URL-encoded data.
// 3. `express.text()`: Parses requests with raw text data.
// 4. `express.raw()`: Parses requests with raw binary data.

// Uncomment one or more of these options depending on the format of the data sent by your client:

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.text());
// app.use(express.raw());

/* ************************************************************************* */

// Import the API router
import router from "./router";

// Mount the API router under the "/api" endpoint
app.use(router);

/* ************************************************************************* */

// Production-ready setup: What is it for?

// The code includes sections to set up a production environment where the client and server are executed from the same processus.

// What it's for:
// - Serving client static files from the server, which is useful when building a single-page application with React.
// - Redirecting unhandled requests (e.g., all requests not matching a defined API route) to the client's index.html. This allows the client to handle client-side routing.

import fs from "node:fs";
import path from "node:path";

// Serve server resources

const publicFolderPath = path.join(__dirname, "../../server/public");

if (fs.existsSync(publicFolderPath)) {
  app.use(express.static(publicFolderPath));
}

// Serve client resources

const clientBuildPath = path.join(__dirname, "../../client/dist");

if (fs.existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));

  // Redirect unhandled requests to the client index file

  app.get("*", (_, res) => {
    res.sendFile("index.html", { root: clientBuildPath });
  });
}

/* ************************************************************************* */

// Middleware for Error Logging
// Important: Error-handling middleware should be defined last, after other app.use() and routes calls.

import type { ErrorRequestHandler, Request, Response } from "express";

// Define a middleware function to log errors
const logErrors: ErrorRequestHandler = (err, req, res, next) => {
  // Log the error to the console for debugging purposes
  console.error(err);
  console.error("on req:", req.method, req.path);

  // Pass the error to the next middleware in the stack
  next(err);
};

// Mount the logErrors middleware globally
app.use(logErrors);

/* ************************************************************************* */

export default app;

import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/signinadmin", "Connexion Administrateur", "/pages/signinadmin.html"),
    new Route("/signinvet", "Connexion Vétérinaire", "/pages/signinvet.html"),
    new Route("/signinemployee", "Connexion Employé.e", "/pages/signinemployee.html"),
    new Route("/signup", "Inscription", "/pages/signup.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";
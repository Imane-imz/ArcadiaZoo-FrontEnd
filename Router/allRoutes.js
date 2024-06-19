import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/signinadmin", "Connexion Administrateur", "/pages/auth/signinadmin.html"),
    new Route("/signinvet", "Connexion Vétérinaire", "/pages/auth/signinvet.html"),
    new Route("/signinemployee", "Connexion Employé.e", "/pages/auth/signinemployee.html"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html"),
    new Route("/admindashboard", "Compte Administrateur", "/pages/auth/admindashboard.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";
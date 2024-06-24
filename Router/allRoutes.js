import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/signinadmin", "Connexion Administrateur", "/pages/auth/signinadmin.html"),
    new Route("/signinvet", "Connexion Vétérinaire", "/pages/auth/signinvet.html"),
    new Route("/signinemployee", "Connexion Employé.e", "/pages/auth/signinemployee.html"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html"),
    new Route("/admindashboard", "Compte Administrateur", "/pages/auth/admindashboard.html"),
    new Route("/habitats", "Habitats Terrestres", "/pages/habitats/habitats.html"),
    new Route("/habitatsterrestres", "Habitats Terrestres", "/pages/habitats/habitatsterrestres.html"),
    new Route("/habitatsaquatiques", "Habitats Aquatiques", "/pages/habitats/habitatsaquatiques.html"),
    new Route("/habitatsaeriens", "Habitats Aériens", "/pages/habitats/habitatsaeriens.html"),
    new Route("/lions", "Nos Lions", "/pages/animaux/lions.html"),
    new Route("/avis", "Avis", "/pages/avis.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";
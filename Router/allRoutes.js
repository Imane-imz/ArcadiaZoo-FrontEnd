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
    new Route("/tigres", "Nos Tigres", "/pages/animaux/tigres.html"),
    new Route("/elephants", "Nos Éléphants", "/pages/animaux/elephants.html"),
    new Route("/tortues", "Nos Tortues", "/pages/animaux/tortues.html"),
    new Route("/loutres", "Nos Loutres", "/pages/animaux/loutres.html"),
    new Route("/alligators", "Nos Alligators", "/pages/animaux/alligators.html"),
    new Route("/perroquets", "Nos Perroquets", "/pages/animaux/perroquets.html"),
    new Route("/flamants", "Nos Flamants", "/pages/animaux/flamants.html"),
    new Route("/autruches", "Nos Autruches", "/pages/animaux/autruches.html"),
    new Route("/activites", "Nos Activités", "/pages/activites/activites.html"),
    new Route("/restaurant", "Notre Restaurant", "/pages/activites/restaurant.html"),
    new Route("/visiteguidee", "Les Visites Guidées", "/pages/activites/visiteguidee.html"),
    new Route("/petittrain", "Visites en Petit Train", "/pages/activites/petittrain.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";
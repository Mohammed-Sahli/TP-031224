import { CompteBancaire } from "./CompteBancaire";

let monCompte = new CompteBancaire();

// Dépôt de 100 euros
monCompte.deposer(100);

// Retrait de 30 euros
monCompte.retirer(30);

// Affichage du solde final
monCompte.afficherSolde();

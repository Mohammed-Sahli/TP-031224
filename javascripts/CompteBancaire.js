export class CompteBancaire {
  #solde; // impossible de changer cette propriéte privée

  constructor(solde) {
    //initialisation du solde à 0€
    this.#solde = 0;
  }

  //Dépôt/rajout de solde
  deposer(montant) {
    this.#solde = montant;
  }

  //Retrait/diminution de solde
  retirer(montant2) {
    if (this.#solde - montant2 >= 0) {
      this.#solde = this.#solde - montant2;
    } else {
      console.log(
        "Opération impossible, votre solde est insuffisant pour ce retrait !"
      );
    }
  }

  afficherSolde() {
    console.log(`Votre solde est : ${this.#solde} €`);
  }
}

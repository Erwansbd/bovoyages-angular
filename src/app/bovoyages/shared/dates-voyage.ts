export class DatesVoyage {

  id?: number;
  dateAller?: Date;
  dateRetour?: Date;
  prixHT?: number;
  nbrePlaces?: number;
  deleted?: boolean;
  promotion?: boolean;


  constructor(args: DatesVoyage = {}) {
    this.id = args.id;
    this.dateAller = args.dateAller;
    this.dateRetour = args.dateRetour;
    this.prixHT = args.prixHT;
    this.nbrePlaces = args.nbrePlaces;
    this.deleted = args.deleted;
    this.promotion = args.promotion;
  }
}

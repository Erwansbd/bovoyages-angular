import {DatesVoyage} from './dates-voyage';

export class Destination {

  id?: number;
  region?: string;
  description?: string;
  deleted?: boolean;
  datesVoyage?: Array<DatesVoyage>;
  imageUrl?: string;
  fkDestination?: number;


  constructor(args: Destination = {}) {
    this.id = args.id;
    this.region = args.region;
    this.description = args.description;
    this.deleted = args.deleted;
    this.datesVoyage = args.datesVoyage;
    this.imageUrl = args.imageUrl;
    this.fkDestination = args.fkDestination;
  }
}

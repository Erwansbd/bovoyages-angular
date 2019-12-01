import {DatesVoyage} from './dates-voyage';
import {Client} from './client';

export class Voyage {

  id?: number;
  region?: string;
  descriptif?: string;
  datesVoyage?: DatesVoyage;
  client?: Client;


  constructor(args: Voyage = {}) {
    this.id = args.id;
    this.region = args.region;
    this.descriptif = args.descriptif;
    this.datesVoyage = args.datesVoyage;
    this.client = args.client;
  }
}

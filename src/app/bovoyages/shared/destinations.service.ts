import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Destination} from './destination';
import {DatesVoyage} from './dates-voyage';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor(private httpClient: HttpClient) { }

  getDestinations(): Observable<Destination[]> {
    return this.httpClient.get<Destination[]>('destination/all'); // => GET All Destinations à l'adresse localhost:4200/destination/all
  }

  getDestination(id): Observable<Destination> {
    return this.httpClient.get<Destination>('destination/' + id); // GET Destination par id à l'adresse localhost:4200/destination/1
  }

  getDatesVoyages(): Observable<DatesVoyage[]> {
    return this.httpClient.get<DatesVoyage[]>('dates');
  }

  getDatesVoyage(id): Observable<DatesVoyage[]> {
    return this.httpClient.get<DatesVoyage[]>('destination/dates/valid/' + id); // GET DatesVoyage par l'id de la destination
                                                                                  // localhost:4200/destination/dates/valid/1
  }
}

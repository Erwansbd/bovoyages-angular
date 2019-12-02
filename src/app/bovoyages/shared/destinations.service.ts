import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Destination} from './destination';
import {DatesVoyage} from './dates-voyage';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  private url = 'http://localhost:7071/';

  constructor(private httpClient: HttpClient) { }

  getDestinations(): Observable<Destination[]> {
    return this.httpClient.get<Destination[]>(this.url + 'destination/valid'); // => GET All Destinations valides à
                                                                                  // l'adresse localhost:7071/destination/valid
  }

  getDestination(id): Observable<Destination> {
    return this.httpClient.get<Destination>(this.url + 'destination/' + id); // GET Destination par id à l'adresse
                                                                                // localhost:7071/destination/1
  }

  getDatesVoyage(id): Observable<DatesVoyage[]> {
    return this.httpClient.get<DatesVoyage[]>(this.url + 'destination/dates/valid/' + id); // GET DatesVoyage par l'id de la destination
                                                                                  // localhost:4200/destination/dates/valid/1
  }

  getDestinationByDatesVoyage(id): Observable<Destination> {
    return this.httpClient.get<Destination>(this.url + 'dates/destination/' + id); // GET Destination par l'id de DatesVoyage
                                                                                      // à l'adresse localhost:7071/dates/destination/1
  }

  getDatesVoyageById(id): Observable<DatesVoyage> {
    return this.httpClient.get<DatesVoyage>(this.url + 'date/' + id);
  }
}

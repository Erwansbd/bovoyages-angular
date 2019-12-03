import { Injectable } from '@angular/core';
import {Client} from '../shared/client';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  client: Client;

  constructor() { }

  getClient(): Observable<Client> {
    console.log(this.client);
    return of(this.client);
  }
  setClient(client) {
    this.client = client;
  }
}

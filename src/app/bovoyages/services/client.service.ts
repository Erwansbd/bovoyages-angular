import { Injectable } from '@angular/core';
import {Client} from '../shared/client';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private client = new Client('Erwan');

  constructor() { }

  getClient(): Observable<Client> {
    return of(this.client);
  }
  setClient(client) {
    this.client = client;
  }
}

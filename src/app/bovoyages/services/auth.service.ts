import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ClientService} from './client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth = false;

  constructor(private router: Router, private httpClient: HttpClient, private clientService: ClientService) { }

  isLoggedIn() {
    this.isAuth = JSON.parse(localStorage.getItem('auth'));
    return this.isAuth;
  }

  login(client) {
    this.isAuth = true;
    this.clientService.setClient(client);
    localStorage.setItem('auth', 'true');
    this.router.navigateByUrl('/refresh', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/home']);
    });
  }

  logout() {
    this.isAuth = false;
    localStorage.removeItem('auth');
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true});
    this.router.navigate(['/home']);

  }
}

import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ClientService} from './client.service';
import {BehaviorSubject} from 'rxjs';
import {Client} from '../shared/client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth = false;
  private url = 'http://localhost:7071/';
  redirectUrl: string;
  private loginStatus = new BehaviorSubject<boolean>(this.isLoggedIn());
  private username = new BehaviorSubject<string>(localStorage.getItem('username'));

  constructor(private router: Router, private httpClient: HttpClient, private clientService: ClientService) {
  }

  login(client, cb) {
    console.log(client.nom, client.password);
    const params = new HttpParams()
    .set('nom', client.nom)
    .set('password', client.password);
    this.httpClient.post(this.url + 'connexion', params).subscribe(
      (status) => {
        if (status) {
          this.loginStatus.next(true);
          localStorage.setItem('loginStatus', '1');
          localStorage.setItem('username', client.nom);
          localStorage.setItem('auth', 'true');
          this.router.navigate(['/destination']);
          this.clientService.setClient(client);
        } else {
          cb('Identifiants incorrects');
        }
      },
      (err) => cb('Identifiants incorrects')
    );
  }

  logout() {
    this.loginStatus.next(false);
    localStorage.setItem('loginStatus', '0');
    localStorage.removeItem('username');
    localStorage.removeItem('auth');
    this.router.navigate(['/destination']);
  }

  register(client) {
    const params = new HttpParams()
      .set('nom', client.nom)
      .set('password', client.password);
    this.httpClient.post(this.url + 'signup', params).subscribe(
      (status) => {
        if (status) {
          this.router.navigate(['/login']);
        } else {
        }
      },
    );
  }

  private checkLoginStatus(): BehaviorSubject<boolean> {
    return this.currentLoginStatus;
  }

    isLoggedIn() {
    this.isAuth = JSON.parse(localStorage.getItem('auth'));
    return this.isAuth;
  }

  get currentLoginStatus() {
    return this.loginStatus;
  }

  get currentUsername() {
    return this.username.asObservable();
  }
}

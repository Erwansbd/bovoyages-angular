import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ClientService} from './client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth = false;
  private url = 'http://localhost:7071/';

  constructor(private router: Router, private httpClient: HttpClient, private clientService: ClientService) {
  }

  isLoggedIn() {
    this.isAuth = JSON.parse(localStorage.getItem('auth'));
    return this.isAuth;
  }

  login(client, cb) {
    console.log(client.nom, client.password);
    const params = new HttpParams()
    .set('nom', client.nom)
    .set('password', client.password);
    this.httpClient.post(this.url + 'connexion', params).subscribe(
      (status) => {
        if (status) {
          this.isAuth = true;
          this.router.navigate(['/destination']);
          this.clientService.setClient(client);
          localStorage.setItem('auth', 'true');
        } else {
          cb('Identifiants incorrects');
        }
      },
      (err) => cb('Identifiants incorrects')
    );
  }

  logout() {
    this.isAuth = false;
    localStorage.removeItem('auth');
    this.router.navigateByUrl('/RefreshComponent', {skipLocationChange: true});
    this.router.navigate(['/home']);

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
}

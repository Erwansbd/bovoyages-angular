import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ClientService} from './client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth = false;

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
    this.httpClient.post('connexion?', params.toString()).subscribe(
      (status) => {
        if (status) {
          this.isAuth = true;
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
    this.isAuth = false;
    localStorage.removeItem('auth');
    this.router.navigateByUrl('/RefreshComponent', {skipLocationChange: true});
    this.router.navigate(['/home']);

  }
}

import { Component, OnInit } from '@angular/core';
import {Client} from '../../shared/client';
import {ClientService} from '../../services/client.service';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  client: Client;
  title = 'BoVoyages';
  isAuth = false;
  date: Date;
  // dollar sign signifie que le parametre est un observable
  loginStatus$: Observable<boolean>;
  username$: Observable<string>;

  constructor(private clientService: ClientService, private authService: AuthService) { }

  ngOnInit() {
    this.date = new Date();
    this.loginStatus$ = this.authService.currentLoginStatus;
    this.username$ = this.authService.currentUsername;
  }

  onLogout() {
    this.authService.logout();
  }

}

import { Component, OnInit } from '@angular/core';
import {Client} from '../../shared/client';
import {ClientService} from '../../services/client.service';
import {AuthService} from '../../services/auth.service';

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

  constructor(private clientService: ClientService, private authService: AuthService) { }

  ngOnInit() {
    this.date = new Date();
    this.clientService.getClient().subscribe((client) => { this.client = client });
    this.isAuth = this.authService.isLoggedIn();
  }

  onLogout() {
    this.authService.logout();
    this.isAuth = this.authService.isLoggedIn();
  }

}

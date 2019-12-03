import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ClientService} from '../../services/client.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuth: boolean;
  error: string;
  returnUrl: string;
  constructor(private authService: AuthService, private clientService: ClientService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  login(f: NgForm) {
    this.authService.login(f.value,
      (error) => this.error = error
    );
    this.isAuth = this.authService.isLoggedIn();
  }

  onLogout() {
    this.authService.logout();
    this.isAuth = this.authService.isLoggedIn();
  }
}

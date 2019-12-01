import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(!this.authService.isLoggedIn()) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.navigate(['/destination']);
    }
    return this.authService.isLoggedIn();
  }
}

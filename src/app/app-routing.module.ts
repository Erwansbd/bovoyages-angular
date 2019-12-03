import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DestinationListeComponent} from './bovoyages/pages/destination-liste/destination-liste.component';
import {CommonModule} from '@angular/common';
import {DestinationDetailsComponent} from './bovoyages/components/destination-details/destination-details.component';
import {LoginComponent} from './bovoyages/pages/login/login.component';
import {HomeComponent} from './bovoyages/pages/home/home.component';
import {VoyageComponent} from './bovoyages/pages/voyage/voyage.component';
import {RegisterComponent} from './bovoyages/pages/register/register.component';
import {MesvoyagesComponent} from './bovoyages/pages/mesvoyages/mesvoyages.component';


const routes: Routes = [

  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'destination', component: DestinationListeComponent
  },
  {
    path: 'destination-details/:id', component: DestinationDetailsComponent
  },
  {
    path: 'voyage/:id', component: VoyageComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'mesvoyages/:nom', component: MesvoyagesComponent
  },
  {
    path: '**', redirectTo: 'destination'
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

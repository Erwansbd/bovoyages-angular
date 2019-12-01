import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DestinationListeComponent} from './bovoyages/pages/destination-liste/destination-liste.component';
import {CommonModule} from '@angular/common';
import {DestinationDetailsComponent} from './bovoyages/components/destination-details/destination-details.component';
import {LoginComponent} from './bovoyages/pages/login/login.component';
import {HomeComponent} from './bovoyages/pages/home/home.component';


const routes: Routes = [

  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'destination', component: DestinationListeComponent, runGuardsAndResolvers: 'always'
  },
  {
    path: 'destination-details/:id', component: DestinationDetailsComponent
  },
  {
    path: 'login', component: LoginComponent
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationListeComponent } from './pages/destination-liste/destination-liste.component';
import { DestinationDetailsComponent } from './components/destination-details/destination-details.component';
import { NewDestinationComponent } from './pages/new-destination/new-destination.component';
import { DestinationComponent } from './pages/destination/destination.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DatesVoyageComponent } from './pages/dates-voyage/dates-voyage.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';



@NgModule({
  declarations: [
    DestinationListeComponent,
    DestinationDetailsComponent,
    NewDestinationComponent,
    DestinationComponent,
    DatesVoyageComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgbModule
  ]
})
export class BovoyagesModule { }

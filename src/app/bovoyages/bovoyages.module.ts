import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DestinationListeComponent} from './pages/destination-liste/destination-liste.component';
import {DestinationDetailsComponent} from './components/destination-details/destination-details.component';
import {DestinationComponent} from './pages/destination/destination.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DatesVoyageComponent} from './pages/dates-voyage/dates-voyage.component';
import {LoginComponent} from './pages/login/login.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RegisterComponent} from './pages/register/register.component';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { VoyageComponent } from './pages/voyage/voyage.component';

registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    DestinationListeComponent,
    DestinationDetailsComponent,
    DestinationComponent,
    DatesVoyageComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    VoyageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr_FR'}
  ]
})
export class BovoyagesModule {
}

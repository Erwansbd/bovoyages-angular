import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './bovoyages/components/navbar/navbar.component';
import {BovoyagesModule} from './bovoyages/bovoyages.module';
import {FormsModule} from '@angular/forms';
import {DestinationsService} from './bovoyages/shared/destinations.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {ClientService} from './bovoyages/services/client.service';
import {HomeComponent} from './bovoyages/pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BovoyagesModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    DestinationsService,
    ClientService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

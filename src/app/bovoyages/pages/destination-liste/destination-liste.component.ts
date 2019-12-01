import { Component, OnInit } from '@angular/core';
import {DestinationsService} from '../../shared/destinations.service';
import {Destination} from '../../shared/destination';
import {DatesVoyage} from '../../shared/dates-voyage';

@Component({
  selector: 'app-destination-liste',
  templateUrl: './destination-liste.component.html',
  styleUrls: ['./destination-liste.component.css']
})
export class DestinationListeComponent implements OnInit {

  destinations: Destination[];
  destination: Destination;
  selectedDestination: Destination;
  datesVoyageList: DatesVoyage[];


  constructor(private destinationService: DestinationsService) { }

  ngOnInit() {
    this.destinationService.getDestinations().subscribe(
      (destinations) => {
        this.destinations = destinations;
      }
    );
    this.destinationService.getDatesVoyages().subscribe(
      (datesVoyageList) => {
        this.datesVoyageList = datesVoyageList;
      }
    );
  }

  selectDestination(destination) {
    this.selectedDestination = destination;
  }

  unselect() {
    delete this.selectedDestination;
  }

}

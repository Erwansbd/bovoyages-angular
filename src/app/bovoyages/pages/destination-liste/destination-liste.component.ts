import {Component, Input, OnInit} from '@angular/core';
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
  @Input() destination: Destination;
  selectedDestination: Destination;


  constructor(private destinationService: DestinationsService) { }

  ngOnInit() {
    this.destinationService.getDestinations().subscribe(
      (destinations) => {
        this.destinations = destinations;
        this.destinations.forEach(
          destination => {
            console.log(destination.id)
            this.destinationService.getImages(destination.id).subscribe(
              (images) => {
                images.forEach(
                  img => destination.imageUrl = images[0].image);
              });
          }
        );
      });
  }

  selectDestination(destination) {
    this.selectedDestination = destination;
  }

  unselect() {
    delete this.selectedDestination;
  }

}

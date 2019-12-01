import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DestinationsService} from '../../shared/destinations.service';
import {Destination} from '../../shared/destination';
import {DatesVoyage} from '../../shared/dates-voyage';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css']
})
export class DestinationDetailsComponent implements OnInit {

  @Input() destination: Destination;
  @Input() datesVoyage: DatesVoyage[];
  @Output() save = new EventEmitter<number>();

  constructor(private activatedRoute: ActivatedRoute, private destinationService: DestinationsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (map) => {
        const id = +map.get('id');
        this.destinationService.getDestination(id).subscribe(
          destination => this.destination = destination
        );
        this.destinationService.getDatesVoyage(id).subscribe(
          datesVoyage => this.datesVoyage = datesVoyage
        );
      }
    );

  }
}

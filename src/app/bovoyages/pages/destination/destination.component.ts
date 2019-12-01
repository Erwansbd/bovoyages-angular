import {Component, Input, OnInit} from '@angular/core';
import {Destination} from '../../shared/destination';
import {DatesVoyage} from '../../shared/dates-voyage';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  destination: Destination;

  constructor() { }

  ngOnInit() {
  }

}

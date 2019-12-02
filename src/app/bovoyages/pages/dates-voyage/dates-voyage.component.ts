import {Component, Input, OnInit} from '@angular/core';
import {DatesVoyage} from '../../shared/dates-voyage';
import {Destination} from '../../shared/destination';

@Component({
  selector: 'app-dates-voyage',
  templateUrl: './dates-voyage.component.html',
  styleUrls: ['./dates-voyage.component.css']
})
export class DatesVoyageComponent implements OnInit {

  @Input() datesVoyage: DatesVoyage;
  @Input() destinations: Destination[];

  constructor() { }

  ngOnInit() {
  }

}

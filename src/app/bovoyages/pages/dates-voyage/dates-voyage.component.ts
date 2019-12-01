import {Component, Input, OnInit} from '@angular/core';
import {DatesVoyage} from '../../shared/dates-voyage';

@Component({
  selector: 'app-dates-voyage',
  templateUrl: './dates-voyage.component.html',
  styleUrls: ['./dates-voyage.component.css']
})
export class DatesVoyageComponent implements OnInit {

  @Input() datesVoyage: DatesVoyage;

  constructor() { }

  ngOnInit() {
  }

}

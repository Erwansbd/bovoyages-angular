import {Component, Input, OnInit} from '@angular/core';
import {Voyage} from '../../shared/voyage';
import {DestinationsService} from '../../shared/destinations.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mesvoyages',
  templateUrl: './mesvoyages.component.html',
  styleUrls: ['./mesvoyages.component.css']
})
export class MesvoyagesComponent implements OnInit {

  @Input() voyages: Voyage[];

  constructor(private destinationService: DestinationsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (map) => {
        const name = map.get('nom');
        this.destinationService.getVoyagesByClient(name).subscribe(
          voyages => this.voyages = voyages
        );
      }
    );

  }

}

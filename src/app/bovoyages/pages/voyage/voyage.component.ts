import {Component, Input, OnInit} from '@angular/core';
import {DestinationsService} from '../../shared/destinations.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Client} from '../../shared/client';
import {ClientService} from '../../services/client.service';
import {Destination} from '../../shared/destination';
import {DatesVoyage} from '../../shared/dates-voyage';

@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})
export class VoyageComponent implements OnInit {
  @Input() user: Client;
  @Input() destination: Destination;
  @Input() datesVoyage: DatesVoyage;
  form: FormGroup;

  constructor(private destinationService: DestinationsService, private router: Router, private clientService: ClientService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      region: new FormControl('',),
      descriptif: new FormControl('', [Validators.required]),
      client: new FormArray([
        new FormGroup( {
          nom: new FormControl('user.nom', [Validators.required])
        })
      ]),
      voyageurs: new FormArray([
        new FormGroup({
          nom: new FormControl('', [Validators.required]),
          prenom: new FormControl('', [Validators.required]),
          civilite: new FormControl('', [Validators.required])
        })
      ])
    });
    this.clientService.getClient().subscribe(
      client => this.user = client
    );
    this.activatedRoute.paramMap.subscribe(
      (map) => {
        const id = +map.get('id');
        this.destinationService.getDestinationByDatesVoyage(id).subscribe(
          destination => this.destination = destination
        );
        this.destinationService.getDatesVoyageById(id).subscribe(
          datesVoyage => this.datesVoyage = datesVoyage
        );
      }
    );
  }

  addVoyageur() {
    this.voyageurs.push(
      new FormGroup({
        'nom': new FormControl('', [Validators.required]),
        'prenom': new FormControl('', [Validators.required]),
        'civilite': new FormControl('', [Validators.required])
      })
    );
  }

  get voyageurs(): FormArray {
    return this.form.get('voyageurs') as FormArray;
  }

  get client(): FormArray {
    return this.form.get('client') as FormArray;
  }

  onSubmit() {
    console.log(this.form.getRawValue());
  }
}

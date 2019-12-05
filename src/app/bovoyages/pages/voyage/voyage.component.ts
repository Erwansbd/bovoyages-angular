import {Component, Input, OnInit} from '@angular/core';
import {DestinationsService} from '../../shared/destinations.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Client} from '../../shared/client';
import {ClientService} from '../../services/client.service';
import {Destination} from '../../shared/destination';
import {DatesVoyage} from '../../shared/dates-voyage';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {error} from 'util';

@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})
export class VoyageComponent implements OnInit {
  private url = 'http://localhost:7071/';
  userDisplay = '';
  public compteur = 1;
  @Input() destination: Destination;
  @Input() datesVoyage: DatesVoyage;
  form: FormGroup;

  constructor(private destinationService: DestinationsService, private router: Router, private clientService: ClientService, private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.userDisplay = localStorage.getItem('username');
    this.form = new FormGroup({
      region: new FormControl(''),
      descriptif: new FormControl('', [Validators.required]),
      datesVoyage: new FormGroup({
        id: new FormControl(''),
        dateAller: new FormControl(''),
        dateRetour: new FormControl(''),
        prixHT: new FormControl(''),
        nbrePlaces: new FormControl('')
      }),
      client: new FormGroup({
        nom: new FormControl('', [Validators.required])
      }),
      voyageurs: new FormArray([
        new FormGroup({
          nom: new FormControl('', [Validators.required]),
          prenom: new FormControl('', [Validators.required]),
          civilite: new FormControl('', [Validators.required])
        })
      ])
    });
    this.activatedRoute.paramMap.subscribe(
      (map) => {
        const id = +map.get('id');
        this.destinationService.getDestinationByDatesVoyage(id).subscribe(
          destination => this.destination = destination
        );
        this.destinationService.getDatesVoyageById(id).subscribe(
          datesVoyage => this.datesVoyage = datesVoyage
        );
        console.log(this.datesVoyage);
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
    this.increment();
    console.log(this.compteur);
  }

  deleteVoyageur(i: number) {
    this.voyageurs.removeAt(i);
  }

  increment() {
    this.compteur += 1;
  }

  get voyageurs(): FormArray {
    return this.form.get('voyageurs') as FormArray;
  }

  get client(): FormArray {
    return this.form.get('client') as FormArray;
  }

  get datesVoyageInfo(): FormArray {
    return this.form.get('datesVoyage') as FormArray;
  }

  onSubmit() {
    this.destinationService.submitVoyage(this.form.value).subscribe(
      (data) => {
        console.log('Formulaire envoyé');
        this.destinationService.mail(this.userDisplay);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }
}

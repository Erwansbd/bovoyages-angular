import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DestinationsService} from '../../shared/destinations.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-destination',
  templateUrl: './new-destination.component.html',
  styleUrls: ['./new-destination.component.css']
})
export class NewDestinationComponent implements OnInit {
  form: FormGroup;

  constructor(private destinationService: DestinationsService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'region': new FormControl([Validators.required]),
      'description': new FormControl([Validators.required])
    });
  }
}

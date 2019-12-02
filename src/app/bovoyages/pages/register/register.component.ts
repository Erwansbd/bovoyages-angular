import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private error: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(f: NgForm) {
    this.authService.register(f.value);
  }
}

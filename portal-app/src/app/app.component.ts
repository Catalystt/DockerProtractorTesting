import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pizza Portal';

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  current_url = this.router.url;

  constructor(private router: Router) { }

  ngOnInit() {
  }
}

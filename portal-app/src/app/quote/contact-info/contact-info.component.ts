import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  firstFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      dbaCtrl: [''],
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
      phoneCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.email],   
      addressOneCtrl: ['', Validators.required],
      addressTwoCtrl: ['', Validators.required],
      addressCityCtrl: ['', Validators.required],
      addressStateCtrl: ['', Validators.required],
      addressZipCtrl: ['', Validators.required],
      paymentPlanCtrl: ['', Validators.required]
    });
  }

  
}

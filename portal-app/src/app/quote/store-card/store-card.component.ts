import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.css']
})
export class StoreCardComponent implements OnInit {
  
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    /*this.firstFormGroup = this._formBuilder.group({
      addressOneCtrl: ['', Validators.required],
      addressTwoCtrl: ['', Validators.required],
      addressCityCtrl: ['', Validators.required],
      addressStateCtrl: ['', Validators.required],
      addressZipCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      yearBuiltCtrl: ['', Validators.required],
      sqFtCtrl: ['', Validators.required],
      buildingCovgCtrl: ['', Validators.required],
      salesCtrl: ['', Validators.required]
    });  */
    this.firstFormGroup = this._formBuilder.group({
      addressOneCtrl: ['', Validators.required],
      addressTwoCtrl: ['', Validators.required],
      addressCityCtrl: ['', Validators.required],
      addressStateCtrl: ['', Validators.required],
      addressZipCtrl: ['', Validators.required],   
      yearBuiltCtrl: ['', Validators.required],
      sqFtCtrl: ['', Validators.required],
      buildingCovgCtrl: ['', Validators.required],
      salesCtrl: ['', Validators.required]
    });
  }

  addressFormControl = new FormControl('', [
    Validators.required    
  ]);

  zipFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(5)
  ]);

  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
   ];

   bldngCovgOptions = [
    {value: true, viewValue: 'Yes'},
    {value: false, viewValue: 'No'}    
  ];

  matcher = new MyErrorStateMatcher();

  

}

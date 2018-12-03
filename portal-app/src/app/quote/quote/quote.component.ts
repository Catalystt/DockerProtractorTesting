import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  stores = [{

    Address1: '',
    Address2: '',
    City: '',
    State: '',
    ZipCode: '',
    YearBuilt: '',
    SquareFootage: '',
    BuildingCoverage: '',
    Sales: '',
    coverages: [
      {
        type: "BPP",
        selectedValue: 300000
      },
      {
        type: "Deductible",
        selectedValue: 500
      },
      {
        type: "BusinessIncome",
        selectedValue: "ALS (12 months of restroration)"
      },
      {
        type: "Franchise",
        selectedValue: "Per Limits in Form"
      },
      {
        type: "FoodSpoilage",
        selectedValue: 15000
      },
      {
        type: "Signs",
        selectedValue: 10000
      },
      {
        type: "UtilityServiceDirectDamage",
        selectedValue: 5000
      },
      {
        type: "UtilityServiceTimeElement",
        selectedValue: 25000
      },
      {
        type: "MoneySecurities",
        selectedValue: 10000
      },
      {
        type: "Building",
        selectedValue: 100000
      }]

  }];

  constructor() {
  }

  ngOnInit() {

  }

  onclick(e) {
    console.log(e);
  }

}

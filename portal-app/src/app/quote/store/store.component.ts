import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SessionService } from '../../services/session.service';

@Component({
    selector: 'quote-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

    bldngCovgOptions = [
        { value: true, viewValue: 'Yes' },
        { value: false, viewValue: 'No' }
    ];

    stores = [{}];

    constructor(private session: SessionService) {

        //this.store_list.push(this.store_default);
    }

    ngOnInit() {

    }

    add_store = function () {
        let store_default = {
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
        };
        this.stores.push(store_default);
    }

    delete_store = function (store) {

        let index = this.stores.indexOf(store);
        this.stores.splice(index, 1);
        this.updateSession('store_list', this.stores);

    }

    updateSession(): void {
        this.session.update('store_list', this.stores);
    }

}


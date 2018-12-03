import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SessionService } from '../../services/session.service';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
    stores : [{}];

    propertyGroup: FormGroup;
    
    //store_list: any[] = [];

    limits = [];

    bpp_limit = [
        { value: 300000, viewValue: '$300,000' },
        { value: 500000, viewValue: '$500,000' }
    ];

    food_limit = [
        { value: 15000, viewValue: '$15,000' },
        { value: 20000, viewValue: '$20,000' },
        { value: 25000, viewValue: '$25,000' },
        { value: 30000, viewValue: '$30,000' },
        { value: 35000, viewValue: '$35,000' }
    ];

    signs_limit = [
        { value: 10000, viewValue: '$10,000' },
        { value: 15000, viewValue: '$15,000' },
        { value: 20000, viewValue: '$20,000' },
        { value: 25000, viewValue: '$25,000' },
        { value: 30000, viewValue: '$30,000' }
        
    ];

    utility_damage_limit = [       
        { value: 5000, viewValue: '$5,000' },
        { value: 10000, viewValue: '$10,000' },
        { value: 15000, viewValue: '$15,000' },
        { value: 20000, viewValue: '$20,000' },
        { value: 25000, viewValue: '$25,000' }
    ];

    utility_time_limit = [       
        { value: 25000, viewValue: '$25,000' },
        { value: 30000, viewValue: '$30,000' },
        { value: 35000, viewValue: '$35,000' },
        { value: 40000, viewValue: '$40,000' },
    ];

    money_limit = [              
        { value: 10000, viewValue: '$10,000' },
        { value: 15000, viewValue: '$15,000' },
        { value: 20000, viewValue: '$20,000' },
        { value: 25000, viewValue: '$25,000' }
    ];



    deductible = [
        { value: 500, viewValue: '$500' }
    ]

    constructor(private _formBuilder: FormBuilder, private session: SessionService) {        
    }

    ngOnInit() {
        this.propertyGroup = this._formBuilder.group({
            bppCtrl: [300000, Validators.required],
            deductibleCtrl: [500, Validators.required],
            biCtrl: ['ALS (12 months of restoration)'],
            franchiseCtrl: ['Franchise Restaurant Coverage Extension'],
            foodCtrl: [15000, Validators.required],   
            signsCtrl: [10000, Validators.required],
            utilityDamageCtrl: [5000, Validators.required],
            utilityTimeCtrl: [25000, Validators.required],
            equipmentCtrl: ['Included, up to Property Limits Shown'],
            moneyCtrl: [10000, Validators.required],
            buildingCtrl: [100000, Validators.required]            
          });

        this.limits = [
            {
                type: "EachOccurrence",            
                label: "Each Occurrence", 
                defaultValue: 1000000,
                format: "currency"
            },
            {
                type: "GenAggregatePerLocation",
                label: "General Aggregate Per Location",
                defaultValue: 2000000,
                format: "currency"
            },
            {
                type: "PCOAggregateLimit",
                label: "Products & Completed Operations Aggregate",
                defaultValue: 2000000,
                format: "currency"                
            },
            {
                type: "Deductible",
                label: "Deductible",
                defaultValue: "0",
                format: "currency"
            },
            {
                type: "PDLegalLiability",
                label: "Property Damage Legal Liability",
                defaultValue: 300000,
                format: "currency"
            },
            {
                type: "PAI",
                label: "Personal Injury & Advertising",
                defaultValue: 1000000,
                format: "currency"
            },
            {
                type: "HiredNonOwnedAuto",
                label: "Hired & Non-Owned Auto",
                defaultValue: 1000000,
                format: "currency"
            },
            {
                type: "EmployeeBenefits",
                label: "Employee Benefits",            
                defaultValue: 1000000,
                format: "currency"
            },
            {
                type: "EmploymentRelatedPracticesLiability",
                label: "Employment Related Practices Liability",
                defaultValue: 10000,
                format: "currency"
            }
    
        ];
    }

    pullsession(): void{
        this.stores = this.session.get('store_list');
    }

    

    panelOpenState: boolean = false;
}

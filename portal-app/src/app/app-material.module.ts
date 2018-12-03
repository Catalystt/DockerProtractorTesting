import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';



const materials = [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDatepickerModule,
    MatDividerModule,
    MatMenuModule,
    MatTabsModule,
    MatListModule
]

@NgModule({
  imports: [
    CommonModule,
    materials
  ],
  exports: [
    materials
  ],
  declarations: []
})
export class AppMaterialModule { }

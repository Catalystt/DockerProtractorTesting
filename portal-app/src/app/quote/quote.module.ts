import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { StoreComponent } from './store/store.component';
import { AppMaterialModule } from '../app-material.module';
import { StoreCardComponent } from './store-card/store-card.component';
import { SummaryComponent } from './summary/summary.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { QuoteComponent } from './quote/quote.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { SubmitQuoteComponent } from './submit-quote/submit-quote.component';
import { HomeComponent } from './home/home.component'

const quoteRoutes: Routes = [
  { path: 'littlecaesars', component: QuoteComponent },  
  { path: 'summary', component: SummaryComponent },
]

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(quoteRoutes)
  ],
  exports: [ RouterModule ],
  declarations: [StoreComponent, StoreCardComponent, SummaryComponent, FooterComponent, MenuComponent, QuoteComponent, ContactInfoComponent, SubmitQuoteComponent, HomeComponent]
})
export class QuoteModule { }

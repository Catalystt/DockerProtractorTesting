import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SplashComponent } from './splash/splash.component';
import { AppMaterialModule } from '../app-material.module';
import { MenuComponent } from './menu/menu.component';
import { QuoteComponent } from '../quote/quote/quote.component';

const quoteRoutes: Routes = [
  { path: 'littlecaesars', component: QuoteComponent }
]

@NgModule({
  imports: [
    CommonModule, AppMaterialModule, RouterModule.forChild(quoteRoutes)
  ],
  exports: [ RouterModule ],
  declarations: [SplashComponent, MenuComponent]
})
export class LandingModule { }

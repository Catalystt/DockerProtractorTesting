import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './quote/store/store.component';
import { SplashComponent } from './landing/splash/splash.component';
import { SummaryComponent } from './quote/summary/summary.component';
import { QuoteComponent } from './quote/quote/quote.component';
import { HomeComponent } from './quote/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'littlecaesars/quote', component: QuoteComponent },
  { path: 'home', component: SplashComponent },
  { path: 'littlecaesars/home', component: HomeComponent },
];

@NgModule({  
  imports: [ RouterModule.forRoot(routes) ],  
  exports: [ RouterModule ]
})


export class AppRoutingModule { }

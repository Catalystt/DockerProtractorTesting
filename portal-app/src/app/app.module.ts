import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material.module'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QuoteModule } from './quote/quote.module';
import { LandingModule } from './landing/landing.module';
import { SessionService } from './services/session.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    AppRoutingModule,
    QuoteModule,
    LandingModule
  ],  
  exports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

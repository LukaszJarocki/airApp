import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { NavSectionComponent } from './components/nav-section/nav-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { CommonModule } from '@angular/common';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { DestinationSectionComponent } from './components/destination-section/destination-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookFormSectionComponent } from './components/book-form-section/book-form-section.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { HttpClientModule } from '@angular/common/http';
import { AirbusSchemaComponent } from './components/airbus-schema/airbus-schema.component';
import { ProgressStepComponent } from './components/progress/progress-step/progress-step.component';
import { ProgressStepDirective } from './components/progress/progress-step.directive';
import { ProgressComponent } from './components/progress/progress.component';
import { BookSectionComponent } from './components/book-section/book-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { OfferSectionComponent } from './components/offer-section/offer-section.component';
import { AirbusInfoSectionComponent } from './components/airbus-info-section/airbus-info-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    NavSectionComponent,
    FooterSectionComponent,
    DestinationSectionComponent,
    BookFormSectionComponent,
    InfoSectionComponent,
    AirbusSchemaComponent,
    ProgressStepComponent,
    ProgressStepComponent,
    ProgressStepDirective,
    ProgressComponent,
    BookSectionComponent,
    AboutSectionComponent,
    OfferSectionComponent,
    AirbusInfoSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

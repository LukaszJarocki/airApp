import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { NavSectionComponent } from './components/nav-section/nav-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { CommonModule } from '@angular/common';
import {
  NgbAlertModule,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { DestinationSectionComponent } from './components/destination-section/destination-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookFormSectionComponent } from './components/book-form-section/book-form-section.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgressStepComponent } from './components/progress/progress-step/progress-step.component';
import { ProgressStepDirective } from './components/progress/progress-step.directive';
import { ProgressComponent } from './components/progress/progress.component';
import { BookSectionComponent } from './components/book-section/book-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { OfferSectionComponent } from './components/offer-section/offer-section.component';
import { AirbusInfoSectionComponent } from './components/airbus-info-section/airbus-info-section.component';
import { TestComponent } from './components/test/test.component';
import { EmbraerInfoSectionComponent } from './components/embraer-info-section/embraer-info-section.component';
import { BoeingInfoSectionComponent } from './components/boeing-info-section/boeing-info-section.component';
import { APIWeatherSectionComponent } from './components/api-weather-section/api-weather-section.component';
import { ParisAboutComponent } from './components/paris-about/paris-about.component';
import { MatSelectModule } from '@angular/material/select';
import { BostonAboutComponent } from './components/boston-about/boston-about.component';
import { LondonAboutComponent } from './components/london-about/london-about.component';
import { TokyoAboutComponent } from './components/tokyo-about/tokyo-about.component';
import { BeijingAboutComponent } from './components/beijing-about/beijing-about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    NavSectionComponent,
    FooterSectionComponent,
    DestinationSectionComponent,
    BookFormSectionComponent,
    ProgressStepComponent,
    ProgressStepComponent,
    ProgressStepDirective,
    ProgressComponent,
    BookSectionComponent,
    AboutSectionComponent,
    OfferSectionComponent,
    AirbusInfoSectionComponent,
    TestComponent,
    EmbraerInfoSectionComponent,
    BoeingInfoSectionComponent,
    APIWeatherSectionComponent,
    ParisAboutComponent,
    BostonAboutComponent,
    LondonAboutComponent,
    TokyoAboutComponent,
    BeijingAboutComponent
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
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

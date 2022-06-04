
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog'

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
import { BoeingSchemaComponent } from './components/boeing-schema/boeing-schema.component';
import { EmbraerSchemaComponent } from './components/embraer-schema/embraer-schema.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';
import { AirbusSchemaComponent } from './components/airbus-schema/airbus-schema.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    NavSectionComponent,
    FooterSectionComponent,
    DestinationSectionComponent,
    BookFormSectionComponent,
    InfoSectionComponent,
    BoeingSchemaComponent,
    EmbraerSchemaComponent,
    AirbusSchemaComponent
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
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { DestinationSectionComponent } from './components/destination-section/destination-section.component';
import { OfferSectionComponent } from './components/offer-section/offer-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HeroSectionComponent },
  { path: 'about', component: AboutSectionComponent },
  { path: 'offer', component: OfferSectionComponent },
  { path: 'destination', component: DestinationSectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

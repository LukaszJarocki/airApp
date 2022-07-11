import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-destination-section',
  templateUrl: './destination-section.component.html',
  styleUrls: ['./destination-section.component.scss'],
})
export class DestinationSectionComponent {
  images1 = '../../../assets/photos/boston.jpg';
  images2 = '../../../assets/photos/london.jpg';
  images3 = '../../../assets/photos/tokyo.jpg';
  images4 = '../../../assets/photos/pekin.jpg';
  constructor() {}
}

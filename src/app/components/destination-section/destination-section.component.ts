import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-section',
  templateUrl: './destination-section.component.html',
  styleUrls: ['./destination-section.component.scss']
})
export class DestinationSectionComponent  {


  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


}

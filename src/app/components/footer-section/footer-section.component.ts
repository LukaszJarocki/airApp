import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss'],
})
export class FooterSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toHome() {
    document
      .getElementById('home')
      .scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    console.log(this.toHome);
  }
  toAbout() {
    document
      .getElementById('about')
      .scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }
  toOffer() {
    document.getElementById('offer').scrollIntoView();
  }
  toDestination() {
    document
      .getElementById('destination')
      .scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }
  onActive() {
    window.scroll(0, 0);
  }
}

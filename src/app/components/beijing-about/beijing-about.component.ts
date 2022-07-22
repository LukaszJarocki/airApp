import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beijing-about',
  templateUrl: './beijing-about.component.html',
  styleUrls: ['./beijing-about.component.scss']
})
export class BeijingAboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toTicket() {
    document
      .getElementById('ticket')
      .scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    console.log(this.toTicket);
  }
}

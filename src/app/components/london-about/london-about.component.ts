import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-london-about',
  templateUrl: './london-about.component.html',
  styleUrls: ['./london-about.component.scss']
})
export class LondonAboutComponent implements OnInit {

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

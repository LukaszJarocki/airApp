import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boston-about',
  templateUrl: './boston-about.component.html',
  styleUrls: ['./boston-about.component.scss']
})
export class BostonAboutComponent implements OnInit {

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

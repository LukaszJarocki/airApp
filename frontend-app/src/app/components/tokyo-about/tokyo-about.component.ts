import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tokyo-about',
  templateUrl: './tokyo-about.component.html',
  styleUrls: ['./tokyo-about.component.scss']
})
export class TokyoAboutComponent implements OnInit {

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

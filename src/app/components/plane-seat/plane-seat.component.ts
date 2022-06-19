import { Component, Input, OnInit } from '@angular/core';
import { SeatRow } from '../../models/seat-row.model';
import { Seat } from 'src/app/models/seat.model';

@Component({
  selector: 'app-plane-seat',
  templateUrl: './plane-seat.component.html',
  styleUrls: ['./plane-seat.component.scss']
})
export class PlaneSeatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



}

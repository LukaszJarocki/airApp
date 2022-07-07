import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AirbusInfoSectionComponent } from '../airbus-info-section/airbus-info-section.component';

@Component({
  selector: 'app-offer-section',
  templateUrl: './offer-section.component.html',
  styleUrls: ['./offer-section.component.scss']
})
export class OfferSectionComponent implements OnInit {

  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogOne() {
    this.dialogRef.open(AirbusInfoSectionComponent, {
      width: '70vw',
      maxHeight: '100vh',
      autoFocus: false,
    });
  }
}

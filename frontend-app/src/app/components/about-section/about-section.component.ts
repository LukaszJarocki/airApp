import { AirbusInfoSectionComponent } from './../airbus-info-section/airbus-info-section.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoeingInfoSectionComponent } from '../boeing-info-section/boeing-info-section.component';
import { EmbraerInfoSectionComponent } from '../embraer-info-section/embraer-info-section.component';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {

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
  openDialogTwo() {
    this.dialogRef.open(BoeingInfoSectionComponent, {
      width: '70vw',
      maxHeight: '100vh',
      autoFocus: false,
    });
  }
  openDialogThree() {
    this.dialogRef.open(EmbraerInfoSectionComponent, {
      width: '70vw',
      maxHeight: '100vh',
      autoFocus: false,
    });
  }
}



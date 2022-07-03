import { AirbusInfoSectionComponent } from './../airbus-info-section/airbus-info-section.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
}



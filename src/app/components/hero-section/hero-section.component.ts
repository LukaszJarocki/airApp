import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookSectionComponent } from '../book-section/book-section.component';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  constructor(private dialogRef: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialogRef.open(BookSectionComponent, {
      width: '70vw',
      maxHeight: '100vh',
      autoFocus: false,
    });
  }
}

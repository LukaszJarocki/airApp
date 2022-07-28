import { NavSectionComponent } from './../nav-section/nav-section.component';
import { BookFormSectionComponent } from './../book-form-section/book-form-section.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ProgressComponent } from '../progress/progress.component';
import { MatDialogRef } from '@angular/material/dialog';

interface PassengerName {
  string;
}
@Component({
  selector: 'app-book-section',
  templateUrl: './book-section.component.html',
  styleUrls: ['./book-section.component.scss'],
})
export class BookSectionComponent implements OnInit {
  @ViewChild(BookFormSectionComponent) child!: BookFormSectionComponent;

  ourObject: any = {};
  passengerNameData = '';
  constructor(
    public dialogRef: MatDialogRef<NavSectionComponent>
  ) {}
  @Input()
  passengerName: PassengerName;

  ngOnInit() {}

  importEvent(element: any) {
    this.ourObject = element;
    console.log('Otrzymaliśmy', element);
  }

  value = '';

  goNext(progress: ProgressComponent) {
    progress.next();
    console.log(progress);
  }

  goPrev(progress: ProgressComponent){
    progress.prev()
  }

  onNoClick(): void {



    this.dialogRef.close();


  }

  onStateChange(event: any) {
    console.log(event);
  }

  toTicket() {
    document
      .getElementById('ticket')
      .scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    console.log(this.toTicket);
  }
}

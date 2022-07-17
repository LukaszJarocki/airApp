import { BookFormSectionComponent } from './../book-form-section/book-form-section.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ProgressComponent } from '../progress/progress.component';

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
  constructor() {}
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
  }

  onStateChange(event: any) {
    console.log(event);
  }


}

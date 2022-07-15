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
  ourPrice: any = {};

  passengerNameData = '';
  constructor() {}
  @Input()
  passengerName: PassengerName;

  ngOnInit() {
  }
/*   addPassengerName(name: string) {
    this.passengerNameArr.push(name);
  }
  addPassengerFamilyName(familyName: string) {
    this.passengerFamilyNameArr.push(familyName);
  }
  addCityFrom(cityFrom: string) {
    this.cityFromArr.push(cityFrom);
  }
  addCityTo(cityTo: string) {
    this.cityToArr.push(cityTo);
  }
  addDateBord(dateBord: string) {
    this.dateBordArr.push(dateBord);
  }
  addSelectSeat(seat: string) {
    this.selectedSeatArr.push(seat);
  }*/



  importEvent(element: any){
    this.ourObject = element
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

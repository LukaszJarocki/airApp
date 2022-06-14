import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AirportDataService } from 'src/app/service/airport-data.service';

@Component({
  selector: 'app-book-form-section',
  templateUrl: './book-form-section.component.html',
  styleUrls: ['./book-form-section.component.scss'],
})
export class BookFormSectionComponent {
  visitorDataForm:FormGroup;
  allVisitorsDataArray: any = [];

  constructor(
    private airportDataService:AirportDataService,
    private fb: FormBuilder
  ){
    this.visitorDataForm = this.fb.group({
      cityFrom: ['', Validators.required], //sprawdza czy input jest obowiązkowy
      cityTo: ['', Validators.required],
      dateDepar: ['', Validators.required],
      class: ['', Validators.required],
      adults: [''],
      kids: ['']
    })

  }

  ngOnInit(){
    this.getVisitorsData();

  }

  addVisitDetails(){
    const dataForm: any ={
      cityFrom: this.visitorDataForm.get('cityFrom')?.value,
      cityTo: this.visitorDataForm.get('cityTo')?.value,
      dateDepar: this.visitorDataForm.get('dateDepar')?.value,
      class: this.visitorDataForm.get('class')?.value,
      adults: this.visitorDataForm.get('adults')?.value,
      kids: this.visitorDataForm.get('kids')?.value
    }



    console.log(dataForm);



  this.airportDataService.createVisit(dataForm).subscribe((data: any) =>{
    console.log(data);
    alert('Dane zostały dodane do bazy');
    this.getVisitorsData() //resetuje formularz
  }, err => {
    console.log('Wystąpił błąd', err);
  })


  }

  getVisitorsData(){
    this.airportDataService.getAllVisitors().subscribe((data:any)=>{
      this.allVisitorsDataArray = data;
      console.log(data);

    })
  }









}

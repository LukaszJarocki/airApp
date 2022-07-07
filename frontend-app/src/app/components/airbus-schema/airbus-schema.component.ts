import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AirportDataService } from 'src/app/service/airport-data.service';



@Component({
  selector: 'app-airbus-schema',
  templateUrl: './airbus-schema.component.html',
  styleUrls: ['./airbus-schema.component.scss']
})
export class AirbusSchemaComponent  {

 visitorDataForm:FormGroup;
  allVisitorsDataArray: any = [];

  constructor(
    private airportDataService:AirportDataService,
    private fb: FormBuilder
  ){
    this.visitorDataForm = this.fb.group({
      seatNumber: ['']
    })

  }

  ngOnInit(){
    this.getVisitorsData();

  }

  addVisitDetails(){
    const dataForm: any ={
      seatNumber: this.visitorDataForm.get('seatNumber')?.value,

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

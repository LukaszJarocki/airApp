import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AirportDataService } from 'src/app/service/airport-data.service';
import { ProgressComponent } from '../progress/progress.component';

@Component({
  selector: 'app-book-form-section',
  templateUrl: './book-form-section.component.html',
  styleUrls: ['./book-form-section.component.scss'],
})
export class BookFormSectionComponent {
  @Output() newTestToSend = new EventEmitter<any>();
  @Output() newPrice = new EventEmitter<any>();

  visitorDataForm: FormGroup;
  allVisitorsDataArray: any = [];
  showMyContainer: boolean = false;
  dateDepar: any = [];
  passengerName: string = '';
  passengerFamilyName: string = '';
  value: boolean;
  seatEco: any = '';
  seatBus: any = '';
  seatEconomy: string;
  seatBusiness: any;
  selected: string[];
  selectedOptionClass: string = '';
  optionsClass = [
    { class: 'change class', value: 0 },
    { class: 'Economy', value: 1 },
    { class: 'Business', value: 2 },
  ];
  selectedOptionCityFrom: string = '';
  optionsCityFrom = [
    { from: 'change city', value: 'city' },
    { from: 'Katowice', value: 'katowice' },
    { from: 'Warszawa', value: 'warszawa' },
    { from: 'Gdańsk', value: 'warszawa' },
    { from: 'Poznań', value: 'warszawa' },
  ];
  selectedOptionCityTo: string = '';
  optionsCityTo: any[] = [
    { to: 'change city', value: 'city' },
    { to: 'London', value: '1500' },
    { to: 'Boston', value: '3000' },
    { to: 'Beijing', value: '2700' },
    { to: 'Tokyo', value: '4000' },
  ];
  filas = [
    { y: 250, x: [154.8, 175.2, 195.5, 0, 0, 0] },
    { y: 281.9, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 313.9, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 345.9, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 377.8, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 427.8, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 459.8, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 492.1, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 543.6, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 575.3, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 627.1, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 679.5, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 711.4, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 743.3, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 775.2, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 807.1, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 839, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 870.9, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 902.8, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 934.7, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 966.3, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 998.5, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 1030.4, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 1062.3, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 1094.2, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
    { y: 1126.1, x: [154.8, 175.2, 195.5, 245.1, 265.5, 285.8] },
  ];
  letras = ['A', 'B', 'C', 'D', 'E', 'F'];
  status: any = this.filas.map((x) => [
    'free',
    'free',
    'free',
    'free',
    'free',
    'free',
  ]);

  economyTicketPrice: number = 1000;
  BusinessTicketPrice: number = 2000;
  convFee: number = 30;
  totalPrice: number = 0;
  currency: string = 'zł';
  class: string = '';
  from: string = '';
  to: string = '';

  constructor(
    private airportDataService: AirportDataService,
    private fb: FormBuilder
  ) {
    this.visitorDataForm = this.fb.group({
      passengerName: ['', Validators.required],
      passengerFamilyName: ['', Validators.required],
      cityFrom: ['', Validators.required],
      cityTo: ['', Validators.required],
      dateDepar: ['', Validators.required],
      class: ['', Validators.required],
      adults: [''],
      kids: [''],
      selected: [''],
    });
  }

  ngOnInit() {
    this.getVisitorsData();
    const booked = ['1A', '2D', '5D', '7A', '15F', '26B'];
    booked.forEach((x) => {
      this.status[+x.slice(0, -1) - 1][
        this.letras.findIndex((l) => l == x.slice(-1))
      ] = 'booked';
    });
  }



  addVisitDetails() {
    const dataForm: any = {
      passengerName: this.visitorDataForm.get('passengerName')?.value,
      passengerFamilyName: this.visitorDataForm.get('passengerFamilyName')
        ?.value,
      cityFrom: this.visitorDataForm.get('cityFrom')?.value,
      cityTo: this.visitorDataForm.get('cityTo')?.value,
      dateDepar: this.visitorDataForm.get('dateDepar')?.value,
      class: this.visitorDataForm.get('class')?.value,
      adults: this.visitorDataForm.get('adults')?.value,
      kids: this.visitorDataForm.get('kids')?.value,
      selected: this.visitorDataForm.get('selected')?.value,
    };
    if(!dataForm.selected){
      alert('Proszę wybrać miejsce siedzące')
    }
    console.log(dataForm);

    this.airportDataService.createVisit(dataForm).subscribe(
      (data: any) => {
        console.log(data);
        alert('Dane zostały dodane do bazy');
        this.getVisitorsData(); //resetuje formularz
      },
      (err) => {
        console.log('Wystąpił błąd', err);
      }
    );

    if (this.selected.length > 0 && this.selectedOptionClass === 'Economy') {
      this.seatEconomy =
        this.economyTicketPrice * this.selected.length +
        this.convFee +
        this.currency;
    } else if (
      this.selected.length > 0 &&
      this.selectedOptionClass === 'Business'
    ) {
      this.seatBusiness =
        this.BusinessTicketPrice * this.selected.length +
        this.convFee +
        this.currency;
    }
    else {
      alert('No seats selected!');
    }

    setTimeout(() => {
      const ourObject = {
        cityFrom: this.selectedOptionCityFrom,
        cityTo: this.selectedOptionCityTo,
        namePassenger: this.passengerName,
        familyPassenger: this.passengerFamilyName,
        dateFly: this.dateDepar,
        classOption: this.selectedOptionClass,
        economy: this.seatEconomy,
        buissnes: this.seatBusiness,
        seat: this.selected,
        eco: this.seatEco,
      };
      this.newTestToSend.emit(ourObject);
      console.log('wysłano', ourObject);
    }, 200);
  }

  getVisitorsData() {
    this.airportDataService.getAllVisitors().subscribe((data: any) => {
      this.allVisitorsDataArray = data;
      console.log(data);
    });
  }

  goNext(progress: ProgressComponent) {
    progress.next();
  }

  ////////////CHECK SEATS////////////////////////

  click(fila: any, column: any) {
    if (this.status[fila][column] == 'free' && this.count() < 9)
      this.status[fila][column] = 'selected';
    else {
      if (this.status[fila][column] == 'selected')
        this.status[fila][column] = 'free';
    }
    this.selected = this.seats();
  }
  count() {
    return this.status
      .map((x) => x.filter((s) => s == 'selected').length)
      .reduce((a, b) => a + b);
  }
  seats() {
    const seats = [];
    this.status.forEach((x, i) => {
      x.forEach((y, j) => {
        if (y == 'selected') seats.push(i + 1 + this.letras[j]);
      });
    });
    return seats;
  }
}

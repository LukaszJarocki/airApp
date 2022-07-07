import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AirportDataService } from 'src/app/service/airport-data.service';
import { ProgressComponent } from '../progress/progress.component';

@Component({
  selector: 'app-book-section',
  templateUrl: './book-section.component.html',
  styleUrls: ['./book-section.component.scss']
})
export class BookSectionComponent implements OnInit, AfterViewInit {
 

  constructor()
  {  }

  ngOnInit() {

  }

  goNext(progress: ProgressComponent) {
    progress.next();
  }

  onStateChange(event: any) {
    console.log(event);
  }

  ngAfterViewInit() {}



}

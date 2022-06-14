import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import $ from 'jquery'
import {ElementRef} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-embraer-schema',
  templateUrl: './embraer-schema.component.html',
  styleUrls: ['./embraer-schema.component.scss']
})
export class EmbraerSchemaComponent implements OnInit {

  public seats: Array<Array<{x: number, y: number, selected: boolean}>> = [];
  col = [0, 1, 2];
  range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  y= 5;
  x=16;
  public toggleStyle: boolean = false;

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.seats[i] = [];
      for (let j = 0; j < 10; j++) {
        this.seats[i].push({x: (i * 10), y: (j * 10), selected: false});
      }
    }
  }

  ngOnInit() {
  }




}

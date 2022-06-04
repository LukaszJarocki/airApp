import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeatServiceService {
  private _seats : number = 0;
  constructor() { }

  getSeats(){
    return this._seats;
  }

  setSeats(value:any){
    this._seats = value;
  }
}

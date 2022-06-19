import { Component } from '@angular/core';
import { Router } from '@angular/router';

//Component decorator
@Component({
    selector: 'seat-list',
    templateUrl: './seat.component.html',
    styleUrls: ['./seat.component.scss']
})
export class SeatComponent {
  public settings: any;
  public numOfSeats = [];


    //variable declarations
    planeName:string = "Airbus";

    rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G' ];
    cols: number[]  = [1, 2, 3, 4, 5];

    reserved: string[] = ['A1', 'A2', 'B1', 'F1', 'F2','F6', 'F7', 'F8', 'H1', 'H2'];
    selected: string[] = [];
    seats: boolean[][] = [];

    ticketPrice: number = 120;
    convFee: number = 30;
    totalPrice: number = 0;
    currency: string = "zł";

    //return status of each seat
    getStatus = (seatPos: string) => {
        if(this.reserved.indexOf(seatPos) !== -1) {
            return 'reserved';
        } else if(this.selected.indexOf(seatPos) !== -1) {
            return 'selected';
        }
        return
    }
    //clear handler
    clearSelected = () => {
        this.selected = [];
    }
    //click handler
    seatClicked = (seatPos: string) => {
        var index = this.selected.indexOf(seatPos);

        if(index !== -1) {
            // seat already selected, remove
            this.selected.splice(index, 1)
        } else {
            //push to selected array only if it is not reserved
            if(this.reserved.indexOf(seatPos) === -1)
                this.selected.push(seatPos);
        }
    }
    //Buy button handler
    showSelected = () => {
        if(this.selected.length > 0) {
            alert("Selected Seats: " + this.selected + "\nTotal: "+(this.ticketPrice * this.selected.length + this.convFee));
        } else {
            alert("No seats selected!");
        }
    }



}

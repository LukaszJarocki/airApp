import { Seat } from './seat.model';

export class SeatRow {
    /**
     *  Row number
     */
     rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    number: number;

    /**
     * Row type
     * For future use
     */
    type: string;

    /**
     *  All seats in a row.
     */
    seats: Seat[];

}

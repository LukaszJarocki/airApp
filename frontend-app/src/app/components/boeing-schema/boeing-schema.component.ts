
import { Component} from '@angular/core';

@Component({
  selector: 'app-boeing-schema',
  templateUrl: './boeing-schema.component.html',
  styleUrls: ['./boeing-schema.component.scss']
})
export class BoeingSchemaComponent  {

constructor(){}

status: boolean = false;
checkSeat($event: any){
    this.status = !this.status;
}

}

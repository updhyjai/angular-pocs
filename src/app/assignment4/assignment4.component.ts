import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component {

  evenNumbers:Array<number> = []
  oddNumbers:Array<number> = []

   isEvenCount(count){
    return count % 2 === 0
  }
  handleEventFired(count){
    console.log('count: ',count)
   if( this.isEvenCount(count))
    this.evenNumbers.push(count)
  else{
    this.oddNumbers.push(count)
  }
  }
}

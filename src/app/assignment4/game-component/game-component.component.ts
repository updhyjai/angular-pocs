import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.css']
})
export class GameComponentComponent {
  currentCount: number = 0;
  private intervalId;

  @Output() onEventFired= new EventEmitter<number>();

 

  startCounter(){
     this.intervalId =  setInterval(()=>{
      this.currentCount +=1; 
      // if(this.isEvenCount){
        this.onEventFired.emit(this.currentCount)
      // }else{
      //   this.onOddCounter.emit(this.currentCount)
      // }
     },1000)
  }

  stopCounter(){
    clearInterval(this.intervalId)
  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
  showPasswordToggle = false;
  operationLogs = [];

  onToggle(){
    this.operationLogs.push(`Operation done at ${Date.now()}`)
    this.showPasswordToggle = !this.showPasswordToggle;
  }

  isIndexGreaterThanFive(log){
    return this.operationLogs.indexOf(log) > 4
  }

}

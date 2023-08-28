import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { CounterService, counterType } from './services/counter.service';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.css']
})
export class Assignment5Component implements OnInit{

  activeUsers = []
  inactiveUsers = []

  inactiveOperations: counterType 
  activeOperations: counterType

  constructor(private userService: UserService, private counterService: CounterService) {}

  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
    this.activeOperations = this.counterService.activeCounts;
    this.inactiveOperations = this.counterService.inactiveCounts;
  }
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];


  onSetToInactive(id: number) {
    // this.inactiveUsers.push(this.activeUsers[id]);
    // this.activeUsers.splice(id, 1);
    this.userService.onSetToInactive(id)
  }

  onSetToActive(id: number) {
    // this.activeUsers.push(this.inactiveUsers[id]);
    // this.inactiveUsers.splice(id, 1);
    this.userService.onSetToActive(id)

  }
}

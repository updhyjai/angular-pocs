import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";
@Injectable()
export class UserService{

  constructor(private counterService: CounterService){}

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
  
    onSetToInactive(id: number) {
      this.counterService.updateCounter(this.activeUsers[id],'INACTIVE')

      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
    }
  
    onSetToActive(id: number) {
      this.counterService.updateCounter(this.inactiveUsers[id],'ACTIVE')

      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);

    }
}
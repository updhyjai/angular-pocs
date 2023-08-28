import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { Assignment5Component } from './assignment5.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UserService } from './services/user.service';
import { CounterService } from './services/counter.service';

@NgModule({
  declarations: [
    ActiveUsersComponent,
    InactiveUsersComponent,
    Assignment5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [UserService, CounterService],
  exports: [Assignment5Component], 
})
export class Assignment5Module { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  private serverStatus = '';
  servers:Array<string> = [];
  private serverName = '';
  userName = 'user1'
  error = '';
  getServerStatus(){
    if( !this.servers.length){
this.serverStatus = 'Servers are not available at the moment'
    }else{
      this.serverStatus = 'Servers are available'
    }
    return this.serverStatus
  }

  getServers(){
    return this.servers.length ? this.servers.join('\n') : this.serverStatus;
  }

  onSubmitServer(){
    if(this.serverName.length){
      this.error = ''
    this.servers.push(this.serverName)
  }else{
    this.error = 'Server name is empty'
  }
  }

  onInputServerName(e){
    this.serverName = e.target.value;
  }
}

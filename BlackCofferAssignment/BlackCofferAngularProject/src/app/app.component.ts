import { Component } from '@angular/core';
import { UserserviceService } from './userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlackCoffer Assigment';
  // constructor(private userService:UserserviceService){}
  // ngOnInit()
  // {
  //   this.userService.getUserList().subscribe(Response=>console.log(Response))
  // }
 
}

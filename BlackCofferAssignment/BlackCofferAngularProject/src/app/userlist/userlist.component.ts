import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit {

  users:User[] | undefined;
  constructor(private userService:UserserviceService,private route:Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  
  private getAllUsers()
  {
    this.userService.getUserList().subscribe(data=>{this.users=data});
  }
  

  updateUser(data_id:number)
  {
    this.route.navigate(['update-user',data_id])
  }

  deleteUser(data_id:number)
  {
    this.userService.deleteUserById(data_id).subscribe(data=>{
      alert("Record Deleted !!");
      this.getAllUsers();
    },
    error=>{console.log(error);
    this.getAllUsers();
    });
  }

}

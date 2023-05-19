import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit  {
   
    user:User = new User();
    id!:number;
    
    constructor(private userService:UserserviceService , private router:ActivatedRoute,private route:Router) { }
  
    ngOnInit(): void {
      this.id= this.router.snapshot.params['id'];
      this.userService.getUserByUserId(this.id).subscribe(data=>
        {
          this.user=data;
        },
        error=>console.log(error));
    }
  
   onSubmit() {
    this.userService.updateUser(this.id,this.user).subscribe(data=>{this.goToUserList()},
    
      error=>console.log(error));
    }
   
   goToUserList() {
    this.route.navigate(['/users']);
  }
  }
  
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  user: User =new User(); //User user=new User();
  route: any;
  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
  }

createUser()
{
  //will subscribe data
  this.userService.createUser(this.user).subscribe((data: any)=>{
    console.log(data);
    this.goToUserList();
  },
    (  error: any)=>console.log(error)
  );
}

goToUserList()
{
  this.route.navigate(['/users']);
}

  onSubmit() {
    this.createUser();
    }

}

import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private createUserUrl="http://localhost:9393/createUser";
  private getUserUrl="http://localhost:9393/getUser";

private updateUserUrl="http://localhost:9393/updateUser";
private getUserByIdUrl="http://localhost:9393/getUserById";
private deleteUserIdUrl="http://localhost:9393/deleteUser";

  constructor(private httpClient:HttpClient) { }
  createUser(user:User):Observable<Object>
  {
   return this.httpClient.post(`${this.createUserUrl}`,user);
  }

  getUserList():Observable<User[]>
  {
   return this.httpClient.get<User[]>(`${this.getUserUrl}`);
  } 

  updateUser(id:number,user:User):Observable<object>
  {
   return this.httpClient.put(`${this.updateUserUrl}/${id}`,user);
  }

  
  getUserByUserId(id:number):Observable<User>
  {
   return this.httpClient.get<User>(`${this.getUserByIdUrl}/${id}`);
  }

  deleteUserById(id:number):Observable<Object>
  {
     return this.httpClient.delete(`${this.deleteUserIdUrl}/${id}`);
  }


}

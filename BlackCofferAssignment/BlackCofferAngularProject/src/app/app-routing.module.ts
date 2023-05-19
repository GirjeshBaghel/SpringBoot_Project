import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserListComponent } from './userlist/userlist.component';
import { MyChartComponent } from './my-chart/my-chart.component';

const routes: Routes = [
  {path:'create-user',component:CreateuserComponent},
  {path:'update-user',component:UpdateuserComponent},
  {path:'user-list',component:UserListComponent},
  {path:'my-chart',component:MyChartComponent},
  {path:'**',component:MyChartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

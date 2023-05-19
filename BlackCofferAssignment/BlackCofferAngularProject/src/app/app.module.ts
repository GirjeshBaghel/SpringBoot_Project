import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateuserComponent } from './createuser/createuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserListComponent } from './userlist/userlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyChartComponent } from './my-chart/my-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateuserComponent,
    UpdateuserComponent,
    UserListComponent,
    MyChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

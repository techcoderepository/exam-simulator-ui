import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ScheduledexamslistComponent } from './scheduledexamslist/scheduledexamslist.component';
import { TakeexamComponent } from './takeexam/takeexam.component';
import { CertificationComponent } from './certification/certification.component';
import { ScheduleexamdetailComponent } from './scheduleexamdetail/scheduleexamdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreateComponent,
    UpdateUserComponent,
    MultipleChoiceQuestionComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,    
    ScheduledexamslistComponent, TakeexamComponent, CertificationComponent, ScheduleexamdetailComponent,       
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
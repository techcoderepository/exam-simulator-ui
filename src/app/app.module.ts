import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CertificationComponent } from './certification/certification.component';
import { ScheduleexamdetailComponent } from './scheduleexamdetail/scheduleexamdetail.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ExamInstructionComponent } from './exam-instruction/exam-instruction.component';
import { StartExamComponent } from './start-exam/start-exam.component';

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
    ScheduledexamslistComponent, 
    CertificationComponent, 
    ScheduleexamdetailComponent,
     FooterComponent, 
     HeaderComponent, 
     ExamInstructionComponent,
     StartExamComponent,            
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
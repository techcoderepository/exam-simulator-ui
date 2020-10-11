import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { ExamInstructionComponent } from './exam-instruction/exam-instruction.component';
import { ExamContentComponent } from './exam-content/exam-content.component';

const routes: Routes = [  
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'users', component: UserListComponent },
  { path: 'createUser', component: UserCreateComponent },
  { path: 'updateUser/:userId', component: UpdateUserComponent },
  { path: 'addMultipleChoiceQuestion', component: MultipleChoiceQuestionComponent },  
  { path: 'scheduledexamslist', component: ScheduledexamslistComponent },  
  { path: 'addcertification', component: CertificationComponent },    
  { path: 'scheduleexamdetail', component: ScheduleexamdetailComponent },    
  { path: 'takeexam', component: ExamInstructionComponent },    
  { path: 'starttest', component: ExamContentComponent },    
  
  { path: '',   redirectTo: '/home', pathMatch: 'full' },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
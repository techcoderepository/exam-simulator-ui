import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';

const routes: Routes = [  
  { path: 'users', component: UserListComponent },
  { path: 'createUser', component: UserCreateComponent },
  { path: 'updateUser/:userId', component: UpdateUserComponent },
  { path: 'addMultipleChoiceQuestion', component: MultipleChoiceQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }